"use strict";

//var mic = require('mic');
const mic = require('./mic/lib/mic.js');
var fs = require('fs');
var FileWriter = require('wav').FileWriter;
 
var micInstance = mic({
    rate: 16000,
    channels: 1,
    //debug: true,
    exitOnSilence: 1,
});
var micInputStream = micInstance.getAudioStream();
 
var outputFileStream = new FileWriter('./output.wav',{
	sampleRate: 16000,
	channels: 1,
	bitDepth: 16
})
 
micInputStream.pipe(outputFileStream);
 
micInputStream.on('data', function(data) {
    console.log("Recieved Input Stream: " + data.length);
});
 
micInputStream.on('error', function(err) {
    cosole.log("Error in Input Stream: " + err);
});
 
micInputStream.on('startComplete', function() {
    console.log("Got SIGNAL startComplete");
});
    
micInputStream.on('stopComplete', function() {
    console.log("Got SIGNAL stopComplete");
});
    
micInputStream.on('pauseComplete', function() {
    console.log("Got SIGNAL pauseComplete");
});
 
micInputStream.on('resumeComplete', function() {
    console.log("Got SIGNAL resumeComplete");
});
 
micInputStream.on('silence', function() {
    console.log("Got SIGNAL silence");
    //micInstance.stop();
});
 
micInputStream.on('processExitComplete', function() {
    console.log("Got SIGNAL processExitComplete");
});
 
micInstance.start();