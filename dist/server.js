'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var corOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
var app = (0, _express2.default)();
var host = '0.0.0.0';
var port = process.env.PORT || 5000;

// configure third party middleware
app.use((0, _cors2.default)(corOptions));

app.use(_express2.default.static(__dirname));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'index.html'));
});

app.listen(port, host);