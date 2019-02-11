const path = require('path')
const http = require('http')
const express = require('express')
const vhost = require('vhost')
const serverReady = require('server-ready')
const conf = require('../conf')


var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello World!');
});

//try{
//    console.log("Try no catch")
//}

//declare unused variable with no semicolon
b = "hello"

a = 7

if(a=1){
    console.log("Intended bug to test if deepcode detect this")
}

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});