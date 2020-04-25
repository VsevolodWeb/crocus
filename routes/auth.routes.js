const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');
const router = Router();

router.post(
	'/register',
	[
		check('email', 'Некорректный e-mail').isEmail(),
		check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
	],
	async(req, res) => {
		try {
			const errors = validationResult(req);
			
			if(!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array(), message: 'Некорретные данные при регистрации'})
			}
			
			const {email, password} = req.body;
			const candidate = await User.findOne({email});
			
			if(candidate) {
				return res.status(400).json({message: 'Такой пользователь уже существует'});
			}
			const hashedPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
			const user = new User({email, password: hashedPassword});
			
			await user.save();
			
			res.status(201).json({message: 'Регистрация пройдена'})
			
		} catch(e) {
			res.status(500).json({message: 'Что то пошло не так. Попробуйте снова.'})
		}
	}
);

router.post(
	'/login',
	[
		check('email', 'Введите корректный e-mail').normalizeEmail().isEmail(),
		check('password', 'Введите пароль').exists()
	],
	async(req, res) => {
		try {
			const errors = validationResult(req);
			
			if(!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array(), message: 'Некорректные данные при входе в личный кабинет'})
			}
			
			const {email, password} = req.body;
			const user = await User.findOne({email});
			
			if(!user) {
				return res.status(400).json({message: 'Вы не зарегистрированы'});
			}
			
			const isMatch = await bcrypt.compare(password, user.password);
			
			if(!isMatch) {
				return res.status(400).json({message: 'Неверный пароль, попробуйте снова.'});
			}
			
			const token  = jwt.sign(
				{userId: user.id}, config.get('jwtSecret'), {expiresIn: '1h'}
			);
			
			return res.json({ token, userId: user.id, message: 'Вход выполнен'});
			
		} catch(e) {
			res.status(500).json({message: 'Что то пошло не так. Попробуйте снова.'});
		}
	}
);

module.exports = router;