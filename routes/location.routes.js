const { Router } = require('express')

const router = Router()

router.get(
	'/get',
	async (req, res) => {
		try {
			const ip = req.headers["X-Forwarded-For"] || req.connection.remoteAddress
			res.status(200).json({ ip })
		} catch (e) {
			res.status(500).json({ message: 'Что то пошло не так. Попробуйте снова.' })
		}
	}
);

module.exports = router