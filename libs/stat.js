const fs = require("fs");
module.exports = function stat(file) {
	try {
		return fs.statSync(file);
	} catch (error) {
		return undefined;
	}
};
