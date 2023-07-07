var header = document.querySelector("header");

fetch("header/header.html")
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => {
    header.innerHTML = data;
  });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // 자동 재생
  autoplay: {
    delay: 2500,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // And if we need scrollbar
});

var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  effect: "slide",
  slidesPerView: 1,
  loop: true,
  slidesPerColumnFill: "column",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
var mySwiper2 = new Swiper(".swiper-container2", {
  direction: "vertical",
  effect: "slide",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var mySwiper3 = new Swiper(".swiper-container3", {
  effect: "slide",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
