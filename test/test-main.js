var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

// karma cannot handle a config file with 'var require'
requirejs.config(require || {});

requirejs.config({
	baseUrl: "/base/src",
	deps: tests,
	callback: window.__karma__.start
});
