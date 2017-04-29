describe('ctrlSearch', function() {
	it('should display all sections of the app', function() {
		homepage.get();
		expect(homepage.pageHeading.is(':empty')).toBe(false);
	});
});