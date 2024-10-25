/* banner slide */

var swiper1 = new Swiper(".banner_slide", {
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span> <div class="fraction_line"></div> <span class="${totalClass}"></span>`;
  }},
autoplay:{
  delay: 3500,
  disableOnInteraction: false,
},
});

let playBtn1 = document.querySelector('.banner_slide .swiper-button-play');
let pauseBtn1 = document.querySelector('.banner_slide .swiper-button-pause');

// 재생 버튼
playBtn1.addEventListener('click', function() {
  swiper1.autoplay.start();
  this.style.display = 'none';
  pauseBtn1.style.display = 'block';
});

// 정지 버튼
pauseBtn1.addEventListener('click', function() {
  swiper1.autoplay.stop();
  this.style.display = 'none';
  playBtn1.style.display = 'block';
});

/* 뉴스 슬라이드 */

var swiper2 = new Swiper(".news_slide", {
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span> <div class="fraction_line"></div> <span class="${totalClass}"></span>`;
  }},
autoplay:{
  delay: 3500,
  disableOnInteraction: false,
},
});

/* news slide */

let playBtn2 = document.querySelector('.news_container .swiper-button-play');
let pauseBtn2 = document.querySelector('.news_container .swiper-button-pause');

// 재생 버튼
playBtn2.addEventListener('click', function() {
  swiper2.autoplay.start();
  this.style.display = 'none';
  pauseBtn2.style.display = 'block';
});

// 정지 버튼
pauseBtn2.addEventListener('click', function() {
  swiper2.autoplay.stop();
  this.style.display = 'none';
  playBtn2.style.display = 'block';
});

/* footer slide */

var swiper3 = new Swiper(".site_slide", {
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
autoplay:{
  delay: 3500,
  disableOnInteraction: false,
  },
breakpoints: {
  769: {
    slidesPerView: 5,
  },
  430: {
    slidesPerView: 2,
  },
  }
});


let playBtn3 = document.querySelector('.site_wrap .swiper-button-play');
let pauseBtn3 = document.querySelector('.site_wrap .swiper-button-pause');

// 재생 버튼
playBtn3.addEventListener('click', function() {
  swiper3.autoplay.start();
  this.style.display = 'none';
  pauseBtn3.style.display = 'block';
});

// 정지 버튼
pauseBtn3.addEventListener('click', function() {
  swiper3.autoplay.stop();
  this.style.display = 'none';
  playBtn3.style.display = 'block';
});
