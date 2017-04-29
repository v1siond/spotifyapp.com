angular
    .module('spotify', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/asdasd/index.html',
          controller: 'ctrlSearch'
        })
        .otherwise( {
          redirectTo: '/'
        });
    })
    //header partial
    .directive('ngHeader', function(){
      return{
        templateUrl: './views/header/header.html'
      }
    })
    //search partial
    .directive('ngSearch', function(){
      return{
        templateUrl: './views/search/search.html'
      }
    })
    //result partial
    .directive('ngResult', function(){
      return{
        templateUrl: './views/result/result.html'
      }
    })
    .directive('ngAlbums', function(){
      return{
        templateUrl: './views/result/modal.html'
      }
    })
    .directive('ngTracks', function(){
      return{
        templateUrl: './views/result/modal_tracks.html'
      }
    })