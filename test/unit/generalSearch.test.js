angular.module('spotify', [])
  .controller('ctrlSearch', function($scope, $http) {
    $scope.startSearch = function(e) {
      $scope.currentTarget = e.currentTarget;
      var query ='lamb of god';
      var offset = 0;
      var type=['album', 'artist'];
      var url = "https://api.spotify.com/v1/search?query=" + query + '&offset='+ offset +'&limit=20&type='+ type;
      $http.get(url)
        .then(function(res) {
          $scope.result = res.data;
      }, function(error) {
      });
    }
  });

describe('Search Controller', function() {

  var $scope, $compile;
  var response = [
    {artist: 'lamb of God', id: "asdjaksd89123khasd"},
    {album: [ {name: "Ashes of the Wake"}, {name: "Sacrament"}]}
  ];
  beforeEach(module('spotify'));

  beforeEach(inject(function($rootScope, _$compile_, _$controller_, _$httpBackend_) {
    $compile = _$compile_;
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET("https://api.spotify.com/v1/search?query=lamb of god&offset=0&limit=20&type=album,artist").respond(200, response);
  }));

  it('should start search', inject(function() {   
    var html = [
      '<div ng-controller="ctrlSearch">',
      ' <button ng-click="startSearch($event)" type="submit" class="searcher-button">search</button>',
      '</div>'].join('');
    var elm = $compile(angular.element(html))($scope);
    var button = elm.find(".searcher-button").click();
    $httpBackend.flush();
    var result = elm.scope().result;
    expect(elm.scope().currentTarget).toBeDefined();
    expect(elm.scope().currentTarget.className).toBe('searcher-button');
    expect(result).toEqual(response);
  }));
});