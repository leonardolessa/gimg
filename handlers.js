var util = require('./util');

require('bufferjs');

module.exports = {
	index: function (req, reply) {
		var path = util.random(req.params.type);

		util.convert({
			width: req.params.width,
			height: req.params.height,
			type: req.params.type
		}, function(img) {
			reply(img)
				.type('image/png')
				.header('Content-Length', img.length);
		});
	}
};