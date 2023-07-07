var header = document.querySelector("header");

fetch("header/header.html")
  .then((response) => {
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

const mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  effect: "slide",
  slidesPerView: 1,
  loop: true,
  slidesPerColumnFill: "column",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
const mySwiper2 = new Swiper(".swiper-container2", {
  direction: "vertical",
  effect: "slide",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const mySwiper3 = new Swiper(".swiper-container3", {
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

const swiper_wrapper1 = document.querySelector(
  ".swiper-container > .swiper-wrapper"
);
const swiper_wrapper2 = document.querySelector(
  ".swiper-container2 > .swiper-wrapper"
);

fetch("../news.json")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < 10; i++) {
      var slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      var inner = document.createElement("a");
      inner.href = data[i].link;
      inner.innerHTML = data[i].title;
      slide.appendChild(inner);

      if (i < 5) {
        swiper_wrapper1.appendChild(slide);
      } else {
        swiper_wrapper2.appendChild(slide);
      }
    }
  });
