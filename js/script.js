$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 10) {
			$('.top-nav').css({
				backgroundColor: '#ffffff',
				transition: '.3s ease-out'				
			});
			$('.top-nav a').css({
				color: '#333'
			});
		}
		else {
			$('.top-nav').css({
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				transition: '.3s ease-out'			
			});
			$('.top-nav a').css({
				color: '#ffffff'
			});
		}
	});

//plynulé scrolování na sekce stránky

	$('.main-menu a').on('click', function() {
		if(this.hash != '') {
			var hash = this.hash;
			$('html, body').stop().animate ({
				scrollTop: $(hash).offset().top
					}, 600);
		}
	});

	//plovoucí šipka - plynulé scrollování na začátek stránky
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 50) {
			$('.scroll-top').fadeIn(400);
		}
		else {
			$('.scroll-top').fadeOut(400);
			}
		$('.scroll-top').click(function() {
			$('html, body').stop().animate({
				scrollTop: 0
			}, 600);
		});
	});
});

