const uncached = require("./uncached");
const path = require("path");
const _ = require("lodash");

const pathConvert = (file) => {
	return !path.isAbsolute(file) ? path.resolve(process.cwd(), file) : file;
};

function read(file, ...args) {
	let result = {};
	try {
		result = uncached(pathConvert(file));
		if (_.isFunction(result)) {
			result = result(...args);
		}
	} catch (error) {
		throw error;
	}
	return result;
}

module.exports = read;
