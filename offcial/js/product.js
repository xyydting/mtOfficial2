
$(function(){
	  var third_wrap = document.getElementById("third_wrap");
    var third_slide = document.getElementById("third_slide");
    var third_ul = third_slide.children[0];
    var third_lis = third_ul.children;
    var third_arrRight = document.getElementById("third_arrRight");
    var third_arrLeft = document.getElementById("third_arrLeft");
    var third_arrow = document.getElementById("third_arrow");
    var third_config = [//config 配置
        {
            width: 150,
            top: 110,
            left: 230,
            opacity: 0.6,
            zIndex: 2
        },//0
        {
            width: 200,
            top: 80,
            left: 75,
            opacity: 0.8,
            zIndex: 3
        },//1
        {
            width: 270,
            top: 50,
            left: 400,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 200,
            top: 80,
            left: 800,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            width: 150,
            top: 110,
            left: 680,
            opacity: 0.6,
            zIndex: 2
        }//4
    ];
    third_wrap.onmouseover = function () {
        third_animate(third_arrow, {"opacity": 1});
    }
    third_wrap.onmouseout = function () {
        third_animate(third_arrow, {"opacity": 0});
    }
    function third_assign() {
        for (var i = 0; i < third_lis.length; i++) {
            //让图片渐渐地到达指定位置
            third_animate(third_lis[i], third_config[i], function () {
                //执行回调函数的时候说明动画已经执行完了
                flag = true;//打开节流阀
                if (i == 0 || i == 4) {
                    lis[i].setAttribute('');
                }
            });
        }
    }
    third_assign();
    third_arrRight.onclick = function () {
        if (flag) {//点击按钮的时候对阀门的状态进行判断 如果是打开的就可以执行
            //flag = false;//关闭节流阀
            //点击右侧按钮 配置单 删除第一个元素 追加到结尾
            third_config.push(third_config.shift());//修改配置单
            third_assign();//根据修改完成的配置单对位置进行重新分配
        }
    }
    third_arrLeft.onclick = function () {
        if (flag) {
            //flag = false;
            //点击左侧按钮 配置单 删除最后一个 追加到开头
            third_config.unshift(third_config.pop());//修改配置单
            third_assign();//根据修改完成的配置单对位置进行重新分配
        }
    }
    var flag = true;
    function third_animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k == "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = (leader + step) / 100;
                } else if (k == "zIndex") {
                    obj.style[k] = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = leader + step + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15)
    }
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }

    $("#mobilenav").click(function(){
        $("#mobilenavUl").show();
    });

    $("#play_big").on("click",function(){
        window.location.href="./productjs.html";
    });
})
function showPic(link) {
    var img = document.getElementById("play_big");
    img.src = link.href;
    return false;
}