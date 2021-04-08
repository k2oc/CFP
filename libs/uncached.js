module.exports = function uncached(module) {
	delete require.cache[require.resolve(module)];
	return require(module);
};
