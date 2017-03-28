$(function(){
	 $(".tab-item").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".main:eq(" + index + ")").addClass("selected").siblings().removeClass("selected");
    });
    $(".tab-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".main:eq(" + index + ")").addClass("selected").siblings().removeClass("selected");
    });

    $("#mobilenav").click(function(){
        $("#mobilenavUl").show();
    });
    window.onresize = function () {
        location.reload();
    }
})
