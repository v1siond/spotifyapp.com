describe('filter', function() {
  beforeEach(module('spotify'));
  describe('formatTime', function() {   
    it('Should see time in correct format', inject(function(formatTimeFilter) {
      expect(formatTimeFilter('180000')).toEqual('03:00');
    }));
  });
});