$(function () {

  // 메뉴 아이콘을 클릭하면 이벤트 발생
  $(".menu_icon").on("click", function () {
      // 메뉴아이콘의 조상요소중 클래스 .head 요소의 다음형제요소인 .sidebar에 display를 block으로 변경
      $(".menu_icon").parents(".head").next(".sidebar").fadeIn(400);
  });

  // 클릭시 fixed 됬던 사이드바 화면이 display none으로 변경
  $(".close").on("click", function () {
      $(".close").parents(".sidebar").fadeOut(400);
  });

  // 참조자
  var $sidebar = $('.sidebar');

  $sidebar.find('.gnb .items').children('h2').on('click', function(e) {
    // 기본 이벤트 제거
    e.preventDefault();


    var $dropdown = $(this).next(".dropdown");

    if ($dropdown.is(":hidden")) {
      // 모든 item의 h2 요소중 active 클래스 상태인 요소를 클래스 제거 하고
      // 다음 요소인 dropdown요소가 보이는상태이면 slideUp
      $(this).parent().siblings().children('h2.active').removeClass('active').
      next(".dropdown:visible").slideUp();

      // 클릭한 h2에 active 클래스 추가하고 다음요소인 dropdown 요소 slideDown
      $(this).addClass('active').next('.dropdown').slideDown();
    } else {
      // 클릭한 요소의 클래스를 제거
      $(this).removeClass("active");
      // dropdown 요소 toggle
      $dropdown.slideToggle();  
    }
  })
});