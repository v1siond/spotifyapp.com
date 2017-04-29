exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['test/end2end/*'],
	capabilities: {
		browserName: 'firefox'
	},
	baseUrl: "http://localhost:8888/"
};