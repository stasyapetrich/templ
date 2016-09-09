$(document).ready(function() {
	$( ".menu-mob" ).click(function() {
  		$( ".menu" ).slideToggle( "slow", function() {
  		});
	});
	$(window).resize(function() {
		if ($(window).width()>767) {
			$( ".menu" ).css('display', '')
		}
	});
});