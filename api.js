const express = require('express');

const router = module.exports = new express.Router();

router.get('/ping', function(req, res) {
	res.send('pong');
});

router.use(function(req, res) {
	res.send("Error 404");
});
