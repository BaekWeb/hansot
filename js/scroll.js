$(function () {
    // 스크롤이벤트 발생
    $(window).on("scroll", function () {
        // 스크롤된 높이
        var window_scrollTop = $(window).scrollTop();
        // 요소의 높이
        var head_main_height = $(".main").height();

        // 만약 스크롤된높이가 .main요소의 높이보다 클경우
        if (head_main_height < window_scrollTop) {
            $(".main").addClass("fixed").children(".gnb").addClass("fixed")
                .find(".title").css("line-height", "60px");

            // fixe 된 상태라면 로고의 이미지가 바뀐다.
            $(".gnb").children("h1").addClass("logo");
            $(".gnb").children(".menu_icon").addClass("on");
        } else {
            // 그렇지않을경우 클래스와 스타일속성을 제거한다.
            $(".main").removeClass("fixed").children(".gnb").removeClass("fixed")
            .find(".title").removeAttr("style");

            $(".gnb").children("h1").removeClass("logo");
            $(".gnb").children(".menu_icon").removeClass("on");
        }
    });
});
