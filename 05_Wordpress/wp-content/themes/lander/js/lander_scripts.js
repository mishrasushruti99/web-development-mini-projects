jQuery(document).ready(function($) {

	/* Stick navigation to the top of the page */
	var stickyNavTop = $('.main-navigation').offset().top;

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('.main-navigation').addClass('sticky-header');
			$('.site-header').addClass('shifted');
		} else {
			$('.main-navigation').removeClass('sticky-header');
			$('.site-header').removeClass('shifted');
		}

	});

  /* Scroll to specific section on front page */
  $(function() {
  	$('a[href*=#]:not([href=#])').click(function() {
  		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  			var target = $(this.hash);
  			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  			if (target.length) {
  				$('html,body').animate({
  					scrollTop: (target.offset().top - 80)
  				}, 1000);
  				return false;
  			}
  		}
  	});
  });
});
