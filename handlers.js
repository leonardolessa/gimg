var util = require('./util');

module.exports = {
	index: function (req, reply) {
		util.convert({
			width: req.params.width,
			height: req.params.height || req.params.width
		}).then(function(img) {
			reply(img)
				.type('image/png')
				.header('Content-Length', img.length);
		}).catch(function(err) {
			console.log(err);
		});
	}
};