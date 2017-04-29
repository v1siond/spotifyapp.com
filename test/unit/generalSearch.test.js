describe('movie app tests', function () {
  var $controller;
  var $httpBackend;
  var $scope;
	var el, $compile, simpleHtml;
	
  beforeEach(module('spotify'));
  beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_, $templateCache, _$compile_) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $templateCache.put('./views/search/search.html', [
      '<section class="searcher-container visiond-20" id="searcher">',
      '	<form class="visiond-18 visiond-lg-8">',
      '		<fieldset class="searcher-wrapper">',
      '			<input type="text" id="artist" value="lamb of god">',
      '			<button ng-click="startSearch($event)" type="submit" class="searcher-button visiond-13 visiond-lg-5" id="searchButton">search</button>',
      '		</fieldset>',
      '	</form>',
      '</section>'
    ].join(''));
    $compile = _$compile_;
  }));
  describe('General Search', function() {
    it('should look for artist or album', inject(function($http) {
      $controller('ctrlSearch', { $scope: $scope });
	    simpleHtml = '<div ng-search id="searcher-container"></div>';
	    el = $compile(angular.element(simpleHtml))($scope);
	    $scope.$digest();
      var input = el.find('#artist');
      $scope.$apply(function() {
        angular.element(input).val('lamb of god');
      });
      el.find('.searcher-button').click();
      //$scope.startSearch();
      //$httpBackend.flush();
      //expect($scope.movies).toEqual(testData.query.starwars);
    }));
  });
});