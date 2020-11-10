'use strict';

;
(function (win) {
    //手淘方案
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    //设备像素比
    var dpr = 0;
    //缩放大小
    var scale = 0;

    //判断页面是否存在 mate 标签
    var metaEl = doc.querySelector('meta[name="viewport"]');
    if (metaEl) {
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    }

    if (!dpr && !scale) {
        //判断当前是什么系统 安卓 || iOS
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        //getBoundingClientRect() 获取当前窗口的大小，返回一个对象
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        //动态改变根节点字体大小
        docEl.style.fontSize = rem + 'px';
    }

    //监听页面窗口大小的变化、当页面窗口大小改变后、触发动态改变根节点字体
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            //定义一个计时器 3 毫秒后触发
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();
})(window);