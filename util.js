var Q = require('q');
var fs = require('fs');
var gm = require('gm');
var readdir = Q.denodeify(fs.readdir);
require('bufferjs');

module.exports = {
	random: function() {
		var imagesPath = './images/';

		return readdir(imagesPath).then(function (files) {
			return imagesPath + files[Math.floor(Math.random() * files.length)];
		});	
	},

	convert: function(data, cb) {
		var streamImage = function(err, stdout, stderr) {
			var base = [];

			stdout.on('data', function(data) {
				base.push(data);
			});

			stdout.on('close', function() {
				cb(Buffer.concat(base));
			});
		};
		
		this.random().then(function (path) {
			gm(path)
				.resize(data.width, data.height, '^')
				.gravity('Center')
				.crop(data.width, data.height)
				.stream(streamImage);
		});	
	}
};