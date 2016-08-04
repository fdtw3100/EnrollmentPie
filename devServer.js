var path = require('path');
var express = require('express');
var proxy = require('express-http-proxy');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.use('/dist', express.static('dist'));

app.use('/api', proxy('http://www.example.com/', { //TODO: edit 
    forwardPath: function (req, res) {
        return require('url').parse(req.url).path;
    }
}));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index_dev.html'));
});

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});
