"use strict";

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (_this.btnToggleMenuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active");

					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},
	closeMenu: function closeMenu() {
		var _this = this;

		if (_this.menuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});

			_this.menuMobile.classList.remove("active");

			_this.body.classList.remove("fixed");
		}
	},
	// кастомный селлект
	select2: function select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this);
			th.find('.custom-select-js').select2({
				dropdownParent: th,
				tags: true,
				minimumResultsForSearch: -1,
				// width: 'auto',
				// width: th.find(".select2-results__options"),
				allowClear: false // dropdownAutoWidth: true

			});
		});
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		if (_this.menuMobileLink) {
			_this.toggleMenu(); // _this.menuMobileLink.forEach(function (element) {
			// 	element.addEventListener('click', function (e) {
			// 		console.log(element);
			// 		_this.closeMenu();
			// 	});
			// })


			document.addEventListener('mouseup', function (event) {
				var container = event.target.closest(".menu-mobile--js.active"); // (1)

				if (!container) {
					_this.closeMenu();
				}
			});
		}
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	// /inputMask
	customRange: function customRange() {
		$(".range-wrap").each(function () {
			var _this = $(this);

			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function onStart(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onChange: function onChange(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onFinish: function onFinish(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onUpdate: function onUpdate(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).on('change  input  cut  copy  paste', '.minus', function () {
				var th = $(this);
				var data = th.val();
				var min = +data; // th.val(data + ' т')

				$d3_instance.update({
					from: min
				});
			});
			$(this).on('change  input  cut  copy  paste', '.plus', function () {
				var th = $(this);
				var data = th.val();
				var max = +data; // th.val(data + ' т')

				$d3_instance.update({
					from: max
				});
			}); // $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute
			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });
		});
	}
};

function eventHandler() {
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.select2();
	JSCCommon.customRange(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/catalog.png);"></div>')
	// /добавляет подложку для pixel perfect
	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
	// /закрыть/открыть мобильное меню

	function heightses() {
		// скрывает моб меню
		var topH = document.querySelector('header').scrollHeight;
		var stickyElement = document.querySelector('.top-nav');

		window.onscroll = function () {
			if ($(window).scrollTop() > topH) {
				stickyElement.classList.add('fixed');
			} else {
				stickyElement.classList.remove('fixed');
			}
		}; // конец добавил


		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	window.addEventListener('resize', function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var partnersSlider = new Swiper('.brands-slider-js', {
		loop: true,
		spaceBetween: 20,
		//responsive
		breakpoints: {
			1245: {
				slidesPerView: 7
			},
			992: {
				slidesPerView: 6
			},
			768: {
				slidesPerView: 5
			},
			0: {
				slidesPerView: 3
			}
		},
		//lazy load
		lazy: {
			loadPrevNext: true
		},
		//autoplay
		autoplay: {
			delay: 6000
		}
	});
	$(".filterBtn-js").click(function () {
		$(this).toggleClass('active');
		$(".s-filter").slideToggle();
	});
	$(".search-js").click(function () {
		$(this).parent().toggleClass('active');
		$(".searchBlock--js").toggle();
	});
	$(".viber-link").each(function () {
		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			$(this).attr('href', $(this).data("desktop"));
		}
	}); // modal window
	// var gets = (function () {
	// 	var a = window.location.search;
	// 	var b = new Object();
	// 	var c;
	// 	a = a.substring(1).split("&");
	// 	for (var i = 0; i < a.length; i++) {
	// 		c = a[i].split("=");
	// 		b[c[0]] = c[1];
	// 	}
	// 	return b;
	// })();
	// // form
	// var gets = (function () {
	// 	var a = window.location.search;
	// 	var b = new Object();
	// 	var c;
	// 	a = a.substring(1).split("&");
	// 	for (var i = 0; i < a.length; i++) {
	// 		c = a[i].split("=");
	// 		b[c[0]] = c[1];
	// 	}
	// 	return b;
	// })();
	// // form
	// $("form").submit(function (e) {
	// 	e.preventDefault();
	// 	const th = $(this);
	// 	var data = th.serialize();
	// 	th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
	// 	th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
	// 	th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
	// 	th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
	// 	$.ajax({
	// 		url: 'action.php',
	// 		type: 'POST',
	// 		data: data,
	// 	}).done(function (data) {
	// 		$.fancybox.close();
	// 		$.fancybox.open({
	// 			src: '#modal-thanks',
	// 			type: 'inline'
	// 		});
	// 		// window.location.replace("/thanks.html");
	// 		setTimeout(function () {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 			// $.magnificPopup.close();
	// 			// ym(53383120, 'reachGoal', 'zakaz');
	// 			// yaCounter55828534.reachGoal('zakaz');
	// 		}, 4000);
	// 	}).fail(function () { });
	// });

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}