$(function () {
    // 참조자 찾기
    var $gnb = $(".gnb > ul");

    // .gnb 영역에 이벤스 발생
    $gnb.hover(
        // 마우스가 들어가면 .gnb 영역에 down 클래스부여
        function () { $gnb.addClass("down").parents(".gnb").next().addClass("down"); },
        // 마우스가 들어가면 .gnb 영역에 down 클래스해제
        function () { $gnb.removeClass("down").parents(".gnb").next().removeClass("down"); }
    );

    // 해당 영역에 hover
    $gnb.children("li").hover(
        // 마우스가 들어가면 그 li의 a 요소에 on 클래스부여
        function () { $(this).children("a").addClass("on"); },
        // 마우스가 나오면 그 li의 a 요소에 on 클래스해제
        function () { $(this).children("a").removeClass("on"); }
    );

    // footer 후손요소 h2에 클릭 이벤트
    $(".footer").find("h2").on("click", function () {
        // 후손요소 h3의 다음에나오는 형제요소에 slideToggle 적용
        $(".footer").find("h2").next().slideToggle(300);
    });
});
