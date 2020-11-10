"use strict";

$(function () {
    // var getLanguage = JSON.parse(localStorage.getItem("gameData")).language;
    var getLanguage = "TW"

    switch (getLanguage) {
        case "TW":
            $("#enter_game_ns").val(language.TW.lp_platform_login_activity_btn_enter);
            $(".handle_head_title").text(language.TW.lp_login_activity_text1);
            $(".handle_icon_facebook").text(language.TW.lp_login_activity_facebook_text);
            $(".handle_icon_sw").text(language.TW.lp_login_activity_sw_text);
            $(".handle_icon_pt").text(language.TW.lp_login_activity_pt_text);
            $("#login_username_ns").attr("placeholder", language.TW.lp_platform_login_account_hint);
            $("#login_userpassword_ns").attr("placeholder", language.TW.lp_platform_login_activity_login_hint_password);
            $(".login_button_ns").val(language.TW.lp_platform_login_activity_btn_enter);

            $(".forget_password_ns span").text(language.TW.lp_platform_login_activity_retrieve_password_txt);
            $(".click_registered_ns").text(language.TW.lp_platform_login_activity_register);
            $(".account_management_ns").text(language.TW.lp_platform_login_activity_account_manager);

            $("#retrieve_username_ns").attr("placeholder", language.TW.lp_retrieve_password_activity_hint_acc);
            $("#retrieve_email_ns").attr("placeholder", language.TW.lp_retrieve_password_activity_hint_email);
            $(".retrieve_password_ns").val(language.TW.lp_retrieve_password_activity_retrieve_pwd);

            $("#registered_username_ns").attr("placeholder", language.TW.lp_register_activity_hint_username);
            $("#registered_userpassword_ns").attr("placeholder", language.TW.lp_register_activity_hint_password);
            $("#registered_repeatpassword_ns").attr("placeholder", language.TW.lp_register_activity_hint_reppassword);
            $("#registered_email_ns").attr("placeholder", language.TW.lp_register_activity_hint_email);
            $(".registered_button_ns").val(language.TW.lp_register_activity_register_txt);

            $(".user_agree_rule").text(language.TW.lp_register_activity_agree_rule);
            $(".toRule").text(language.TW.lp_register_activity_rule_manage);

            $(".account1_ns").text(language.TW.lp_updatepassword_txt_updatepassword);
            $(".account2_ns").text(language.TW.lp_account_manage_activity_guest_binding);
            $(".account3_ns").text(language.TW.lp_account_manage_activity_facebook_binding);

            $("#changePass_phone_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
            $("#changePass_userpassword_ns").attr("placeholder", language.TW.lp_updatepassword_txt_oldpassword);
            $("#changePass_newpassword_ns").attr("placeholder", language.TW.lp_updatepassword_txt_newpassword);
            $("#changePass_repeatpassword_ns").attr("placeholder", language.TW.lp_updatepassword_txt_reppassword);
            $(".changePass_button_ns").val(language.TW.lp_updatepassword_btn_updatepassword);

            $("#play_username_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
            $("#play_userpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_password);
            $("#play_repeatpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_reppassword);
            $("#play_email_ns").attr("placeholder", language.TW.lp_account_binding_activity_email_hint);
            $(".play_button_ns").val(language.TW.lp_accountbing_btn_accountbing);

            $("#fb_username_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
            $("#fb_userpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_password);
            $("#fb_repeatpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_reppassword);
            $("#fb_email_ns").attr("placeholder", language.TW.lp_account_binding_activity_email_hint);
            $(".fb_button_ns").val(language.TW.lp_accountbing_btn_accountbing);

            $(".title_loding").text(language.TW.lp_sdk_login_activity_tips_msg);
            $(".quit_btn").text(language.TW.lp_sdk_login_activity_tips_switch_msg);
            break;
        case "KR":
            $("#enter_game_ns").val(language.KR.lp_platform_login_activity_btn_enter);
            $(".handle_head_title").text(language.KR.lp_login_activity_text1);
            $(".handle_icon_facebook").text(language.KR.lp_login_activity_facebook_text);
            $(".handle_icon_sw").text(language.KR.lp_login_activity_sw_text);
            $(".handle_icon_pt").text(language.KR.lp_login_activity_pt_text);
            $("#login_username_ns").attr("placeholder", language.KR.lp_platform_login_account_hint);
            $("#login_userpassword_ns").attr("placeholder", language.KR.lp_platform_login_activity_login_hint_password);
            $(".login_button_ns").val(language.KR.lp_platform_login_activity_btn_enter);

            $(".forget_password_ns span").text(language.KR.lp_platform_login_activity_retrieve_password_txt);
            $(".click_registered_ns").text(language.KR.lp_platform_login_activity_register);
            $(".account_management_ns").text(language.KR.lp_platform_login_activity_account_manager);

            $("#retrieve_username_ns").attr("placeholder", language.KR.lp_retrieve_password_activity_hint_acc);
            $("#retrieve_email_ns").attr("placeholder", language.KR.lp_retrieve_password_activity_hint_email);
            $(".retrieve_password_ns").val(language.KR.lp_retrieve_password_activity_retrieve_pwd);

            $("#registered_username_ns").attr("placeholder", language.KR.lp_register_activity_hint_username);
            $("#registered_userpassword_ns").attr("placeholder", language.KR.lp_register_activity_hint_password);
            $("#registered_repeatpassword_ns").attr("placeholder", language.KR.lp_register_activity_hint_reppassword);
            $("#registered_email_ns").attr("placeholder", language.KR.lp_register_activity_hint_email);
            $(".registered_button_ns").val(language.KR.lp_register_activity_register_txt);

            $(".user_agree_rule").text(language.KR.lp_register_activity_agree_rule);
            $(".toRule").text(language.KR.lp_register_activity_rule_manage);

            $(".account1_ns").text(language.KR.lp_updatepassword_txt_updatepassword);
            $(".account2_ns").text(language.KR.lp_account_manage_activity_guest_binding);
            $(".account3_ns").text(language.KR.lp_account_manage_activity_facebook_binding);

            $("#changePass_phone_ns").attr("placeholder", language.KR.lp_accountbing_edt_username);
            $("#changePass_userpassword_ns").attr("placeholder", language.KR.lp_updatepassword_txt_oldpassword);
            $("#changePass_newpassword_ns").attr("placeholder", language.KR.lp_updatepassword_txt_newpassword);
            $("#changePass_repeatpassword_ns").attr("placeholder", language.KR.lp_updatepassword_txt_reppassword);
            $(".changePass_button_ns").val(language.KR.lp_updatepassword_btn_updatepassword);

            $("#play_username_ns").attr("placeholder", language.KR.lp_accountbing_edt_username);
            $("#play_userpassword_ns").attr("placeholder", language.KR.lp_accountbing_edt_password);
            $("#play_repeatpassword_ns").attr("placeholder", language.KR.lp_accountbing_edt_reppassword);
            $("#play_email_ns").attr("placeholder", language.KR.lp_account_binding_activity_email_hint);
            $(".play_button_ns").val(language.KR.lp_accountbing_btn_accountbing);

            $("#fb_username_ns").attr("placeholder", language.KR.lp_accountbing_edt_username);
            $("#fb_userpassword_ns").attr("placeholder", language.KR.lp_accountbing_edt_password);
            $("#fb_repeatpassword_ns").attr("placeholder", language.KR.lp_accountbing_edt_reppassword);
            $("#fb_email_ns").attr("placeholder", language.KR.lp_account_binding_activity_email_hint);
            $(".fb_button_ns").val(language.KR.lp_accountbing_btn_accountbing);

            $(".title_loding").text(language.KR.lp_sdk_login_activity_tips_msg);
            $(".quit_btn").text(language.KR.lp_sdk_login_activity_tips_switch_msg);
            break;
        case "English":
            $("#enter_game_ns").val(language.English.lp_platform_login_activity_btn_enter);
            $(".handle_head_title").text(language.English.lp_login_activity_text1);
            $(".handle_icon_facebook").text(language.English.lp_login_activity_facebook_text);
            $(".handle_icon_sw").text(language.English.lp_login_activity_sw_text);
            $(".handle_icon_pt").text(language.English.lp_login_activity_pt_text);
            $("#login_username_ns").attr("placeholder", language.English.lp_platform_login_account_hint);
            $("#login_userpassword_ns").attr("placeholder", language.English.lp_platform_login_activity_login_hint_password);
            $(".login_button_ns").val(language.English.lp_platform_login_activity_btn_enter);

            $(".forget_password_ns span").text(language.English.lp_platform_login_activity_retrieve_password_txt);
            $(".click_registered_ns").text(language.English.lp_platform_login_activity_register);
            $(".account_management_ns").text(language.English.lp_platform_login_activity_account_manager);

            $("#retrieve_username_ns").attr("placeholder", language.English.lp_retrieve_password_activity_hint_acc);
            $("#retrieve_email_ns").attr("placeholder", language.English.lp_retrieve_password_activity_hint_email);
            $(".retrieve_password_ns").val(language.English.lp_retrieve_password_activity_retrieve_pwd);

            $("#registered_username_ns").attr("placeholder", language.English.lp_register_activity_hint_username);
            $("#registered_userpassword_ns").attr("placeholder", language.English.lp_register_activity_hint_password);
            $("#registered_repeatpassword_ns").attr("placeholder", language.English.lp_register_activity_hint_reppassword);
            $("#registered_email_ns").attr("placeholder", language.English.lp_register_activity_hint_email);
            $(".registered_button_ns").val(language.English.lp_register_activity_register_txt);

            $(".user_agree_rule").text(language.English.lp_register_activity_agree_rule);
            $(".toRule").text(language.English.lp_register_activity_rule_manage);

            $(".account1_ns").text(language.English.lp_updatepassword_txt_updatepassword);
            $(".account2_ns").text(language.English.lp_account_manage_activity_guest_binding);
            $(".account3_ns").text(language.English.lp_account_manage_activity_facebook_binding);

            $("#changePass_phone_ns").attr("placeholder", language.English.lp_accountbing_edt_username);
            $("#changePass_userpassword_ns").attr("placeholder", language.English.lp_updatepassword_txt_oldpassword);
            $("#changePass_newpassword_ns").attr("placeholder", language.English.lp_updatepassword_txt_newpassword);
            $("#changePass_repeatpassword_ns").attr("placeholder", language.English.lp_updatepassword_txt_reppassword);
            $(".changePass_button_ns").val(language.English.lp_updatepassword_btn_updatepassword);

            $("#play_username_ns").attr("placeholder", language.English.lp_accountbing_edt_username);
            $("#play_userpassword_ns").attr("placeholder", language.English.lp_accountbing_edt_password);
            $("#play_repeatpassword_ns").attr("placeholder", language.English.lp_accountbing_edt_reppassword);
            $("#play_email_ns").attr("placeholder", language.English.lp_account_binding_activity_email_hint);
            $(".play_button_ns").val(language.English.lp_accountbing_btn_accountbing);

            $("#fb_username_ns").attr("placeholder", language.English.lp_accountbing_edt_username);
            $("#fb_userpassword_ns").attr("placeholder", language.English.lp_accountbing_edt_password);
            $("#fb_repeatpassword_ns").attr("placeholder", language.English.lp_accountbing_edt_reppassword);
            $("#fb_email_ns").attr("placeholder", language.English.lp_account_binding_activity_email_hint);
            $(".fb_button_ns").val(language.English.lp_accountbing_btn_accountbing);

            $(".title_loding").text(language.English.lp_sdk_login_activity_tips_msg);
            $(".quit_btn").text(language.English.lp_sdk_login_activity_tips_switch_msg);
            break;
        default:
            $("#enter_game_ns").val(language.TW.lp_platform_login_activity_btn_enter);
            $(".handle_head_title").text(language.TW.lp_login_activity_text1);
            $(".handle_icon_facebook").text(language.TW.lp_login_activity_facebook_text);
            $(".handle_icon_sw").text(language.TW.lp_login_activity_sw_text);
            $(".handle_icon_pt").text(language.TW.lp_login_activity_pt_text);
            $("#login_username_ns").attr("placeholder", language.TW.lp_platform_login_account_hint);
            $("#login_userpassword_ns").attr("placeholder", language.TW.lp_platform_login_activity_login_hint_password);
            $(".login_button_ns").val(language.TW.lp_platform_login_activity_btn_enter);

            $(".forget_password_ns span").text(language.TW.lp_platform_login_activity_retrieve_password_txt);
            $(".click_registered_ns").text(language.TW.lp_platform_login_activity_register);
            $(".account_management_ns").text(language.TW.lp_platform_login_activity_account_manager);

            $("#retrieve_username_ns").attr("placeholder", language.TW.lp_retrieve_password_activity_hint_acc);
            $("#retrieve_email_ns").attr("placeholder", language.TW.lp_retrieve_password_activity_hint_email);
            $(".retrieve_password_ns").val(language.TW.lp_retrieve_password_activity_retrieve_pwd);

            $("#registered_username_ns").attr("placeholder", language.TW.lp_register_activity_hint_username);
            $("#registered_userpassword_ns").attr("placeholder", language.TW.lp_register_activity_hint_password);
            $("#registered_repeatpassword_ns").attr("placeholder", language.TW.lp_register_activity_hint_reppassword);
            $("#registered_email_ns").attr("placeholder", language.TW.lp_register_activity_hint_email);
            $(".registered_button_ns").val(language.TW.lp_register_activity_register_txt);

            $(".user_agree_rule").text(language.TW.lp_register_activity_agree_rule);
            $(".toRule").text(language.TW.lp_register_activity_rule_manage);

            $(".account1_ns").text(language.TW.lp_updatepassword_txt_updatepassword);
            $(".account2_ns").text(language.TW.lp_account_manage_activity_guest_binding);
            $(".account3_ns").text(language.TW.lp_account_manage_activity_facebook_binding);

            $("#changePass_phone_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
            $("#changePass_userpassword_ns").attr("placeholder", language.TW.lp_updatepassword_txt_oldpassword);
            $("#changePass_newpassword_ns").attr("placeholder", language.TW.lp_updatepassword_txt_newpassword);
            $("#changePass_repeatpassword_ns").attr("placeholder", language.TW.lp_updatepassword_txt_reppassword);
            $(".changePass_button_ns").val(language.TW.lp_updatepassword_btn_updatepassword);

            $("#play_username_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
            $("#play_userpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_password);
            $("#play_repeatpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_reppassword);
            $("#play_email_ns").attr("placeholder", language.TW.lp_account_binding_activity_email_hint);
            $(".play_button_ns").val(language.TW.lp_accountbing_btn_accountbing);

            $("#fb_username_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
            $("#fb_userpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_password);
            $("#fb_repeatpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_reppassword);
            $("#fb_email_ns").attr("placeholder", language.TW.lp_account_binding_activity_email_hint);
            $(".fb_button_ns").val(language.TW.lp_accountbing_btn_accountbing);

            $(".title_loding").text(language.TW.lp_sdk_login_activity_tips_msg);
            $(".quit_btn").text(language.TW.lp_sdk_login_activity_tips_switch_msg);
            break;
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
});