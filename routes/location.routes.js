const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');
const router = Router();

router.post(
	'/getLocation',
	async (req, res) => {
		try {
			var ip = req.headers["X-Forwarded-For"] || req.connection.remoteAddress;
			console.log(ip);

			res.status(200).json({ test: 'Регистрация пройдена' })

		} catch (e) {
			res.status(500).json({ message: 'Что то пошло не так. Попробуйте снова.' })
		}
	}
);

module.exports = router;