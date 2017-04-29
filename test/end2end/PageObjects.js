var webdriver = require('selenium-webdriver');
var homepage = {
	pageBody: element(webdriver.By.id('main-container')),
	pageHeading: element(webdriver.By.id('banner-container')),
	pageSearch: element(webdriver.By.id('searcher-container')),
	pageresult: element(webdriver.By.id('result-container')),
	pageFooter: element(webdriver.By.id('footer-container')),
	get: function() {
		browser.get('index.html');
	}
};