$(window).on('load', function() {
	topMargin();
});

$(window).resize(function() {
	topMargin();
});

var topMargin = function() {  
  setTimeout(
    function() {
			var head_height = $('.banner-header').height();
			console.log(head_height);
			$('.banner-image').css('margin-top', head_height/1.25 + 'px');
    }, 100);

};