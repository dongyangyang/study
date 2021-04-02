var EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function () {
    module.exports.emit('ready');
}, 1000);
var a = require('./a');
a.on('ready', function () {
    console.log('module a is ready');
});