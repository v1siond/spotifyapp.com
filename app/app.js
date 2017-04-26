angular.module('spotify', [])
    .controller('ctrlSearch', function($scope, $http) {
      $scope.quantity = 1; //limit images and others array results
      $scope.defaultImage = 'assets/images/deafult-image.jpg'; //default image
      $scope.artistImage = 'assets/images/artist-icon.png'; //artist icon
      var audioObject = null;
      //search function
      $scope.startSearch = function() {
        //asign input value
        var query = $('#artist').val();
        var getArtist = function (query, type=['album', 'artist']) {
          var url = "https://api.spotify.com/v1/search?query=" + query + '&offset=0&limit=20&type='+ type;
          $http.get(url)
            .then(function(res) {
              $('#backgroundContainer').hide(); //hide the magnify icon
              $('.result-container').css('height', 'auto'); //adapts container height to match results
              $scope.artists = res.data.artists.items; //get artist if found
              $scope.albums = res.data.albums.items; //get album if found
              $scope.result = $scope.artists.concat($scope.albums); //concat artist and albums into one array
          }, function(error) {
            $('#backgroundContainer').show();
            alert('error');
          });
        }
        getArtist(query);
      }

      //Search artist albums
      $scope.artistAlbum = function(e) {
        //check the container class
        if ($(e.currentTarget).hasClass('artist')) {
          //if artist, then looks for albums
          var artistId = $(e.currentTarget).attr("data-id");

          var getAlbum = function (artist) {
            var urlt = "https://api.spotify.com/v1/artists/" + artistId;
            var url = "https://api.spotify.com/v1/artists/" + artistId + "/albums";
            $http.get(url)
              .then(function(res) {
                $scope.artistAlbums = res.data.items; //get album if found
            }, function(error) {
              alert('error');
            });
            $http.get(urlt)
              .then(function(res) {
                $scope.artistName = res.data.name; //get artist name
                $scope.artistBackground = res.data.images; //get tracks if found
            }, function(error) {
              alert('error');
            });
          }
          getAlbum(artistId);
          $('.fade-albums').css('display', 'flex');
        }
        if ($(e.currentTarget).hasClass('album')) {
          //if album, then look for tracks
          var albumId = $(e.currentTarget).attr("data-id");
          var getTracks = function (artist) {
            var urlt = "https://api.spotify.com/v1/albums/" + albumId;
            var url = "https://api.spotify.com/v1/albums/" + albumId + "/tracks";
            $http.get(url)
              .then(function(res) {
                $scope.albumTracks = res.data.items; //get tracks if found
            }, function(error) {
              alert('error');
            });
            $http.get(urlt)
              .then(function(res) {
                $scope.albumBackground = res.data.images; //get album art if found
            }, function(error) {
              alert('error');
            });

          }
          getTracks(albumId);
          $('.fade-tracks').css('display', 'flex');
        }
      }
      $scope.previewAudio = function(e) {
        var target = $(e.currentTarget);
        var playingCssClass = "playing";
        var fetchTracks = function (albumId, callback) {
            $.ajax({
                url: 'https://api.spotify.com/v1/albums/' + albumId,
                success: function (response) {
                    callback(response);
                }
            });
        }
        if (target !== null) {
          if (target.hasClass(playingCssClass)) {
            audioObject.pause();
          } else {
            if (audioObject) {
              audioObject.pause();
            }
            if (target.hasClass('album-details')) {
              fetchTracks(target.attr("data-id"), function (data) {
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.addClass(playingCssClass);
                audioObject.addEventListener('ended', function () {
                    target.removeClass(playingCssClass);
                });
                audioObject.addEventListener('pause', function () {
                  target.removeClass(playingCssClass);
                });
              });
            }
            if (target.hasClass('track-details')) {              
              audioObject = new Audio(target.attr("data-id"));
              audioObject.play();
              target.addClass(playingCssClass);
              audioObject.addEventListener('ended', function () {
                  target.removeClass(playingCssClass);
              });
              audioObject.pause
              audioObject.addEventListener('pause', function () {
                target.removeClass(playingCssClass);
              });
            }
          }
        }
      }
      $scope.closeModal = function(e) {
        $('.fade-albums').css('display', 'none');
        $('.fade-tracks').css('display', 'none');
      }
    })
    //filter for duration in minutes

    .filter('formatTime', function() {
      return function(milliseconds,withHour) {
        var seconds = parseInt((milliseconds/1000)%60);
        var minutes = parseInt((milliseconds/(1000*60))%60);
        var hours = parseInt((milliseconds/(1000*60*60))%24);
        var out = "";

        minutes = (parseInt(minutes) + (60 * parseInt(hours)));
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        out = minutes + ":" + seconds;

        if(withHour) {
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            out = hours + ":" + minutes + ":" + seconds;
        }else {
            minutes = minutes;
            seconds = seconds;

            out = minutes + ":" + seconds;
        }

        return out;
      }
    })
    //header partial
    .directive('ngHeader', function(){
      return{
        templateUrl: './components/header/header.html'
      }
    })
    //search partial
    .directive('ngSearch', function(){
      return{
        templateUrl: './components/search/search.html'
      }
    })
    //result partial
    .directive('ngResult', function(){
      return{
        templateUrl: './components/result/result.html'
      }
    })
    .directive('ngAlbums', function(){
      return{
        templateUrl: './components/result/modal.html'
      }
    })
    .directive('ngTracks', function(){
      return{
        templateUrl: './components/result/modal_tracks.html'
      }
    })