module.exports = {
	options: {
		globals: {},
		esprimaOptions: {},
		verbose: false
	},
	gruntfiles: {
		files: {
			src: ["<%=jshint.gruntfiles.src%>"]
		}
	},
	sourcefiles: {
		files: {
			src: ["<%=jshint.sourcefiles.src%>"]
		}
	},
	testfiles: {
		files: {
			src: ["<%=jshint.testfiles.src%>"]
		}
	}
};
