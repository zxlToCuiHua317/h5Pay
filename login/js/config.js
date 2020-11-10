"use strict";

var fbLoginData = [];
var ptLoginData = [];
var tryLoginData = [];
var ptData = {};
var fbdata = {};
var trydata = {};
var sessionID;
var isFirstLogin = 0;
var isFbLogin = 0;
var isClick = true;
var ch;
var sendData;
var str;

var getfbLoginData_c = "fbLoginData";
var getptLoginData_c = "ptLoginData";
var gettryLoginData_c = "tryLoginData";

var appid = "1420741581466854";
var redirect_url = 'https://awscdnnrxwsone.95vy.com/gc_file/LKWEB/index.html';

//生成uuid
function generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
}

//五秒后才能再次点击
function afterClick() {
    setTimeout(function () {
        isClick = true;
    }, 5000);
}

//sort

function compare(arr) {
    return function (m, n) {
        var a = m[arr];
        var b = n[arr];
        return a - b;
    };
}

function uncompare(arr) {
    return function (m, n) {
        var a = m[arr];
        var b = n[arr];
        return b - a;
    };
}

//获取URL参数
function GetQueryString(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\&$');
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}