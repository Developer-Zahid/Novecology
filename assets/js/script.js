(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		// headerHeightFixer();
    });

	/* Fixed Header on Scroll function */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').outerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* Sticky Header on Scroll function */
	let headerElementOffsetTop = parseInt($('.header--sticky').offset().top) ;

	$(window).on("scroll", function () {
		let scrolling = $(this).scrollTop();
		let distanceBetweenWindowsTop = headerElementOffsetTop - scrolling;

		if (scrolling > distanceBetweenWindowsTop) {
			$(".header--sticky").addClass("sticky");
		} else {
			$(".header--sticky").removeClass("sticky");
		}
	});

	/* scroll top button function */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		let scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Open & Close responsive menu  functions*/
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
    });
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
		}
	});

    /* Banner slider init */
	(function(){
		$(".banner__slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 500,
			arrows: true,
			prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><span class="novecology-icon-chevron-left"></span></button>',
			nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><span class="novecology-icon-chevron-right"></span></button>',
			dots: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			infinite: true,
		})
	})();

	/* Blogs slider init */
	(function(){
		$(".blogs__slider").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 500,
			arrows: true,
			prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><span class="novecology-icon-chevron-left"></span></button>',
			nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><span class="novecology-icon-chevron-right"></span></button>',
			dots: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			infinite: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		})
	})();

	/* Testimonial slider init */
	(function(){
		$(".testimonial__slider").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 500,
			arrows: true,
			prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><span class="novecology-icon-chevron-left"></span></button>',
			nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><span class="novecology-icon-chevron-right"></span></button>',
			dots: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			infinite: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		})
	})();
	
	
})(jQuery);