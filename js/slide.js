$(function() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

  $(".mySwiper").hover(
    function() {
      swiper.autoplay.stop();
    }, 
    function() {
      // swiper 버전이 최신버전일시 start()가 작동 x
      // console.log(swiper.autoplay);
      // 콘솔을 찍어보니 start() 가 빠져있어서 데이터 전달이 안되는 것으로 생각
      // 최신버전 = 7.0.0
      // 현재사용하는버전 = 4.5.2
      swiper.autoplay.start();
    }
  );
})