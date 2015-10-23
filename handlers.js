var util = require('./util');

module.exports = {
    index: function (req, reply) {
        var max = 2000;
        var width = req.params.width < max ? parseInt(req.params.width) : max;
        var height = req.params.height ?
            (req.params.height < max ? parseInt(req.params.height) : max) : width;

        util.convert({
            width: width,
            height: height
        }).then(function(img) {
            reply(img)
                .type('image/png')
                .header('Content-Length', img.length);
        }).catch(function(err) {
            reply(err);
        });
    }
};
