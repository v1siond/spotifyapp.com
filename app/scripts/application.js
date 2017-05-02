$(window).on('load', function() {
	topMargin();
});

$(window).resize(function() {
	topMargin();
});

//asign margintop based on header height -> this is to maintain the position of elements according to design
var topMargin = function() {  
  setTimeout(
    function() {
			var head_height = $('.banner-header').height(); //gets logo height
			$('.banner-image').css('margin-top', head_height/1.25 + 'px'); //apply margin
    }, 1000);
};

var animateSection = function() {
  var y = $('.arrow-down').offset().top; // grabs the #id element offset location
  $('html,body').animate({scrollTop: y}, 1000); // animate the scroll	
}