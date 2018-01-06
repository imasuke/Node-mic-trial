# Node microphone trial
This is a trial for using the microphone in Node.js. It basically depends on the Node module [mic](https://github.com/ashishbajaj99/mic).

Installation
============
This source depends on your machine having an installation of sox (Mac/Windows Users) OR ALSA tools for Linux.
Before trying this source, you need to check whether you can chapture the microphone audio on command line.

```
$ arecord temp.wav
```
OR
```
$ rec temp.wav
```
To get ALSA tools on Raspberry Pi running raspbian, try the following:
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install alsa-base alsa-utils
```
If you use sox on Windows, you can confirm by following command:
```
sox -t waveaudio default temp.wav
```
After the above is tested and validated, you can install dependent modules by following:

```
$ npm install
```

Run
============
You can run the app by following:
```
$ node main.js
```
