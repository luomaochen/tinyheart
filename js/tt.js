
var can1;
var can2;




can1 = document.getElementById("canvas1");
can2 = document.getElementById("canvas2");



var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


var isPhone = isMobile.any();
if (isPhone) {
    //如果是手机访问，将canvas大小设为网页可见的大小，乘以0.96是为了四边留些空隙
    canv1.width = parseInt(window.innerWidth * 0.96);
    canv1.height = parseInt(window.innerHeight * 0.96);
    canv2.width = parseInt(window.innerWidth * 0.96);
    canv2.height = parseInt(window.innerHeight * 0.96);
} else {
    canv1.width = 300;
    canv1.height = 500;
    canv2.width = 300;
    canv2.height = 500;
}


