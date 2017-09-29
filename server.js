const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 2222;

const app = express();

app.use(require('morgan')('tiny'));
app.use('/api', require('./server/api'));
app.use(express.static('static'));
app.use(express.static('dist'));
app.use(function(req, res) {
	res.sendFile('/index.html', {root: './dist'});
});

app.listen(PORT);
