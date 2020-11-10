"use strict";
var language = JSON.parse(localStorage.getItem("config")).language
console.log(language)
var Check = {
    check_login_username: function check_login_username() {
        var getLanguage = language
        switch (getLanguage) {
            case "TW":
                alert(language.TW.lp_account_empty);
                break;
            case "KR":
                alert(language.KR.lp_account_empty);
                break;
            case "English":
                alert(language.English.lp_account_empty);
                break;
            default:
                alert(language.English.lp_account_empty);
                break;
        }
    },
    check_login_password: function check_login_password() {
        var getLanguage = language
        switch (getLanguage) {
            case "TW":
                alert(language.TW.lp_password_empty);
                break;
            case "KR":
                alert(language.KR.lp_password_empty);
                break;
            case "English":
                alert(language.English.lp_account_empty);
                break;
            default:
                alert(language.English.lp_password_empty);
                break;
        }
    },
    check_login_checkaccount: function check_login_checkaccount() {
        var getLanguage = language
        switch (getLanguage) {
            case "TW":
                alert(language.TW.lp_check_account);
                break;
            case "KR":
                alert(language.KR.lp_check_account);
                break;
            case "English":
                alert(language.English.lp_account_empty);
                break;
            default:
                alert(language.English.lp_check_account);
                break;
        }
    },
    check_login_checkapassword: function check_login_checkapassword() {
        var getLanguage = language
        switch (getLanguage) {
            case "TW":
                alert(language.TW.lp_check_password);
                break;
            case "KR":
                alert(language.KR.lp_check_password);
                break;
            case "English":
                alert(language.English.lp_account_empty);
                break;
            default:
                alert(language.English.lp_check_password);
                break;
        }
    },

    check_login_reppassword: function check_login_reppassword() {
        var getLanguage = language
        switch (getLanguage) {
            case "TW":
                alert(language.TW.lp_check_password_mismatch);
                break;
            case "KR":
                alert(language.KR.lp_check_password_mismatch);
                break;
            case "English":
                alert(language.English.lp_account_empty);
                break;
            default:
                alert(language.English.lp_check_password_mismatch);
                break;
        }
    },
    check_login_email: function check_login_email() {
        var getLanguage = language
        switch (getLanguage) {
            case "TW":
                alert(language.TW.lp_check_email);
                break;
            case "KR":
                alert(language.KR.lp_check_email);
                break;
            case "English":
                alert(language.English.lp_account_empty);
                break;
            default:
                alert(language.English.lp_check_email);
                break;
        }
    }

    //获取URL参数
};

function GetQueryString(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\&$');
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}