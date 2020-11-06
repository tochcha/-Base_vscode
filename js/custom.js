"use strict";

/*$(window).on("load",function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?$("body").addClass("ios"):$("body").addClass("web");$("body").removeClass("loaded")});*/


document.addEventListener("DOMContentLoaded", function () {
	var body = document.body;
	body.classList.remove("loading");
});

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

// кастомный скролл
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
