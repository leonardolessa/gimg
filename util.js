var fs = require('fs');
var gm = require('gm');

module.exports = {
	random: function(type) {
		var imagesPath = './images/' + type;
		var fileList = fs.readdirSync(imagesPath);
		var randomNumber = Math.floor(Math.random() * (fileList.length - 1 + 1)) + 0;

		return imagesPath + '/' + fileList[randomNumber];	
	},

	convert: function(data, cb) {
		var path = this.random(data.type);

		var streamImage = function(err, stdout, stderr) {
			var base = [];

			stdout.on('data', function(data) {
				base.push(data);
			});

			stdout.on('close', function() {
				cb(Buffer.concat(base));
			});
		};
		
		gm(path)
			.resize(data.width, data.height, '^')
			.gravity('Center')
			.crop(data.width, data.height)
			.stream(streamImage);
	}
};