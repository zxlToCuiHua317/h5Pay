(function (window, document) {
    function Login(config) {
        Login.prototype.config = {
            gameCode: null,
            siteCode: null,
            isIPGame: null,
            packageName: null,
            language: null,
            os: null
        }
        Login.prototype.FBID = 0;
        Login.prototype.accessToken = 0;
        Login.prototype.FBName = "";
        Login.prototype.timer = null;
        Object.assign(Login.prototype.config, config)
    }

    Login.prototype = {
        constructor: Login,
        init: function () {
            var getfbLoginData = JSON.parse(localStorage.getItem(getfbLoginData_c));
            if (getfbLoginData === null) {
                localStorage.setItem(getfbLoginData_c, "[]");
            }
            var getptLoginData = JSON.parse(localStorage.getItem(getptLoginData_c));
            if (getptLoginData === null) {
                localStorage.setItem(getptLoginData_c, "[]");
            }
            var gettryLoginData = JSON.parse(localStorage.getItem(gettryLoginData_c));
            if (gettryLoginData === null) {
                localStorage.setItem(gettryLoginData_c, "[]");
            }

            var name = "code";

            if (name) {
                ch = GetQueryString(name);
                if (ch) {
                    getMakeLogin();
                }
            }
            this.creatNode()
        },
        creatNode: function () {
            var login = document.createElement("div")
            login.classList.add("main")
            login.innerHTML = `
            <div class="automatic_login_ns">
            <div class="login_logo_ns">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="login_inp_ns">
                <div class="select_use">
                    <span class="sel-img iconfont"></span>
                    <span class="sel-title"></span>
                    <span class="sel-down iconfont icon-xiala"></span>
                    <span class="sel-up iconfont icon-xiala"></span>
                </div>
                <div class="down_list">
                    <ul></ul>
                </div>
                <input type="button" name="" id="enter_game_ns" value="" />
                <div class="select_title_ns">
                    <div class="dashed_line"></div>
                    <div class="handle_head_title"></div>
                </div>
                <ul class="handle_icon clearfix">
                    <li>
                        <div class="handle handle1">
                            <a class="fbLogin">
                                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/Facebook.png">
                            </a>
                        </div>
                        <p class="handle_icon_facebook"></p>
                    </li>
                    <li>
                        <div class="handle handle2">
                            <i class="iconfont icon-94"></i>
                        </div>
                        <p class="handle_icon_sw"></p>
                    </li>
                    <li style="float: right;">
                        <div class="handle handle3">
                            <i class="iconfont icon-people"></i>
                        </div>
                        <p class="handle_icon_pt"></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="login_inp">
            <div class="login_logo_inp">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="login_dl_ns">
                <div class="login_acnum_ns">
                    <i class="iconfont icon-people"></i>
                    <input type="text" id="login_username_ns" placeholder="" class="login_username_ns">
                    <label for="login_username_ns" class="clear_ns"><img
                            src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                </div>
                <div class="login_acnum_ns">
                    <i class="iconfont icon-shurumima"></i>
                    <input type="password" id="login_userpassword_ns" placeholder="" class="login_username_ns">
                    <label for="login_userpassword_ns" class="show_ns"><img
                            src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                </div>
                <div class="forget_password_ns">
                    <span class=""></span>
                </div>
                <input type="button" value="로그인" class="login_button_ns">
                <p class="p_span">
                    <span class="click_registered_ns"></span>
                    <span class="account_management_ns"></span>
                </p>
            </div>
        </div>
        <div class="forget_password">
            <div class="login_logo_forget">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="forget_password_ns">
                <div class="login_acnum_ns ">
                    <i class="iconfont icon-people"></i>
                    <input type="text" id="retrieve_username_ns" placeholder="" class="login_username_ns">
                    <label for="retrieve_username_ns" class="clear_ns"><img
                            src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                </div>
                <div class="login_acnum_ns">
                    <i class="iconfont icon-tubiao209"></i>
                    <input type="text" id="retrieve_email_ns" placeholder="" class="login_username_ns">
                    <label for="retrieve_email_ns" class="clear_ns"><img
                            src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                </div>
                <input type="button" value="" class="retrieve_password_ns">
            </div>
        </div>
        <div class="login_zc">
            <div class="login_logo_zc">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="login_zc_ns">
                <div class="login-sub">
                    <div class="login_acnum_ns ">
                        <i class="iconfont icon-people"></i>
                        <input type="text" id="registered_username_ns" placeholder="" class="login_username_ns">
                        <label for="registered_username_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="registered_userpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_userpassword_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="registered_repeatpassword_ns" placeholder=""
                            class="login_username_ns">
                        <label for="registered_repeatpassword_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-tubiao209"></i>
                        <input type="text" id="registered_email_ns" placeholder="" class="login_username_ns">
                        <label for="registered_email_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                </div>
                <div class="user_agree_ns">
                    <input type="radio" value="1" id="agree_ns" checked="checked" hidden="hidden">
                    <label for="agree_ns" class="advice_nsw checked"></label>
                    <span class="user_agree_rule"></span>
                    <span class="toRule" style="color: aquamarine;"></span>
                </div>
                <input type="button" value="" class="registered_button_ns">
            </div>

        </div>
        <div class="account_management">
            <div class="login_logo_account">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="login_way_ns">
                <div class="account1_ns"></div>
                <div class="account2_ns"></div>
                <div class="account3_ns"></div>
            </div>
        </div>
        <div class="account_changePass">
            <div class="login_logo_changePass">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="account_changePass_ns">
                <div class="login-sub">
                    <div class="login_acnum_ns ">
                        <i class="iconfont icon-people"></i>
                        <input type="text" id="changePass_phone_ns" placeholder="" class="login_username_ns">
                        <label for="registered_username_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="text" id="changePass_userpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_userpassword_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="changePass_newpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_repeatpassword_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-tubiao209"></i>
                        <input type="password" id="changePass_repeatpassword_ns" placeholder=""
                            class="login_username_ns">
                        <label for="registered_email_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                </div>
                <input type="button" value="" class="changePass_button_ns">
            </div>
        </div>
        <div class="account_play">
            <div class="login_logo_play">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="account_play_ns">
                <div class="login-sub">
                    <div class="login_acnum_ns ">
                        <i class="iconfont icon-people"></i>
                        <input type="text" id="play_username_ns" placeholder="" class="login_username_ns">
                        <label for="registered_username_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="play_userpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_userpassword_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="play_repeatpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_repeatpassword_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-tubiao209"></i>
                        <input type="text" id="play_email_ns" placeholder="" class="login_username_ns">
                        <label for="registered_email_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                </div>
                <input type="button" value="" class="play_button_ns">
            </div>
        </div>
        <div class="account_fb">
            <div class="login_logo_fb">
                <img src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/back.png" class="back_ns">
            </div>
            <div class="account_fb_ns">
                <div class="login-sub">
                    <div class="login_acnum_ns ">
                        <i class="iconfont icon-people"></i>
                        <input type="text" id="fb_username_ns" placeholder="" class="login_username_ns">
                        <label for="registered_username_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="fb_userpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_userpassword_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-shurumima"></i>
                        <input type="password" id="fb_repeatpassword_ns" placeholder="" class="login_username_ns">
                        <label for="registered_repeatpassword_ns" class="show_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/ear_blue.png"></label>
                    </div>
                    <div class="login_acnum_ns">
                        <i class="iconfont icon-tubiao209"></i>
                        <input type="text" id="fb_email_ns" placeholder="" class="login_username_ns">
                        <label for="registered_email_ns" class="clear_ns"><img
                                src="//awscdnfsstwone.1jqmk9f.com/gc_file/webLogin/login/img/close.png"></label>
                    </div>
                </div>
                <input type="button" value="" class="fb_button_ns">
            </div>
        </div>
        <div class="bg">
            <div class="close"></div>
            <div class="tip"></div>
            <div class="content">
                <div class="left-conten">
                </div>
                <div class="right-content">
                </div>
            </div>
            <div class="raido">
                <div class="left-btn"></div>
                <div class="right-btn">同意</div>
                <div class="left-raido"></div>
                <div class="right-raido"></div>
            </div>
            <div class="arrbtn"></div>
        </div>
        <div class="quitLogion">
            <div class="login_Title">
                <span class="title_name"></span>
                <span class="title_loding"></span>
            </div>
            <div class="quit_btn"></div>
        </div>
        <div class="showad"></div>
        <div class="loading"></div>
            `
            document.body.appendChild(login)[2]
            this.userLogin(Login.prototype.config.language)
            this.handleClick()
            this.EventClick()
            this._automaticLogin()
        },
        handleClick: function () {
            var leftShow = false;
            $(".left-btn").click(function () {
                $(".left-raido").show();
                leftShow = true;
            });

            $(".left-raido").click(function () {
                $(".left-raido").hide();
                leftShow = false;
            });

            $(".close").click(function () {
                $(".bg").hide();
            });
            $(".arrbtn").click(function () {
                if (leftShow) {
                    $(".bg").hide();
                    leftShow = false;
                    $(".left-raido").hide();

                    isOpenRule = 1;
                    localStorage.setItem("isOpenRule", isOpenRule);
                } else {
                    alert(language.English.lp_register_code_agreerule);
                }
            });

            $(".handle3").click(function () {
                $(".automatic_login_ns").hide();
                $(".login_inp").show();
            });

            $(".login_logo_inp .back_ns").click(function () {
                $(".automatic_login_ns").show();
                $(".login_inp").hide();
            });
            $(".forget_password_ns").click(function () {
                $(".forget_password").show();
                $(".login_inp").hide();
            });
            $(".login_logo_forget .back_ns").click(function () {
                $(".forget_password").hide();
                $(".login_inp").show();
            });
            $(".click_registered_ns").click(function () {
                $(".login_inp").hide();
                $(".login_zc").show();
            });
            $(".login_logo_zc .back_ns").click(function () {
                $(".login_zc").hide();
                $(".login_inp").show();
            });
            $(".account_management_ns").click(function () {
                $(".login_inp").hide();
                $(".account_management").show();
            });
            $(".login_logo_account .back_ns").click(function () {
                $(".login_inp").show();
                $(".account_management").hide();
            });

            $(".login_logo_changePass .back_ns").click(function () {
                $(".account_changePass").hide();
                $(".account_management").show();
            });
            $(".login_logo_play .back_ns").click(function () {
                $(".account_play").hide();
                $(".account_management").show();
            });
            $(".login_logo_fb .back_ns").click(function () {
                $(".account_fb").hide();
                $(".account_management").show();
            });
            $(".account1_ns").click(function () {
                $(".account_management").hide();
                $(".account_changePass").show();
            });
            $(".account2_ns").click(function () {
                $(".account_management").hide();
                $(".account_play").show();
            });
            $(".account3_ns").click(function () {
                $(".account_management").hide();
                $(".account_fb").show();
            });

            $(".sel-down").click(function () {
                $(".down_list").fadeIn(500);
                $(".sel-down").hide();
                $(".sel-up").show();
            });

            $(".sel-up").click(function () {
                $(".down_list").fadeOut(500);
                $(".sel-down").show();
                $(".sel-up").hide();
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
                    img.attr("src", "//awscdnflzfzbone.icbem53.com/gc_file/webLogin/login/img/ear.png");
                } else {
                    pass.attr("type", "password");
                    img.attr("src", "//awscdnflzfzbone.icbem53.com/gc_file/webLogin/login/img/ear_blue.png");
                }
                pass.val(temp);
            }

            $(".item").click(function () {
                $(".down_list").hide();
                $(".sel-down").show();
                $(".sel-up").hide();
            });

            $(".quit_btn").click(function () {
                $(".quitLogion").hide();
                $(".loading").hide();
                $(".showad").hide();
                console.log(Login.prototype.timer)
                clearTimeout(Login.prototype.timer);
            });

            var getFbLoginData = JSON.parse(localStorage.getItem("fbLoginData"));
            var getPtLoginData = JSON.parse(localStorage.getItem("ptLoginData"));
            var getTryLoginData = JSON.parse(localStorage.getItem("tryLoginData"));

            console.log(getTryLoginData);
            if (getFbLoginData.length === 0 && getPtLoginData.length === 0 && getTryLoginData.length === 0) {
                $(".down_list").hide();
            } else if (getFbLoginData && getPtLoginData && getTryLoginData) {
                console.log("三个数组都有");
                var arrData = [].concat(Login.prototype._toConsumableArray(getPtLoginData), Login.prototype._toConsumableArray(getFbLoginData), Login.prototype._toConsumableArray(getTryLoginData));
                arrData.sort(compare("time"));
                console.log(arrData);
                $(".sel-title").text(arrData[arrData.length - 1].name);
                $(".sel-img").addClass(arrData[arrData.length - 1].icon);
                var str = "";
                for (var i = 0; i < arrData.length; i++) {
                    var index = i;
                    str += " <li class=\"item" + index + "\">\n                        <span class=\"item-img iconfont " + arrData[index].icon + "\"></span>\n                        <span class=\"item-title\">" + arrData[index].name + "</span>\n                        <span class=\"item-down iconfont icon-shanchu\"></span>\n               </li>";
                }
                $(".down_list ul").html(str);
            }

            var gamedata = JSON.parse(localStorage.getItem("gameData"));

            $("ul").on("click", ".item-down", function () {
                var index = $(this).parent().index();
                console.log(arrData);
                if (arrData[index].type === "fb") {
                    if (window.confirm("是否要刪除該賬號記錄")) {
                        console.log(getFbLoginData[index]);
                        var delData = getFbLoginData.indexOf(arrData[index]);
                        getFbLoginData.splice(delData, 1);
                        localStorage.setItem("fbLoginData", JSON.stringify(getFbLoginData));
                        localStorage.removeItem("FbLogin");

                        if (getFbLoginData.length === 0) {
                            getFbLoginData = [];
                            if (getPtLoginData.length > 0 && getTryLoginData.length > 0) {
                                console.log(getPtLoginData);
                                arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getTryLoginData));
                                str = "";

                                $(".sel-title").text(getPtLoginData[0].name);
                                $(".sel-img").removeClass("icon-Facebook").addClass(getPtLoginData[0].icon);

                                arrData.forEach(function (item, index) {
                                    console.log(item);
                                    str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                });

                                $(".down_list ul").html(str);
                            } else if (getPtLoginData.length > 0 && getTryLoginData.length === 0) {
                                console.log(getPtLoginData);
                                arrData = [].concat(_toConsumableArray(getPtLoginData));
                                str = "";

                                $(".sel-title").text(getPtLoginData[0].name);
                                $(".sel-img").removeClass("icon-Facebook").addClass(getPtLoginData[0].icon);

                                arrData.forEach(function (item, index) {
                                    console.log(item);
                                    str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                });

                                $(".down_list ul").html(str);
                            } else if (getPtLoginData.length === 0 && getTryLoginData.length > 0) {
                                console.log(getPtLoginData);
                                arrData = [].concat(_toConsumableArray(getTryLoginData));
                                str = "";

                                $(".sel-title").text(getTryLoginData[0].name);
                                $(".sel-img").removeClass("icon-Facebook").addClass(getTryLoginData[0].icon);

                                arrData.forEach(function (item, index) {
                                    console.log(item);
                                    str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                });

                                $(".down_list ul").html(str);
                            } else {
                                $(".down_list ul").html("");
                                $(".sel-title").text("");
                                $(".sel-img").removeClass("icon-Facebook");
                            }
                        }
                        $(".down_list").hide();
                        $(".sel-up").hide();
                        $(".sel-down").show();
                    }
                } else if (arrData[index].type === "pt") {
                    if (window.confirm("是否要刪除該賬號記錄")) {
                        console.log(arrData[index]);
                        var selData = getPtLoginData.indexOf(arrData[index]);
                        getPtLoginData.splice(selData, 1);
                        localStorage.setItem("ptLoginData", JSON.stringify(getPtLoginData));
                        console.log(arrData);
                        console.log(getPtLoginData);
                        // location.reload(true)
                        if (getPtLoginData.length === 0) {
                            getPtLoginData = [];
                            console.log(getFbLoginData);
                            str = "";
                            if (getFbLoginData.length > 0 && getTryLoginData.length > 0) {
                                arrData = [].concat(_toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                                $(".sel-title").text(arrData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);

                                arrData.forEach(function (item, index) {
                                    console.log(item);
                                    str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                });

                                $(".down_list ul").html(str);
                            } else if (getFbLoginData.length > 0 && getTryLoginData.length === 0) {
                                arrData = [].concat(_toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                                $(".sel-title").text(arrData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                                str = "";
                                str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + arrData[0].icon + "\"></span>\n                                        <span class=\"item-title\">" + arrData[0].name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                $(".down_list ul").html(str);
                            } else if (getFbLoginData.length === 0 && getTryLoginData.length > 0) {
                                arrData = [].concat(_toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                                $(".sel-title").text(arrData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                                str = "";
                                str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + arrData[0].icon + "\"></span>\n                                        <span class=\"item-title\">" + arrData[0].name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                $(".down_list ul").html(str);
                            } else {
                                $(".down_list ul").html("");
                                $(".sel-title").text("");
                                $(".sel-img").removeClass("icon-people");
                            }
                        } else {
                            console.log("1");
                            if (getFbLoginData.length > 0 && getPtLoginData && getTryLoginData.length > 0) {
                                str = "";
                                arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                                $(".sel-title").text(arrData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                                arrData.forEach(function (item, index) {
                                    str += " <li class=\"item" + index + "\">\n                                    <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                    <span class=\"item-title\">" + item.name + "</span>\n                                    <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                                });
                                $(".down_list ul").html(str);
                            } else if (getFbLoginData.length === 0 && getPtLoginData && getTryLoginData.length > 0) {
                                str = "";
                                arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getTryLoginData));
                                $(".sel-title").text(arrData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                                arrData.forEach(function (item, index) {
                                    str += " <li class=\"item" + index + "\">\n                                    <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                    <span class=\"item-title\">" + item.name + "</span>\n                                    <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                                });
                                $(".down_list ul").html(str);
                            } else if (getFbLoginData.length > 0 && getPtLoginData && getTryLoginData.length === 0) {
                                str = "";
                                arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getFbLoginData));
                                $(".sel-title").text(arrData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                                arrData.forEach(function (item, index) {
                                    str += " <li class=\"item" + index + "\">\n                                    <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                    <span class=\"item-title\">" + item.name + "</span>\n                                    <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                                });
                                $(".down_list ul").html(str);
                            } else if (getFbLoginData.length === 0 && getPtLoginData && getTryLoginData.length === 0) {
                                console.log("2");
                                str = "";
                                arrData = [].concat(_toConsumableArray(getPtLoginData));

                                $(".sel-title").text(arrData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                                arrData.forEach(function (item, index) {
                                    console.log(index);
                                    str += " <li class=\"item" + index + "\">\n                                    <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                    <span class=\"item-title\">" + item.name + "</span>\n                                    <span class=\"item-down iconfont icon-shanchu\"></span>\n                                  </li>";
                                });
                                $(".down_list ul").html(str);
                            }
                        }
                        $(".down_list").hide();
                        $(".sel-up").hide();
                        $(".sel-down").show();
                    }
                } else if (arrData[index].type === "player") {
                    if (window.confirm("是否要刪除該賬號記錄")) {
                        console.log(getTryLoginData[index]);

                        var tryDelData = getTryLoginData.indexOf(arrData[index]);
                        getTryLoginData.splice(tryDelData, 1);
                        localStorage.setItem("tryLoginData", JSON.stringify(getTryLoginData));
                        localStorage.removeItem("FirstLogin");

                        if (getTryLoginData.length === 0) {
                            getTryLoginData = [];
                            if (getPtLoginData.length > 0 && getFbLoginData.length > 0) {
                                console.log(getPtLoginData);
                                arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getFbLoginData));
                                str = "";

                                $(".sel-title").text(getPtLoginData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(getPtLoginData[0].icon);

                                arrData.forEach(function (item, index) {
                                    console.log(item);
                                    str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                });

                                $(".down_list ul").html(str);
                            } else if (getPtLoginData.length > 0 && getFbLoginData.length === 0) {
                                console.log(getPtLoginData);
                                arrData = [].concat(_toConsumableArray(getPtLoginData));
                                str = "";

                                $(".sel-title").text(getPtLoginData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(getPtLoginData[0].icon);

                                arrData.forEach(function (item, index) {
                                    console.log(item);
                                    str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                });

                                $(".down_list ul").html(str);
                            } else if (getPtLoginData.length === 0 && getFbLoginData.length > 0) {
                                console.log(getPtLoginData);
                                arrData = [].concat(_toConsumableArray(getFbLoginData));
                                str = "";

                                $(".sel-title").text(getFbLoginData[0].name);
                                $(".sel-img").removeClass("icon-people").addClass(getFbLoginData[0].icon);

                                arrData.forEach(function (item, index) {
                                    console.log(item);
                                    str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                            </li>";
                                });

                                $(".down_list ul").html(str);
                            } else {
                                $(".down_list ul").html("");
                                $(".sel-title").text("");
                                $(".sel-img").removeClass("icon-94");
                            }
                        }
                        $(".down_list").hide();
                        $(".sel-up").hide();
                        $(".sel-down").show();
                    }
                }
            });

            $("ul").on("click", ".item-title", function () {
                var indexs = $(this).parent().index();
                if (arrData[indexs].type === "fb") {
                    $(".sel-title").text(arrData[indexs].name);
                    $(".sel-img").removeClass("icon-people icon-94").addClass(arrData[indexs].icon);
                    $(".down_list").hide();
                    $(".sel-up").hide();
                    $(".sel-down").show();
                } else if (arrData[indexs].type === "pt") {
                    $(".sel-title").text(arrData[indexs].name);
                    $(".sel-img").removeClass("icon-Facebook icon-94").addClass(arrData[indexs].icon);
                    $(".down_list").hide();
                    $(".sel-up").hide();
                    $(".sel-down").show();
                } else if (arrData[indexs].type === "player") {
                    $(".sel-title").text(arrData[indexs].name);
                    $(".sel-img").removeClass("icon-Facebook icon-people").addClass(arrData[indexs].icon);
                    $(".down_list").hide();
                    $(".sel-up").hide();
                    $(".sel-down").show();
                }
            });

            $("#enter_game_ns").click(function () {

                var username = $(".sel-title").text();
                console.log(username);
                console.log(isClick);

                if (isClick) {
                    var _loop = function _loop(ch) {
                        var chindex = ch;

                        if (arrData[chindex].type === "pt") {
                            if (arrData[chindex].name === username) {
                                $.ajax({
                                    url: Api.userLogin_api,
                                    type: "POST",
                                    data: {
                                        username: arrData[chindex].name,
                                        password: arrData[chindex].password,
                                        siteCode: "damoregame",
                                        t: "1487665362664",
                                        ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                                        ismobile: "yes",
                                        language: Login.prototype.config.language,
                                        gameCode: Login.prototype.config.gameCode,
                                        packageName: Login.prototype.config.packageName
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
                                        afterClick();
                                        if (res.code === "1000") {
                                            //成功
                                            sessionID = res.sessionID;
                                            $.ajax({
                                                type: "POST",
                                                url: Api.userMobileAuth_api,
                                                data: {
                                                    sitecode: Login.prototype.config.siteCode,
                                                    type: res.type,
                                                    os: Login.prototype.config.os,
                                                    SessionID_LP: res.sessionID,
                                                    language: Login.prototype.config.language,
                                                    gameCode: Login.prototype.config.gameCode,
                                                    packageName: Login.prototype.config.packageName,
                                                    packageVersion: Login.prototype.config.packageVersion
                                                },
                                                dataType: "jsonp",
                                                success: function success(res) {
                                                    console.log(chindex);
                                                    console.log(arrData[chindex]);

                                                    var timer = new Date().getTime();
                                                    arrData[chindex].time = timer;

                                                    if (getPtLoginData[chindex].name === arrData[chindex].name) {
                                                        getPtLoginData[chindex] = arrData[chindex];
                                                    }
                                                    localStorage.setItem("ptLoginData", JSON.stringify(getPtLoginData));
                                                    sendData = JSON.stringify(res);

                                                }
                                            });
                                        } else {
                                            alert(res.msg);
                                        }
                                    }
                                });
                            }
                        } else if (arrData[chindex].type === "fb") {
                            if (arrData[chindex].name === username) {
                                $.ajax({
                                    url: Api.fbuserLoginForMobile_api,
                                    type: 'POST',
                                    data: {
                                        access_token: arrData[chindex].accessToken,
                                        language: Login.prototype.config.language,
                                        gameCode: Login.prototype.config.gameCode,
                                        packageName: Login.prototype.config.packageName,
                                        os: Login.prototype.config.os,
                                        appid: appid,
                                        tag: "website"
                                    },
                                    dataType: 'jsonp',
                                    beforeSend: function beforeSend(e) {
                                        $(".loading").show();
                                        $(".showad").show();
                                    },
                                    success: function success(data) {
                                        $(".loading").hide();
                                        $(".showad").hide();
                                        $(".quitLogion").hide();
                                        if (data.code == "6004") {
                                            $.ajax({
                                                url: Api.userPartnerLogin_api,
                                                type: 'POST',
                                                data: {
                                                    siteUsername: data.siteUsername,
                                                    sitecode: data.sitecode,
                                                    password: data.password,
                                                    time: data.time,
                                                    email: data.email,
                                                    fbname: data.fbname,
                                                    language: Login.prototype.config.language,
                                                    gameCode: Login.prototype.config.gameCode,
                                                    packageName: Login.prototype.config.packageName,
                                                    os: Login.prototype.config.os
                                                },
                                                dataType: 'jsonp',
                                                jsonp: 'callback',
                                                success: function success(res) {
                                                    if (res.code == "1400") {

                                                        sessionID = res.sessionID;
                                                        $.ajax({
                                                            type: "POST",
                                                            url: Api.userMobileAuth_api,
                                                            data: {
                                                                sitecode: Login.prototype.config.siteCode,
                                                                type: res.type,
                                                                os: Login.prototype.config.os,
                                                                SessionID_LP: res.sessionID,
                                                                language: Login.prototype.config.language,
                                                                gameCode: Login.prototype.config.gameCode,
                                                                packageName: Login.prototype.config.packageName,
                                                                packageVersion: ""
                                                            },
                                                            dataType: "jsonp",
                                                            success: function success(res) {
                                                                console.log(res);
                                                                var timer = new Date().getTime();
                                                                arrData[chindex].time = timer;
                                                                localStorage.setItem("fbLoginData", JSON.stringify([arrData[chindex]]));
                                                                sendData = JSON.stringify(res);

                                                            }
                                                        });
                                                    } else {
                                                        alert(res.msg);
                                                    }
                                                },
                                                error: function error() {}
                                            });
                                        } else {
                                            alert(data.msg);
                                        }
                                    },
                                    error: function error() {}
                                });
                            }
                        } else if (arrData[chindex].typename === "Player") {
                            if (arrData[chindex].name === username) {
                                $.ajax({
                                    type: "POST",
                                    url: Api.userFastLogin_api,
                                    data: {
                                        isFirst: "no",
                                        id: arrData[chindex].id,
                                        siteCode: arrData[chindex].siteCode,
                                        t: arrData[chindex].t,
                                        ps: arrData[chindex].ps,
                                        imeiNum: generateUUID(),
                                        xuhaoNum: generateUUID(),
                                        language: Login.prototype.config.language,
                                        gameCode: Login.prototype.config.gameCode,
                                        packageName: Login.prototype.config.packageName,
                                        os: Login.prototype.config.os
                                    },
                                    dataType: "jsonp",
                                    beforeSend: function beforeSend(e) {
                                        $(".loading").show();
                                        $(".showad").show();
                                        isClick = false;
                                    },
                                    success: function success(res) {
                                        console.log(res);
                                        $(".loading").show();
                                        $(".showad").show();
                                        afterClick();
                                        if (res.code === "1400") {

                                            sessionID = res.sessionID;
                                            $.ajax({
                                                type: "POST",
                                                url: Api.userMobileAuth_api,
                                                data: {
                                                    sitecode: Login.prototype.config.siteCode,
                                                    type: res.type,
                                                    os: Login.prototype.config.os,
                                                    SessionID_LP: res.sessionID,
                                                    language: Login.prototype.config.language,
                                                    gameCode: Login.prototype.config.gameCode,
                                                    packageName: Login.prototype.config.packageName,
                                                    packageVersion: ""
                                                },
                                                dataType: "jsonp",
                                                beforeSend: function beforeSend(e) {
                                                    $(".loading").show();
                                                    $(".showad").show();
                                                },
                                                success: function success(res) {
                                                    $(".loading").hide();
                                                    $(".showad").hide();
                                                    var timer = new Date().getTime();
                                                    arrData[chindex].time = timer;
                                                    localStorage.setItem("tryLoginData", JSON.stringify([arrData[chindex]]));
                                                    sendData = JSON.stringify(res);

                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    };

                    for (var ch = 0; ch < arrData.length; ch++) {
                        _loop(ch);
                    }
                }
            });

            $(".toRule").click(function () {
                $(".bg").show();
            });
        },
        EventClick: function () {
            $(".login_button_ns").click(function () {

                if (isClick) {
                    Login.prototype._login_mobile();
                }
            });

            $(".retrieve_password_ns").click(function () {

                if (isClick) {
                    Login.prototype._forgetPassWord();
                }
            });

            $(".registered_button_ns").click(function () {

                if (isClick) {
                    Login.prototype._userRegister();
                }
            });

            $(".changePass_button_ns").click(function () {

                if (isClick) {
                    Login.prototype._userChangePassword();
                }
            });

            $(".fb_button_ns").click(function () {

                if (isClick) {
                    Login.prototype._userUpgradeAccount();
                }
            });

            $(".play_button_ns").click(function () {

                if (isClick) {
                    Login.prototype._tryUpgradeAccount();
                }
            });

            $(".handle2").click(function () {

                if (isClick) {
                    Login.prototype._userTryToGame();
                }
            });

            $(".fbLogin").click(function () {
                if (isClick) {
                    isFbLogin = localStorage.getItem("FbLogin");
                    if (isFbLogin === null) {
                        window.location.replace("https://www.facebook.com/v5.0/dialog/oauth?client_id=" + appid + "&redirect_uri=" + redirect_url + "&state=10fc2285672a76a9d2d369c35d252dbf&scope=public_profile");
                    } else if (isFbLogin != null && isFbLogin > 0) {
                        var getFbLoginData = JSON.parse(localStorage.getItem(getfbLoginData_c));
                        Login.prototype._getLogin(getFbLoginData[0].accessToken);
                    }
                }
            });
        },
        _login_mobile: function () {
            var username = $("#login_username_ns").val();
            var password = $("#login_userpassword_ns").val();

            username = formatting.StrTrim(username);
            username = formatting.filterHTML(username);
            password = formatting.StrTrim(password);

            if (formatting.isEmptyString(username)) {
                Check.check_login_username();
                return;
            }
            if (formatting.isEmptyString(password)) {
                Check.check_login_password();
                return;
            }
            if (!formatting.isNumAndChar(username) || username.length < 3 || username.length > 32) {
                Check.check_login_checkaccount();
                return;
            }
            if (password.length < 6 || password.length > 20) {
                Check.check_login_checkapassword();
                return;
            }
            console.log(this.config)
            console.log(Login.prototype.config)

            new Promise((resolve, reject) => {
                $.ajax({
                    url: Api.userLogin_api,
                    type: "POST",
                    data: {
                        username: username,
                        password: password,
                        siteCode: "damoregame",
                        t: "1487665362664",
                        ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                        ismobile: "yes",
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        isClick = false;
                        $(".loading").show();
                        $(".showad").show();
                    },
                    success: function success(res) {
                        afterClick();
                        $(".loading").hide();
                        $(".showad").hide();
                        if (res.code === "1000") {
                            var time = new Date().getTime();
                            ptData = {
                                name: username,
                                password: password,
                                type: "pt",
                                icon: "icon-people",
                                time: time
                            };

                            if (!(Array.isArray(ptLoginData) && ptLoginData.length === 0)) {

                                ptLoginData.forEach(function (item, index) {
                                    ptLoginData.push(ptData);

                                    var obj = {};
                                    ptLoginData = ptLoginData.reduce(function (item, next) {

                                        obj[next.name] ? '' : obj[next.name] = true && item.push(next);
                                        return item;
                                    }, []);
                                    console.log(ptLoginData);
                                });
                            } else {
                                ptLoginData.push(ptData);
                            }

                            localStorage.setItem(getptLoginData_c, JSON.stringify(ptLoginData) || "[]");

                            //成功
                            sessionID = res.sessionID;
                            $.ajax({
                                type: "POST",
                                url: Api.userMobileAuth_api,
                                data: {
                                    sitecode: Login.prototype.config.siteCode,
                                    type: res.type,
                                    os: Login.prototype.config.os,
                                    SessionID_LP: res.sessionID,
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    packageVersion: ""
                                },
                                dataType: "jsonp",
                                beforeSend: function beforeSend(e) {
                                    $(".loading").show();
                                    $(".showad").show();
                                },
                                success: function success(res) {
                                    $(".loading").hide();
                                    $(".showad").hide();
                                    console.log(res);
                                    sendData = JSON.stringify(res);
                                    resolve(sendData)
                                }
                            });
                        } else {
                            reject(res.msg)
                        }
                    }
                });
            })
        },
        _forgetPassWord: function () {
            var username = $("#retrieve_username_ns").val();
            var email = $("#retrieve_email_ns").val();

            username = formatting.StrTrim(username);
            username = formatting.filterHTML(username);

            if (formatting.isEmail(email)) {
                Check.check_login_email();
                return;
            }

            if (username && email) {
                $.ajax({
                    type: "POST",
                    url: Api.getPasswdStep1_api,
                    data: {
                        username: username,
                        email: email,
                        isIPGame: Login.prototype.config.isIPGame,
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName,
                        os: Login.prototype.config.os
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        isClick = false;
                        $(".loading").show();
                        $(".showad").show();
                    },
                    success: function success(res) {
                        $(".loading").hide();
                        $(".showad").hide();
                        afterClick();
                        console.log(res);
                        if (res.code === "1020") {
                            alert(res.msg);
                        } else {
                            alert(res.msg);
                        }
                    }
                });
            } else {
                Check.check_login_username();
            }
        },
        _userRegister: function () {
            var registered_username = $("#registered_username_ns").val();
            var registered_userpassword = $("#registered_userpassword_ns").val();
            var registered_repeatpassword = $("#registered_repeatpassword_ns").val();
            var registered_email = $("#registered_email_ns").val();

            if (registered_username && registered_userpassword && registered_repeatpassword && registered_email) {
                $.ajax({
                    type: "POST",
                    url: Api.userRegister_api,
                    data: {
                        username: registered_username,
                        password: registered_userpassword,
                        repassword: registered_repeatpassword,
                        email: registered_email,
                        os: Login.prototype.config.os,
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        isClick = false;
                        $(".loading").show();
                        $(".showad").show();
                    },
                    success: function success(res) {
                        afterClick();
                        $(".loading").hide();
                        $(".showad").hide();
                        console.log(res);
                        if (res.code === "1100") {
                            var timer = new Date().getTime();
                            ptData = {
                                name: registered_username,
                                password: registered_userpassword,
                                typename: "회원 로그인",
                                type: "pt",
                                icon: "icon-people",
                                time: timer
                            };
                            ptLoginData.push(ptData);
                            localStorage.setItem(getptLoginData_c, JSON.stringify(ptLoginData));

                            $.ajax({
                                type: "POST",
                                url: Api.userMobileAuth_api,
                                data: {
                                    sitecode: Login.prototype.config.siteCode,
                                    type: res.type,
                                    os: Login.prototype.config.os,
                                    SessionID_LP: res.sessionID,
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    packageVersion: ""
                                },
                                dataType: "jsonp",
                                beforeSend: function beforeSend(e) {
                                    $(".showad").show();
                                    $(".loading").show();
                                },
                                success: function success(res) {
                                    $(".showad").hide();
                                    $(".loading").hide();
                                    console.log(res);
                                    sendData = JSON.stringify(res);

                                }
                            });
                        } else {
                            alert(res.msg);
                        }
                    }
                });
            } else {
                Check.check_login_username();
            }
        },
        _userTryToGame: function () {
            isFirstLogin = localStorage.getItem("FirstLogin");

            if (isFirstLogin === null) {
                console.log("--------->翠花");

                $.ajax({
                    type: "POST",
                    url: Api.userFastLogin_api,
                    data: {
                        isFirst: "yes",
                        imeiNum: generateUUID(),
                        xuhaoNum: generateUUID(),
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName,
                        os: Login.prototype.config.os
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        isClick = false;
                        console.log(isClick);
                        $(".loading").show();
                        $(".showad").show();
                    },
                    success: function success(res) {
                        afterClick();
                        $(".loading").hide();
                        $(".showad").hide();
                        console.log(res);

                        if (res.code === "1400") {
                            var tryToGameData = {
                                id: res.id,
                                siteCode: res.siteCode,
                                t: res.t,
                                ps: res.ps
                            };
                            sessionID = res.sessionID;

                            localStorage.setItem("tryToGameData", JSON.stringify(tryToGameData));
                            isFirstLogin = 1;
                            localStorage.setItem("FirstLogin", isFirstLogin);
                            var time = new Date().getTime();
                            trydata = {
                                name: res.id,
                                id: res.id,
                                type: "player",
                                icon: "icon-94",
                                siteCode: res.siteCode,
                                t: res.t,
                                ps: res.ps,
                                typename: "Player",
                                time: time
                            };

                            tryLoginData.push(trydata);
                            localStorage.setItem(gettryLoginData_c, JSON.stringify(tryLoginData) || "[]");

                            $.ajax({
                                type: "POST",
                                url: Api.userMobileAuth_api,
                                data: {
                                    sitecode: Login.prototype.config.sitecode,
                                    type: res.type,
                                    os: Login.prototype.config.os,
                                    SessionID_LP: res.sessionID,
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    packageVersion: ""
                                },
                                dataType: "jsonp",
                                success: function success(res) {
                                    console.log(res);
                                    sendData = JSON.stringify(res);

                                }
                            });
                        }
                    }
                });
            } else if (isFirstLogin != null && isFirstLogin > 0) {
                tryToGameData = JSON.parse(localStorage.getItem("tryToGameData"));
                console.log(tryToGameData);
                $.ajax({
                    type: "POST",
                    url: Api.userFastLogin_api,
                    data: {
                        isFirst: "no",
                        id: tryToGameData.id,
                        siteCode: tryToGameData.siteCode,
                        t: tryToGameData.t,
                        ps: tryToGameData.ps,
                        imeiNum: generateUUID(),
                        xuhaoNum: generateUUID(),
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName,
                        os: Login.prototype.config.os
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        isClick = false;
                        console.log(isClick);
                        $(".loading").show();
                        $(".showad").show();
                    },
                    success: function success(res) {
                        console.log(res);
                        $(".loading").hide();
                        $(".showad").hide();
                        afterClick();
                        console.log(isClick);
                        if (res.code === "1400") {
                            tryToGameData = {
                                id: res.id,
                                siteCode: res.siteCode,
                                t: res.t,
                                ps: res.ps
                            };
                            sessionID = res.sessionID;

                            localStorage.setItem("tryToGameData", JSON.stringify(tryToGameData));
                            $.ajax({
                                type: "POST",
                                url: Api.userMobileAuth_api,
                                data: {
                                    sitecode: Login.prototype.config.sitecode,
                                    type: res.type,
                                    os: Login.prototype.config.os,
                                    SessionID_LP: res.sessionID,
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    packageVersion: ""
                                },
                                dataType: "jsonp",
                                beforeSend: function beforeSend(e) {
                                    $(".loading").show();
                                    $(".showad").show();
                                },
                                success: function success(res) {
                                    $(".loading").hide();
                                    $(".showad").hide();
                                    console.log(res);
                                    sendData = JSON.stringify(res);

                                }
                            });
                        }
                    }
                });
            }
        },
        _userChangePassword: function () {
            var changePass_phone = $("#changePass_phone_ns").val();
            var changePass_userpassword = $("#changePass_userpassword_ns").val();
            var changePass_newpassword = $("#changePass_newpassword_ns").val();
            var changePass_repeatpassword = $("#changePass_repeatpassword_ns").val();

            if (changePass_phone && changePass_userpassword && changePass_newpassword && changePass_repeatpassword) {
                $.ajax({
                    type: "POST",
                    url: Api.userChangePassword_api,
                    data: {
                        password: changePass_userpassword,
                        newpassword: changePass_newpassword,
                        renewpassword: changePass_repeatpassword,
                        username: changePass_phone,
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName,
                        os: Login.prototype.config.os
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        $(".loading").show();
                        $(".showad").show();
                        isClick = false;
                    },
                    success: function success(res) {
                        $(".loading").show();
                        $(".showad").show();
                        afterClick();
                        console.log(res);
                        if (res.code === "1009") {
                            alert(res.msg);
                        } else {
                            alert(res.msg);
                        }
                    }
                });
            } else {
                Check.check_login_username();
            }
        },
        _userUpgradeAccount: function () {
            var fb_phone = $("#fb_username_ns").val();
            var fb_userpassword = $("#fb_userpassword_ns").val();
            var fb_repeatpassword = $("#fb_repeatpassword_ns").val();
            var fb_email = $("#fb_email_ns").val();

            var getfbData = JSON.parse(localStorage.getItem(getfbLoginData_c));

            if (fb_phone && fb_userpassword && fb_repeatpassword && fb_email) {

                $.ajax({
                    url: Api.fbuserLoginForMobile_api,
                    type: 'POST',
                    data: {
                        access_token: getfbData[0].accessToken,
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName,
                        os: Login.prototype.config.os,
                        appid: appid,
                        tag: "website"
                    },
                    dataType: 'jsonp',
                    beforeSend: function beforeSend(e) {
                        isClick = false;
                        $(".loading").show();
                        $(".showad").show();
                    },
                    success: function success(data) {
                        afterClick();
                        $(".loading").hide();
                        $(".showad").hide();
                        if (data.code == "6004") {
                            $.ajax({
                                url: Api.userPartnerLogin_api,
                                type: 'POST',
                                data: {
                                    siteUsername: data.siteUsername,
                                    sitecode: data.sitecode,
                                    password: data.password,
                                    time: data.time,
                                    email: data.email,
                                    fbname: data.fbname,
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    os: Login.prototype.config.os
                                },
                                dataType: 'jsonp',
                                jsonp: 'callback',
                                success: function success(res) {
                                    if (res.code == "1400") {

                                        sessionID = res.sessionID;
                                        $.ajax({
                                            type: "POST",
                                            url: Api.userUpgradeAccount_api,
                                            data: {
                                                username: fb_phone,
                                                password: fb_userpassword,
                                                repassword: fb_repeatpassword,
                                                email: fb_email,
                                                SessionID_LP: sessionID,
                                                language: Login.prototype.config.language,
                                                gameCode: Login.prototype.config.gameCode,
                                                packageName: Login.prototype.config.packageName,
                                                os: Login.prototype.config.os
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
                                                afterClick();
                                                console.log(res);
                                                if (res.code === "1110") {
                                                    $.ajax({
                                                        url: Api.userLogin_api,
                                                        type: "POST",
                                                        data: {
                                                            username: fb_phone,
                                                            password: fb_userpassword,
                                                            siteCode: "damoregame",
                                                            t: "1487665362664",
                                                            ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                                                            ismobile: "yes",
                                                            language: Login.prototype.config.language,
                                                            gameCode: Login.prototype.config.gameCode,
                                                            packageName: Login.prototype.config.packageName
                                                        },
                                                        dataType: "jsonp",
                                                        beforeSend: function beforeSend(e) {
                                                            $(".loading").show();
                                                            $(".showad").show();
                                                        },
                                                        success: function success(res) {
                                                            $(".loading").hide();
                                                            $(".showad").hide();
                                                            if (res.code === "1000") {

                                                                //成功
                                                                sessionID = res.sessionID;
                                                                $.ajax({
                                                                    type: "POST",
                                                                    url: Api.userMobileAuth_api,
                                                                    data: {
                                                                        sitecode: siteCode_str,
                                                                        type: res.type,
                                                                        os: os_str,
                                                                        SessionID_LP: res.sessionID,
                                                                        language: Login.prototype.config.language,
                                                                        gameCode: Login.prototype.config.gameCode,
                                                                        packageName: Login.prototype.config.packageName,
                                                                        packageVersion: ""
                                                                    },
                                                                    dataType: "jsonp",
                                                                    beforeSend: function beforeSend(e) {
                                                                        $(".loading").show();
                                                                        $(".showad").show();
                                                                    },
                                                                    success: function success(res) {
                                                                        $(".loading").hide();
                                                                        $(".showad").hide();
                                                                        console.log(res);
                                                                        sendData = JSON.stringify(res);

                                                                    }
                                                                });
                                                            } else {
                                                                alert(res.msg);
                                                            }
                                                        }
                                                    });
                                                } else {
                                                    alert(res.msg);
                                                }
                                            }
                                        });
                                    } else {
                                        alert(res.msg);
                                    }
                                }
                            });
                        } else {
                            alert(data.msg);
                        }
                    }
                });
            } else {
                Check.check_login_username();
            }
        },
        _tryUpgradeAccount: function () {
            var play_phone = $("#play_username_ns").val();
            var play_userpassword = $("#play_userpassword_ns").val();
            var play_repeatpassword = $("#play_repeatpassword_ns").val();
            var play_email = $("#play_email_ns").val();

            var getGameData = JSON.parse(localStorage.getItem("gameData"));
            var tryToGameData = JSON.parse(localStorage.getItem("tryToGameData"));

            if (play_phone && play_userpassword && play_repeatpassword && play_email) {

                $.ajax({
                    type: "POST",
                    url: Api.userFastLogin_api,
                    data: {
                        isFirst: "no",
                        id: tryToGameData.id,
                        siteCode: tryToGameData.siteCode,
                        t: tryToGameData.t,
                        ps: tryToGameData.ps,
                        imeiNum: generateUUID(),
                        xuhaoNum: generateUUID(),
                        language: Login.prototype.config.language,
                        gameCode: Login.prototype.config.gameCode,
                        packageName: Login.prototype.config.packageName,
                        os: Login.prototype.config.os
                    },
                    dataType: "jsonp",
                    beforeSend: function beforeSend(e) {
                        $(".loading").show();
                        $(".showad").show();
                        isClick = false;
                    },
                    success: function success(res) {
                        console.log(res);
                        $(".loading").hide();
                        $(".showad").hide();
                        afterClick();
                        if (res.code === "1400") {
                            tryToGameData = {
                                id: res.id,
                                siteCode: res.siteCode,
                                t: res.t,
                                ps: res.ps
                            };
                            console.log(tryToGameData);
                            sessionID = res.sessionID;

                            localStorage.setItem("tryToGameData", JSON.stringify(tryToGameData));
                            $.ajax({
                                type: "POST",
                                url: Api.userUpgradeAccount_api,
                                data: {
                                    username: play_phone,
                                    password: play_userpassword,
                                    repassword: play_repeatpassword,
                                    email: play_email,
                                    SessionID_LP: sessionID,
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    os: Login.prototype.config.os
                                },
                                dataType: "jsonp",
                                beforeSend: function beforeSend(e) {
                                    $(".loading").show();
                                    $(".showad").show();
                                },
                                success: function success(data) {
                                    $(".loading").hide();
                                    $(".showad").hide();
                                    console.log(data);
                                    if (data.code === "1110") {
                                        trydata = {
                                            name: play_phone,
                                            type: "player",
                                            icon: "icon-94",
                                            siteCode: res.siteCode,
                                            t: res.t,
                                            ps: res.ps,
                                            id: res.id,
                                            typename: "Player"
                                        };
                                        tryLoginData = [];
                                        tryLoginData.push(trydata);
                                        localStorage.setItem(gettryLoginData_c, JSON.stringify(tryLoginData));

                                        $.ajax({
                                            url: Api.userLogin_api,
                                            type: "POST",
                                            data: {
                                                username: play_phone,
                                                password: play_userpassword,
                                                siteCode: "damoregame",
                                                t: "1487665362664",
                                                ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                                                ismobile: "yes",
                                                language: Login.prototype.config.language,
                                                gameCode: Login.prototype.config.gameCode,
                                                packageName: Login.prototype.config.packageName
                                            },
                                            dataType: "jsonp",
                                            beforeSend: function beforeSend(e) {
                                                $(".loading").show();
                                                $(".showad").show();
                                            },
                                            success: function success(res) {
                                                $(".loading").hide();
                                                $(".showad").hide();
                                                if (res.code === "1000") {

                                                    //成功
                                                    sessionID = res.sessionID;
                                                    $.ajax({
                                                        type: "POST",
                                                        url: Api.userMobileAuth_api,
                                                        data: {
                                                            sitecode: Login.prototype.config.siteCode,
                                                            type: res.type,
                                                            os: Login.prototype.config.os,
                                                            SessionID_LP: res.sessionID,
                                                            language: Login.prototype.config.language,
                                                            gameCode: Login.prototype.config.gameCode,
                                                            packageName: Login.prototype.config.packageName,
                                                            packageVersion: ""
                                                        },
                                                        dataType: "jsonp",
                                                        beforeSend: function beforeSend(e) {
                                                            $(".loading").show();
                                                            $(".showad").show();
                                                        },
                                                        success: function success(res) {
                                                            $(".loading").hide();
                                                            $(".showad").hide();
                                                            console.log(res);
                                                            sendData = JSON.stringify(res);

                                                        }
                                                    });
                                                } else {
                                                    alert(res.msg);
                                                }
                                            }
                                        });
                                    } else {
                                        alert(data.msg);
                                    }
                                }
                            });
                        }
                    }
                });
            } else {
                Check.check_login_username();
            }
        },
        _getMakeLogin: function () {
            $.ajax({
                url: "//gc-fhzwkr.tprsigame.com/baseFacebook/login.do",
                type: "POST",
                data: {
                    fbAppID: appid,
                    redirectUrl: redirect_url,
                    code: ch
                },
                dataType: "jsonp",
                success: function success(res) {
                    console.log(res);
                    accessToken = res.access_token;
                    if (res.code === "1000") {
                        $.ajax({
                            url: "https://graph.facebook.com/v5.0/me?access_token=" + res.access_token + "",
                            type: "GET",
                            data: {},
                            dataType: "json",
                            success: function success(result) {
                                console.log(result);
                                FBID = result.id;
                                FBName = result.name;
                                accessToken = res.access_token;
                                isFbLogin = 1;
                                localStorage.setItem("FbLogin", isFbLogin);
                                if (res.code === "1000") {
                                    Login.prototype._getLogin(accessToken);
                                    var time = new Date().getTime();
                                    fbdata = {
                                        typename: "FackBook",
                                        name: FBName,
                                        accessToken: accessToken,
                                        type: "fb",
                                        time: time,
                                        icon: "icon-Facebook"
                                    };

                                    fbLoginData.push(fbdata);
                                    localStorage.setItem(getfbLoginData_c, JSON.stringify(fbLoginData) || "[]");
                                }
                            }
                        });
                    }
                }
            });
        },
        _getLogin: function (accessToken) {

            $.ajax({
                url: Api.fbuserLoginForMobile_api,
                type: 'POST',
                data: {
                    access_token: accessToken,
                    language: Login.prototype.language,
                    gameCode: Login.prototype.gameCode,
                    packageName: Login.prototype.packageName,
                    os: Login.prototype.os,
                    appid: appid,
                    tag: "website"
                },
                dataType: 'jsonp',
                beforeSend: function beforeSend(e) {
                    isClick = false;
                    $(".loading").show();
                    $(".showad").show();
                },
                success: function success(data) {
                    afterClick();
                    $(".loading").hide();
                    $(".showad").hide();
                    if (data.code == "6004") {
                        $.ajax({
                            url: Api.userPartnerLogin_api,
                            type: 'POST',
                            data: {
                                siteUsername: data.siteUsername,
                                sitecode: data.sitecode,
                                password: data.password,
                                time: data.time,
                                email: data.email,
                                fbname: data.fbname,
                                language: Login.prototype.language,
                                gameCode: Login.prototype.gameCode,
                                packageName: Login.prototype.packageName,
                                os: Login.prototype.os
                            },
                            dataType: 'jsonp',
                            jsonp: 'callback',
                            success: function success(res) {
                                if (res.code == "1400") {

                                    sessionID = res.sessionID;
                                    $.ajax({
                                        type: "POST",
                                        url: Api.userMobileAuth_api,
                                        data: {
                                            sitecode: Login.prototype.siteCode,
                                            type: res.type,
                                            os: Login.prototype.os,
                                            SessionID_LP: res.sessionID,
                                            language: Login.prototype.language,
                                            gameCode: Login.prototype.gameCode,
                                            packageName: Login.prototype.packageName,
                                            packageVersion: ""
                                        },
                                        dataType: "jsonp",
                                        success: function success(res) {
                                            console.log(res);
                                            sendData = JSON.stringify(res);

                                        }
                                    });
                                } else {
                                    alert(res.msg);
                                }
                            },
                            error: function error() {}
                        });
                    } else {
                        alert(data.msg);
                    }
                },
                error: function error() {}
            });
        },
        _automaticLogin: function () {
            var getFbLoginData = JSON.parse(localStorage.getItem("fbLoginData"));
            var getPtLoginData = JSON.parse(localStorage.getItem("ptLoginData"));
            var getTryLoginData = JSON.parse(localStorage.getItem("tryLoginData"));
            var arrData = [].concat(Login.prototype._toConsumableArray(getPtLoginData), Login.prototype._toConsumableArray(getFbLoginData), Login.prototype._toConsumableArray(getTryLoginData));
            arrData.sort(compare("time"));
            if (arrData != undefined && arrData.length > 0) {
                var autoLogin = arrData[arrData.length - 1];
                $(".title_name").text(autoLogin.name);
                $(".quitLogion").show();
                $(".loading").show();
                $(".showad").show();

                console.log(Login.prototype.timer)
                Login.prototype.timer = setTimeout(function () {
                    switch (autoLogin.type) {
                        case "pt":
                            $.ajax({
                                url: Api.userLogin_api,
                                type: "POST",
                                data: {
                                    username: autoLogin.name,
                                    password: autoLogin.password,
                                    siteCode: "damoregame",
                                    t: "1487665362664",
                                    ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                                    ismobile: "yes",
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName
                                },
                                dataType: "jsonp",
                                beforeSend: function beforeSend(e) {
                                    $(".loading").show();
                                    $(".showad").show();
                                },
                                success: function success(res) {
                                    $(".loading").hide();
                                    $(".showad").hide();
                                    $(".quitLogion").hide();
                                    if (res.code === "1000") {
                                        //成功
                                        sessionID = res.sessionID;
                                        $.ajax({
                                            type: "POST",
                                            url: Api.userMobileAuth_api,
                                            data: {
                                                sitecode: Login.prototype.config.siteCode,
                                                type: res.type,
                                                os: Login.prototype.config.os,
                                                SessionID_LP: res.sessionID,
                                                language: Login.prototype.config.language,
                                                gameCode: Login.prototype.config.gameCode,
                                                packageName: Login.prototype.config.packageName,
                                                packageVersion: Login.prototype.config.packageVersion
                                            },
                                            dataType: "jsonp",
                                            success: function success(res) {
                                                $(".quitLogion").hide();
                                                $(".loading").hide();
                                                $(".showad").hide();
                                                sendData = JSON.stringify(res);
                                                console.log(res)
                                                Login.prototype._uploadParams(res)
                                            }
                                        });
                                    } else {
                                        alert(res.msg);
                                    }
                                }
                            });
                            break;
                        case "fb":
                            var getGameData = JSON.parse(localStorage.getItem("gameData"));
                            console.log(getGameData);
                            $.ajax({
                                url: Api.fbuserLoginForMobile_api,
                                type: 'POST',
                                data: {
                                    access_token: autoLogin.accessToken,
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    os: Login.prototype.config.os,
                                    appid: appid,
                                    tag: "website"
                                },
                                dataType: 'jsonp',
                                beforeSend: function beforeSend(e) {
                                    $(".loading").show();
                                    $(".showad").show();
                                },
                                success: function success(data) {
                                    $(".loading").hide();
                                    $(".showad").hide();
                                    $(".quitLogion").hide();
                                    if (data.code == "6004") {
                                        $.ajax({
                                            url: Api.userPartnerLogin_api,
                                            type: 'POST',
                                            data: {
                                                siteUsername: data.siteUsername,
                                                sitecode: data.sitecode,
                                                password: data.password,
                                                time: data.time,
                                                email: data.email,
                                                fbname: data.fbname,
                                                language: Login.prototype.config.language,
                                                gameCode: Login.prototype.config.gameCode,
                                                packageName: Login.prototype.config.packageName,
                                                os: Login.prototype.config.os
                                            },
                                            dataType: 'jsonp',
                                            jsonp: 'callback',
                                            success: function success(res) {
                                                if (res.code == "1400") {

                                                    sessionID = res.sessionID;
                                                    $.ajax({
                                                        type: "POST",
                                                        url: Api.userMobileAuth_api,
                                                        data: {
                                                            sitecode: Login.prototype.config.siteCode,
                                                            type: res.type,
                                                            os: Login.prototype.config.os,
                                                            SessionID_LP: res.sessionID,
                                                            language: Login.prototype.config.language,
                                                            gameCode: Login.prototype.config.gameCode,
                                                            packageName: Login.prototype.config.packageName,
                                                            packageVersion: ""
                                                        },
                                                        dataType: "jsonp",
                                                        success: function success(res) {
                                                            console.log(res);
                                                            sendData = JSON.stringify(res);

                                                        }
                                                    });
                                                } else {
                                                    alert(res.msg);
                                                }
                                            },
                                            error: function error() {}
                                        });
                                    } else {
                                        alert(data.msg);
                                    }
                                },
                                error: function error() {}
                            });
                            break;
                        case "player":
                            $.ajax({
                                type: "POST",
                                url: Api.userFastLogin_api,
                                data: {
                                    isFirst: "no",
                                    id: autoLogin.id,
                                    siteCode: autoLogin.siteCode,
                                    t: autoLogin.t,
                                    ps: autoLogin.ps,
                                    imeiNum: generateUUID(),
                                    xuhaoNum: generateUUID(),
                                    language: Login.prototype.config.language,
                                    gameCode: Login.prototype.config.gameCode,
                                    packageName: Login.prototype.config.packageName,
                                    os: Login.prototype.config.os
                                },
                                dataType: "jsonp",
                                beforeSend: function beforeSend(e) {
                                    $(".loading").show();
                                    $(".showad").show();
                                },
                                success: function success(res) {
                                    console.log(res);
                                    $(".loading").hide();
                                    $(".showad").hide();
                                    $(".quitLogion").hide();

                                    if (res.code === "1400") {

                                        sessionID = res.sessionID;
                                        $.ajax({
                                            type: "POST",
                                            url: Api.userMobileAuth_api,
                                            data: {
                                                sitecode: Login.prototype.config.siteCode,
                                                type: res.type,
                                                os: Login.prototype.config.os,
                                                SessionID_LP: res.sessionID,
                                                language: Login.prototype.config.language,
                                                gameCode: Login.prototype.config.gameCode,
                                                packageName: Login.prototype.config.packageName,
                                                packageVersion: Login.prototype.config.packageVersion
                                            },
                                            dataType: "jsonp",
                                            success: function success(res) {
                                                console.log(res);
                                                sendData = JSON.stringify(res);

                                            }
                                        });
                                    }
                                },
                                error: function error(err) {
                                    console.log(err);
                                }
                            });
                            break;
                    }
                }, 5000);
            }
        },
        _toConsumableArray: function (arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        },
        //将参数抛出
        _uploadParams:function(data){
            return data
        },
        //设置语言  
        userLogin: function (lang) {
            var getLanguage = lang
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
        }
    }
    //冻结操作 
    Object.freeze(Login)
    window.Login = Login;
})(window, document)