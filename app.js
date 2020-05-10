const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const kill = require('kill-port');

const app = express();
app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/location', require('./routes/location.routes'));

const PORT = config.get('port') || 5000;

async function start() {
	try {
		await mongoose.connect(config.get('mongoURI'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});

		app.listen(PORT, (error) => {
			if (error) throw error;

			console.log(`App has been started on port ${PORT}...`);
		});
	} catch (e) {

		kill(PORT, 'tcp')
			.then(console.log)
			.catch(console.log)

		console.log('Server error', e.message);
		process.exit(1);
	}
}

start();