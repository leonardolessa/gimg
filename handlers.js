var util = require('./util');

module.exports = {
	index: function (req, reply) {
		var width = req.params.width < 2000 ? parseInt(req.params.width) : 2000;
		var height = req.params.height ? 
			(req.params.height < 2000 ? parseInt(req.params.height) : 2000) : width;

		util.convert({
			width: width,
			height: height
		}).then(function(img) {
			reply(img)
				.type('image/png')
				.header('Content-Length', img.length);
		}).catch(function(err) {
			console.log(err);
		});
	}
};