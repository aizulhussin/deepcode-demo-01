const path = require('path')
const http = require('https')
const express = require('express')
const vhost = require('vhost')
const serverReady = require('server-ready')
const conf = require('../conf')


var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello World!');
});

var b = "7"

var a = 7

if(a===b){
    console.log("a is b")
}


app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});