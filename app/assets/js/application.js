$(document).ready(function(){
    topMargin();
});

$(window).resize(function() {
  topMargin();
});

var topMargin = function() {  
	var head_height = $('.banner-header').height();
	$('.banner-image').css('margin-top', head_height/1.25 + 'px');	
};