module.exports = {
	options: {
		configFile: "karma.conf.js",
		browsers: ["PhantomJS"],
		captureTimeout: 10000
	},
	dev: {
		autoWatch: true,
		reporters: "dots"
	},
	test: {
		singleRun: true,
		reporters: "junit"
	}
};
