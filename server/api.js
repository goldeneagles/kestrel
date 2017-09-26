const express = require('express');

const db = require('./db');

const router = module.exports = new express.Router();

router.use(require('express-promise')());

router.get('/ping', function(req, res) {
	res.send('pong');
});

router.get('/jobs/list', function(req, res) {
	res.json(db.query("SELECT * FROM jobs")
		.then(result => result.rows));
});

router.use(function(req, res) {
	res.send("Error 404");
});
