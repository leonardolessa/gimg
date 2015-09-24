var gm = require('gm');
var util = require('./util');

require('bufferjs');

module.exports = {
	index: function (req, reply) {
		var path = util.random(req.params.type);

		var streamImage = function(err, stdout, stderr) {
			var base = [];

			stdout.on('data', function(data) {
				base.push(data);
			});

			stdout.on('close', function() {
				var img = Buffer.concat(base);

				reply(img)
					.type('image/png')
					.header('Content-Length', img.length);
			});
		};
		
		gm(path)
			.resize(req.params.width, req.params.height, '^')
			.gravity('Center')
			.crop(req.params.width, req.params.height)
			.stream(streamImage);

	}
};