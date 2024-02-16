let marqueeSliderView ;
function marqueeSlider (){
    
    if(window.innerWidth <= 500){
     marqueeSliderView = 2.7;
    }

    else if(window.innerWidth <= 769){
        marqueeSliderView = 3
          }
    else if(window.innerWidth <= 1600){
     marqueeSliderView = 4;
    }


    else{
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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




