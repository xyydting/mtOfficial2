$(function(){
    $("#mobilenav").click(function(){
        $("#mobilenavUl").show();
    });
    window.onresize = function () {
        location.reload();
    }
})
