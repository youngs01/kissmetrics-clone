let marqueeSliderView;
function marqueeSlider() {

  if (window.innerWidth <= 500) {
    marqueeSliderView = 2.7;
  }

  else if (window.innerWidth <= 769) {
    marqueeSliderView = 3
  }
  else if (window.innerWidth <= 1600) {
    marqueeSliderView = 4;
  }


  else {
    marqueeSliderView = 5;
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: marqueeSliderView,
    loop: true,
    speed: 5000,
    effect: "slide",
    grabCursor: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}

marqueeSlider();

window.addEventListener("resize", function () {
  marqueeSlider();
})


var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 2,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



document.addEventListener('DOMContentLoaded', function () {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#fadeSignContainer'
  })
    .setClassToggle('#fadeSignContainer', 'fade-in')
    .addTo(controller);


});


const range = document.getElementById('myRange');
const eventsOutput = document.getElementById('rangeNumber');

if (range.value == 100) {
  eventsOutput.innerHTML = "100M";
} else {
  eventsOutput.innerHTML = range.value + "K";
}
range.addEventListener('input', function () {
  if (this.value == 100) {
    eventsOutput.innerHTML = "100M";
  } else {
    eventsOutput.innerHTML = this.value + "K";
  }
});
