const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = module.exports = new express.Router();

function toBool(str) {
	if(!str) return false;
	if(str === "true") return true;
	if(str === "false") return false;
	throw "Invalid boolean value: "+str;
}

router.use(require('express-promise')());
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
router.use(require('multer')().single());

router.get('/ping', function(req, res) {
	res.send('pong');
});

router.get('/jobs/list', function(req, res) {
	res.json(db.query("SELECT * FROM jobs")
		.then(result => result.rows));
});

router.post('/jobs/add', function(req, res, next) {
	if(!req.body.title) return res.status(400).send("Missing title");
	if(!req.body.period) return res.status(400).send("Missing period");
	if(["daily", "weekly"].indexOf(req.body.period) < 0) return res.status(400).send("Invalid period");
	if(!("description" in req.body)) return res.status(400).send("Missing description");
	if(!req.body.points) return res.status(400).send("Missing points");
	res.json(db.query("INSERT INTO jobs (title, period, description, points, personal) VALUES ($1, $2, $3, $4, $5) RETURNING id", [req.body.title, req.body.period, req.body.description, req.body.points, toBool(req.body.personal)])
	.then(result => result.rows[0]));
});

router.use(function(req, res) {
	res.send("Error 404");
});

router.use(function(err, req, res, next) {
	console.error(err);
	if(res.headersSent) return next(err);
	res.status(500).send("Error 500");
});
