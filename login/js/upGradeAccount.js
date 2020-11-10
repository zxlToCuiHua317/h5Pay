(function (window, document) {
    function upGradeAccount(config) {
        upGradeAccount.prototype.config = {
            gameCode: null,
            packageName: null,
            language: null,
            os: null,
            appid: null,
            access_token: null
        }
        Object.assign(upGradeAccount.prototype.config, config)
        localStorage.setItem("config", JSON.stringify(upGradeAccount.prototype.config))
    }

    upGradeAccount.prototype = {
        constructor: upGradeAccount,
        init: function (callback) {
            this.createJQ()
            console.log(upGradeAccount.prototype.config)
            this.creatNode(callback)
        },
        createJQ: function () {
            console.log("cuihua")
            var src = document.createElement("script")
            src.setAttribute("type", "text/javascript")
            src.async = false
            src.setAttribute("src", "https://code.jquery.com/jquery-1.11.3.min.js")
            document.head.appendChild(src)
        },
        creatNode: function (callback) {
            var login = document.createElement("div")
            login.classList.add("main_up")
            login.innerHTML = `
        <div class="account_fb">
            <div class="login_logo_fb">
                <img src="//awscdnnrxwsone.95vy.com/gc_file/webpay/images/back.png" class="back_ns">
            </div>
            <div class="account_fb_ns">
                <div class="login-sub">
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-people"></i>
                        <input type="text" id="fb_username_ns" placeholder="" class="login_username_ns">
                        <label for="registered_username_ns" class="clear_ns"><img
                                src="//awscdnnrxwsone.95vy.com/gc_file/webpay/images/close.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="fb_userpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_userpassword_ns" class="show_ns"><img
                                src="//awscdnnrxwsone.95vy.com/gc_file/webpay/images/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="fb_repeatpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_repeatpassword_ns" class="show_ns"><img
                                src="//awscdnnrxwsone.95vy.com/gc_file/webpay/images/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-tubiao209"></i>
                        <input type="text" id="fb_email_ns" placeholder="" class="login_username_ns">
                        <label for="registered_email_ns" class="clear_ns"><img
                                src="//awscdnnrxwsone.95vy.com/gc_file/webpay/images/close.png"></label>
                    </div>
                </div>
                <input type="button" value="" class="fb_button_ns">
            </div>
        </div>
        <div class="tipShow">
        <div class="tip_title">
            <span class="iconfont  icon-guanbi title_close"></span>
        </div>
        <div class="tip_content"></div>
        </div>
        <div class="showad"></div>
        <div class="loading"></div>
            `
            document.body.appendChild(login)[2]
            this.userLogin(upGradeAccount.prototype.config.language)
            this.handleClick(callback)
            this.EventClick(callback)
        },
        handleClick: function () {

            $(".login_logo_fb .back_ns").click(function () {
                $(".main_up").remove()
            });

            $('.login_username_ns').on('focus keyup', function () {
                var val = $(this).val();
                if (val != '') {
                    $(this).next().show();
                } else if (val == '') {
                    $(this).next().hide();
                }
            });

            $('.clear_ns').click(function () {
                clearUser(this);
            });

            $(".title_close").click(function () {
                $(".tipShow").hide()
                $(".showad").hide()
            })

            function clearUser(obj) {
                var pass = $(obj).prev();
                pass.val('');
            }
            $('.show_ns').click(function () {
                showPass(this);
            });

            function showPass(obj) {
                var pass = $(obj).prev();
                var temp = pass.val();
                var img = $(obj).children();
                var ret = pass.attr("type");
                if (ret == 'password') {
                    pass.attr("type", "text");
                    img.attr("src", "//awscdnnrxwsone.95vy.com/gc_file/webpay/images/ear.png");
                } else {
                    pass.attr("type", "password");
                    img.attr("src", "//awscdnnrxwsone.95vy.com/gc_file/webpay/images/ear_blue.png");
                }
                pass.val(temp);
            }
        },
        EventClick: function (callback) {

            $(".fb_button_ns").click(function () {

                upGradeAccount.prototype._userUpgradeAccount(callback);
            });

        },

        _userUpgradeAccount: function (callback) {
            var fb_phone = $("#fb_username_ns").val();
            var fb_userpassword = $("#fb_userpassword_ns").val();
            var fb_repeatpassword = $("#fb_repeatpassword_ns").val();
            var fb_email = $("#fb_email_ns").val();

            if (fb_phone === "") {
                $(".tip_content").text("請輸入賬號名或郵箱")
                $(".tipShow").show()
                $(".showad").show()

                return;
            }
            if (fb_userpassword === "" || fb_repeatpassword === "") {
                $(".tip_content").text("請輸入密碼")
                $(".tipShow").show()
                $(".showad").show()

                return;
            }
            if (fb_userpassword !== fb_repeatpassword) {
                $(".tip_content").text("兩次輸入密碼不一致")
                $(".tipShow").show()
                $(".showad").show()

                return;
            }

            if (!(/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(fb_email))) {
                $(".tip_content").text("郵箱格式不正確")
                $(".tipShow").show()
                $(".showad").show()

                return;
            }

            if (fb_phone && fb_userpassword && fb_repeatpassword && fb_email) {
                $.ajax({
                    type: "POST",
                    url: Api.userUpgradeAccount_api,
                    data: {
                        username: fb_phone,
                        password: fb_userpassword,
                        repassword: fb_repeatpassword,
                        email: fb_email,
                        SessionID_LP: upGradeAccount.prototype.config.access_token,
                        language: upGradeAccount.prototype.config.language,
                        gameCode: upGradeAccount.prototype.config.gameCode,
                        packageName: upGradeAccount.prototype.config.packageName,
                        os: upGradeAccount.prototype.config.os
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        $(".loading").show();
                        $(".showad").show();
                        isClick = false;
                    },
                    success: function success(res) {
                        $(".loading").hide();
                        $(".showad").hide();
                        console.log(res);
                        if (res.code === "1110") {
                            $(".main_up").remove()
                            callback(res)
                        } else {
                            $(".tip_content").text(res.msg)
                            $(".tipShow").show()
                            $(".showad").show()
                        }
                    }
                });
            } else {
                $(".tip_content").text("請輸入賬號或密碼")
                $(".tipShow").show()
                $(".showad").show()
            }
        },
        //设置语言  
        userLogin: function (lang) {
            var getLanguage = lang
            console.log(language)
            switch (getLanguage) {
                case "TW":

                    $("#fb_username_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
                    $("#fb_userpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_password);
                    $("#fb_repeatpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_reppassword);
                    $("#fb_email_ns").attr("placeholder", language.TW.lp_account_binding_activity_email_hint);
                    $(".fb_button_ns").val(language.TW.lp_accountbing_btn_accountbing);

                    break;
                case "KR":

                    $("#fb_username_ns").attr("placeholder", language.KR.lp_accountbing_edt_username);
                    $("#fb_userpassword_ns").attr("placeholder", language.KR.lp_accountbing_edt_password);
                    $("#fb_repeatpassword_ns").attr("placeholder", language.KR.lp_accountbing_edt_reppassword);
                    $("#fb_email_ns").attr("placeholder", language.KR.lp_account_binding_activity_email_hint);
                    $(".fb_button_ns").val(language.KR.lp_accountbing_btn_accountbing);
                    break;
                case "English":

                    $("#fb_username_ns").attr("placeholder", language.English.lp_accountbing_edt_username);
                    $("#fb_userpassword_ns").attr("placeholder", language.English.lp_accountbing_edt_password);
                    $("#fb_repeatpassword_ns").attr("placeholder", language.English.lp_accountbing_edt_reppassword);
                    $("#fb_email_ns").attr("placeholder", language.English.lp_account_binding_activity_email_hint);
                    $(".fb_button_ns").val(language.English.lp_accountbing_btn_accountbing);

                    break;
                default:

                    $("#fb_username_ns").attr("placeholder", language.TW.lp_accountbing_edt_username);
                    $("#fb_userpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_password);
                    $("#fb_repeatpassword_ns").attr("placeholder", language.TW.lp_accountbing_edt_reppassword);
                    $("#fb_email_ns").attr("placeholder", language.TW.lp_account_binding_activity_email_hint);
                    $(".fb_button_ns").val(language.TW.lp_accountbing_btn_accountbing);

                    break;
            }
        },
        //获取URL参数
        GetQueryString: function (name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\&$');
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        
    }
    //冻结操作 
    Object.freeze(upGradeAccount)
    window.upGradeAccount = upGradeAccount;
})(window, document)