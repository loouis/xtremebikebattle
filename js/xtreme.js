jQuery(document).ready(function(){

	$ = jQuery;


	//fullscreen header
	$(window).resize(function(){
		$('#hero').height($(window).height() -0);
		$('section#hero .wrapper').height($(window).height() -0);
	});
	$(window).trigger('resize');

	//Scroll to tickets section
	$('.buy-tickets').click(function(){
		$('html, body').animate({scrollTop: $('#buy-tickets').offset().top-0}, 'slow');
	});

	//Countdown
	$(function () {
		$('#countdown').countdown({until: new Date(2014, 8-1, 16, 15), format: 'dHM'});
	});


});