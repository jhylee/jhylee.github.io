
$(document).ready(function() {

	/***************** Service Worker ******************/
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('../sw.js').then(function (registration){
			console.log("service worker registration successful:" , registration.scope);
		}).catch(function(err){
			console.log("registration failed:" , err);
		});
	}

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 40) {
				$('section.navigation').addClass('fixed');
				// $('header').css({
				// 	"border-bottom": "none",
				// 	"padding": "40px 0"
				// });
				// $('header .member-actions').css({
				// 	"top": "30px",
				// });
				// $('header .navicon').css({
				// 	"top": "36px",
				// });
			} else {
				$('section.navigation').removeClass('fixed');
				// $('header').css({
				// 	"padding": "40px 0"
				// });
				// $('header .member-actions').css({
				// 	"top": "30px",
				// });
				// $('header .navicon').css({
				// 	"top": "36px",
				// });
			}
		});
	});

	/***************** Video AutoStop on ModalClose Function ******************/
	$(function() {
		$('#videoModal').on('hidden.bs.modal', function(e) {
			$('#videoModal iframe').attr("src", $("#videoModal iframe").attr("src"));
		});
	});

	$(function() {
		$('#inventoryModal').on('hidden.bs.modal', function(e) {
			$('#inventoryModal iframe').attr("src", $("#inventoryModal iframe").attr("src"));
		});
	});

	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});
