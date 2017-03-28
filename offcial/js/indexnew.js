//var _LoadingHtml = document.getElementById('box');
//document.write(_LoadingHtml);
//document.onreadystatechange = completeLoading;
//function completeLoading() {
//    if (document.readyState == "complete") {
//        var loadingMask = document.getElementById('box');
//        loadingMask.parentNode.removeChild(loadingMask);
//    }
//};
window.onload = function(){
	$(".share a").mouseenter(function () {
        $(this)
            .css("opacity", 1)
            .siblings()
            .css("opacity", 0.3);
    });
    $(".share").mouseleave(function () {
        $(this).find("a").css("opacity", 1);
    });
    var box = document.getElementById("lb-box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var ulLis = ul.children;
    var arr = document.getElementById("arr");
    var arrRight = document.getElementById("right");
    var arrLeft = document.getElementById("left");
    var imgwWidth = document.body.clientWidth;
    var timer = null;
    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
//      li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
    var fiestImg = ulLis[0].cloneNode(true);
    ul.appendChild(fiestImg);
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            this.className = "current";

            var target = -this.index * imgwWidth;
            animate(ul, target);

            pic = square = this.index;
        }
    }
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    }
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(playNext, 5000);
    }
    var pic = 0;
    var square = 0;
    arrRight.onclick = function () {
        playNext();
    }
    arrLeft.onclick = function () {
        playPrve();
    }
    timer = setInterval(playNext, 5000);
    function playNext() {
        if (pic == ulLis.length - 1) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        var target = -pic * imgwWidth;
        animate(ul, target);
        //按钮跟着走
        //square表示当前应该亮起的按钮
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "current";
    }
    function playPrve() {
        if (pic == 0) {
            ul.style.left = -(ulLis.length - 1) * imgwWidth + "px";
            pic = ulLis.length - 1;
        }
        pic--;
        var target = -pic * imgwWidth;
        animate(ul, target);
        if (square > 0) {
            square--;
        } else {
            square = ol.length - 1;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square] = "current";
    }
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 35;
            step = leader < target ? step : -step;
            if (Math.abs(target - leader) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
            }
        }, 15);
    }
    banner();
    function banner() {
        var render = function () {
            var width = $(window).width();
            var isMobile = false;
            if (width < 768) {
                isMobile = true;
            }
        };
        $(window).on('resize', function () {
            render();
        }).trigger('resize');
        var startX = 0;
        var moveX = 0;
        var distanceX = 0;
        var isMove = false;
        $('.screen').on('touchstart', function (e) {
            startX = e.originalEvent.touches[0].clientX;
        });
        $('.screen').on('touchmove', function (e) {
            moveX = e.originalEvent.touches[0].clientX;
            distanceX = moveX - startX;
            isMove = true;
        });
        $('.screen').on('touchend', function (e) {
            if (Math.abs(distanceX) > 50 && isMove) {
                if (distanceX > 0) {
                    playPrve();
                } else {
                    playNext();
                }
            }
            startX = 0;
            moveX = 0;
            distanceX = 0;
            isMove = false;
        });
        $(window).on('resize', function () {
            render();
        }).trigger('resize');
        var render = function () {
            var width = $(window).width();
            var isMobile = false;
            if (width < 768) {
                isMobile = true;
            }
        };
    }
}
