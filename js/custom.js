"use strict";

/*$(window).on("load",function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?$("body").addClass("ios"):$("body").addClass("web");$("body").removeClass("loaded")});*/


document.addEventListener("DOMContentLoaded", function () {
	var body = document.body;
	body.classList.remove("loading");
});

// открыть/закрыть по клику
const btnOpenClose = document.querySelector('#button_open_close');
const buttonContent = document.querySelector('#button_content');
if (buttonContent && btnOpenClose) {
	btnOpenClose.addEventListener("click", btnClick);
	function btnClick() {
		if (buttonContent.classList.contains("content_visible")) {
			btnOpenClose.textContent = "Открыть блок";
		} else {
			btnOpenClose.textContent = "Скрыть блок";		
		};
		buttonContent.classList.toggle("content_visible");
	};
}
// открыть/закрыть по клику end

// аккордеон меню
const tochchaAccoMenuLink = document.querySelectorAll(".acco_list > li > a");
tochchaAccoMenuLink.forEach(function(itemMenu) {
	itemMenu.addEventListener("click", toggleMenuAcco);
});
function toggleMenuAcco() {
	const parentAccoMenu = this.closest('.acco_list > li');
	parentAccoMenu.classList.toggle('accomenu_visible');
	/* раскомментировать, если хотим, чтобы по клику на один закрывался другой */
	const parentMenuActive = this.closest('.accomenu_visible');
	document.querySelectorAll(".accomenu_visible").forEach(function(accomenu_selector){
		accomenu_selector.classList.remove("accomenu_visible");
	});
	if (parentMenuActive) {
		parentMenuActive.classList.toggle('accomenu_visible');
	}
}
const tochchaAccoMenuLinkNone = document.querySelectorAll(".acco_list > li > a[href^='#']");
tochchaAccoMenuLinkNone.forEach(function(itemMenuNolink) {
	itemMenuNolink.addEventListener("click", noLink);
});
function noLink(e) {
   e.preventDefault();
};
// аккордеон меню end

// аккордеон просто (спойлер)
const tochchaHeaders = document.querySelectorAll("[data-title-acco]");
tochchaHeaders.forEach(function(item) {
	item.addEventListener("click", toggleAcco);
});
function toggleAcco() {
	const parent = this.closest('.tochchaacco__item');
	if (parent) {
		parent.classList.toggle('acco_visible');
	}
	/* раскомментировать, если хотим, чтобы по клику на один закрывался другой */
	/* const parentActive = this.closest('.tochchaacco__item.acco_visible');
	document.querySelectorAll("[data-accocontent]").forEach(function(acco_selector){
		acco_selector.classList.remove("acco_visible");
	});
	if (parentActive) {
		parentActive.classList.toggle('acco_visible');
	} */
}
// аккордеон просто (спойлер) end

// табы
const tabsHeaders = document.querySelectorAll("[data-tab]");
tabsHeaders.forEach(tabsHandler);
function tabsHandler(item) {
	item.addEventListener("click", tabsClick);
}
function tabsClick() {
	const tabId = this.dataset.tab;
	let tabSet = this.closest('.tochchatabs');
	tabSet.querySelectorAll("[data-tab]").forEach(function (item_selector) {
		item_selector.classList.remove("active");
	});
	this.classList.add("active");

	tabSet.querySelectorAll("[data-tab-content]").forEach(function (item) {
		item.classList.remove("active");
	});
	document.getElementById(tabId).classList.toggle("active");
}
// табы end


// модальное окно
const uniOverlay = document.querySelector('.uni-overlay');
const modalButton = document.querySelectorAll("[data-modal-button]");
const closeButton = document.querySelectorAll("[data-modal-close]");

modalButton.forEach(modalHandler);
function modalHandler(item) {
	item.addEventListener("click", openModal);
};
function openModal() {
	document.getElementById(this.dataset.modalButton).classList.add("modal_box__active");
	uniOverlay.classList.add("is-active");
};

closeButton.forEach(function (item) {
	item.addEventListener("click", closeModal);
});
uniOverlay.addEventListener("click", closeModal);
function closeModal() {
	document.querySelectorAll(".modal_box").forEach(function (item) {
		item.classList.remove("modal_box__active");
	});
	uniOverlay.classList.remove("is-active");
};
// модальное окно end

$(".hamburger").click(function () {
	$(this).toggleClass('is-active');
	$('.mainnav, .uni-overlay').toggleClass('is-active');
});
$('.uni-overlay').click(function () {
	$(this).removeClass('is-active');
	$('.mainnav').removeClass('is-active');
});

// кастомный скроллбар описание: http://manos.malihu.gr/jquery-custom-content-scroller/
// кастомный скроллбар демо (theme): http://manos.malihu.gr/repository/custom-scrollbar/demo/examples/scrollbar_themes_demo.html
if ($('.scrollY').length) {
	$(".scrollY").mCustomScrollbar({
		axis: "y",
		theme: "dark-2",
		scrollbarPosition: "inside",
		scrollInertia: "400",
		documentTouchScroll: "false",
		advanced: {
			autoExpandHorizontalScroll: "true",
		}
	});
};
if ($('.scrollX').length) {
	$(".scrollX").mCustomScrollbar({
		axis: "x",
		theme: "dark-thick",
		scrollbarPosition: "inside",
		scrollInertia: "600",
		scrollButtons: { enable: true, scrollType: "stepless" }
	});
};

