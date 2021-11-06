(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		// headerHeightFixer();
    });

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').outerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
		stickyHeader()
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

    /*  Banner slider */
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
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			arrows: false,
		// 			dots: true
		// 		}
		// 	},
		// ]
    });

	let stickyNavbar = document.querySelector(".header--sticky");
	let sticky = stickyNavbar.offsetTop;

	function stickyHeader() {
		if (window.pageYOffset >= sticky) {
			stickyNavbar.classList.add("sticky")
		} else {
			stickyNavbar.classList.remove("sticky");
		}
	}

})(jQuery);