const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 2222;

const app = express();

app.all('/api/', require('./api'));
app.use(express.static('static'));
app.use(express.static('dist'));
app.use(function(req, res) {
	res.sendFile('/index.html', {root: './dist'});
});

app.listen(PORT);
