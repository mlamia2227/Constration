const navShow = () => {
	const navBar = document.querySelector('.nav-bar');
	const menuList = document.querySelector('.menu-list');

	navBar.addEventListener('click', () => {
		menuList.classList.toggle('nav-active');

		navBar.classList.toggle('close')
	});
}
navShow();

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	thumbs: {
		swiper: swiper,
	},
});

var swiper = new Swiper(".card_slider", {
	slidesPerView: 2,
	loop: true,
	freeMode: true,
	autoplay: {
		delay: 2000,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
	},
});

var swiper = new Swiper(".image_slider", {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 30,
	freeMode: true,
	autoplay: {
		delay: 2000,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		991: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},
});

var swiper = new Swiper(".our-team-slider", {
	slidesPerView: 3,
	loop: true,
	freeMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('#topbtn').fadeIn();
		} else {
			$('#topbtn').fadeOut();
		}
	})
	$('#topbtn').click(function () {
		$('html,body').animate({ scrollTop: 0 }, 800)
	})
})


$(function () {
	$('.icon-search').click(function () {
		$('.search-popup').addClass('active');

	});

	$('.icon-search').click(function () {
		$('.form-content').addClass('active');
	});


	$('.popup-close').click(function () {
		$('.search-popup').removeClass('active')
	});
});









