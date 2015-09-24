var fs = require('fs');

module.exports = {
	random: function(type) {
		var imagesPath = './images/' + type;
		var fileList = fs.readdirSync(imagesPath);
		var randomNumber = Math.floor(Math.random() * (fileList.length - 1 + 1)) + 0;

		return imagesPath + '/' + fileList[randomNumber];	
	}
};