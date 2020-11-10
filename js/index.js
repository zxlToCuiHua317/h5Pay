(function (window, document) {
    function Pay(config) {
        Pay.prototype.config = {
            gameCode: null,
            serverCode: null,
            //合作商渠道
            siteCode: null,
            packageName: null,
            language: null,
            mateLanguage: {
                officialPay: "官方平台支付",
                otherPay: "第三方支付",
                account: "帳號",
                point: "餘額",
                insufficientTip: "(你的L点不足，请先充值L点)",
                exchange: "兌換",
                get_Point: "購  買",
                buyPoint: "購買點數",
                username: "用戶名",
                codeNum: "卡號",
                codePass: "卡密",
                codeDes: "請輸入點數卡號",
                codePassDes: "請輸入密碼",
                point_pt: "平台點",
                L_Point: "L點"
            },
            os: null,
            glevel: null,
            param: null,
            itemCode: null,
            passport: null,
            t: null,
            ck: null,
            //网址
            api_URL: {
                payUrl: "ymsnrxwsfs.95vy.com/bsktfw",
                appsmobileUrl: "ymsnrxwsfs.95vy.com/rslfej",
                loginUrl: "ymsnrxwsfs.95vy.com/auvwbz",
                appsUrl: "ymsnrxwsfs.95vy.com/dfoqvk",
                myfbPayInitUrl: "//ymsnrxwsfs.95vy.com/bsktfw/iapFb/initFbinstantPay.do",
                myfbPayCallBackUrl: "//ymsnrxwsfs.95vy.com/bsktfw/iapFb/FbinstantPayFeedBack.do",
            },
            appid: null
        }

        let j;
        let itemList;
        let phoneList;
        let cashFlowItemArray;
        Object.assign(this.config, config)

    };

    Pay.prototype = {
        constructor: Pay,
        init: function () {
            console.log(Pay.prototype.config)
            Pay.prototype.getSessionID_LP()
        },
        createElement: function () {
            var pay = document.createElement("DIV")
            pay.classList.add("main")
            pay.innerHTML = `
            <div class="pay-box">
                <div class="pay-main">
                    <div class="pay-title">
                        <div class="pay-back">
                            <svg t="1574929273942" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7528" width="48" height="48">
                                <path
                                    d="M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z"
                                    fill="#bfbfbf" p-id="7529"></path>
                            </svg>
                        </div>
                        <div class="pay-gameName">
                            <span class="pay-gname"></span>
                            <span class="spay-game"></span>
                        </div>
    
                    </div>
                    <div class="pay-middle">
                        <div class="pay-orderNum">${Pay.prototype.config.mateLanguage.account}: <span class="username"></span> </div>
                        <div class="pay-selfNum">${Pay.prototype.config.mateLanguage.point}: <span class="point"></span></div>
                        <div class="pay-orderContent">
                            <div class="pay-o-info">
                                <div class="pay-o-title">
                                    <a href="#" class="pay-o-title-a"></a>
                                </div>
    
                                <div class="pay-o-center"></div>
                                <div class="pay-o-tip">
                                ${Pay.prototype.config.mateLanguage.insufficientTip}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pay-fotter">
                        <div class="pay-affimBuy">
                            <input type="button" value="${Pay.prototype.config.mateLanguage.get_Point}" class="pay-buy">
                            <input type="button" value="${Pay.prototype.config.mateLanguage.exchange}" class="exchangeBuy">
                        </div>
                    </div>
                </div>
            </div>
            <div class="buyPonit">
                <div class="nav">
                    <div class="nav-back">
                        <svg t="1574929273942" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7528" width="48" height="48">
                            <path
                                d="M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z"
                                fill="#bfbfbf" p-id="7529"></path>
                        </svg>
                    </div>
                    <div class="nav-title">
                        <h3>${Pay.prototype.config.mateLanguage.buyPoint}</h3>
                    </div>
                </div>
                <div class="contant">
                    <div class="contant-title">
                    ${Pay.prototype.config.mateLanguage.username}:<span class="username"></span>
                    </div>
                    <div class="contant-point">
                    ${Pay.prototype.config.mateLanguage.point}:<span class="userPoint"></span>
                    </div>
                </div>
                <div class="selectDit">
                    <ul>
                        
                    </ul>
                </div>
            </div>
            <div class="excPoint">
                <div class="ex-nav">
                    <div class="ex-nav-back">
                        <svg t="1574929273942" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7528" width="48" height="48">
                            <path
                                d="M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z"
                                fill="#bfbfbf" p-id="7529"></path>
                        </svg>
                    </div>
                    <div class="ex-nav-title">
                        <h3>${Pay.prototype.config.mateLanguage.buyPoint}</h3>
                    </div>
                </div>
                <div class="ex-contant">
                    <ul></ul>
                </div>
            </div>
            <div class="excPoint_Sel">
                <div class="Selex-nav">
                    <div class="Selex-nav-back">
                        <svg t="1574929273942" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7528" width="48" height="48">
                            <path
                                d="M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z"
                                fill="#bfbfbf" p-id="7529"></path>
                        </svg>
                    </div>
                    <div class="Selex-nav-title">
                        <h3>${Pay.prototype.config.mateLanguage.buyPoint}</h3>
                    </div>
                </div>
                <div class="Selex-contant">
                    <ul></ul>
                </div>
            </div>
            <div class="load-container">
                <div class="boxLoading"></div>
            </div>
            <div class="showad"></div>
            `
            document.body.appendChild(pay)
            Pay.prototype.handleClick()
        },
        handleClick: function () {
            let that = this
            that.getUserInfo()
            that.getGameInfo()
            that.getCashFlow()

            $(".pay-back").click(function () {
                console.log("cuihua")
                $(".pay-box").hide()
            })
            $(".nav-back").click(function () {
                $(".buyPonit").hide()
                $(".pay-box").show()
            })

            $(".ex-nav-back").click(function () {
                $(".excPoint").hide()
                $(".buyPonit").show()
            })
            $(".Selex-nav-back").click(function () {
                $(".Selex-contant ul").html("")
                $(".excPoint_Sel").hide()
                $(".excPoint").show()
            })

            $(".pay-buy").click(function () {
                if (j) {
                    $(".buyPonit").show()
                    $(".pay-box").hide()
                }

            })

            $(".exchangeBuy").click(function () {
                if (j) {
                    $.ajax({
                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                        type: "POST",
                        data: {
                            passport,
                            gameCode: Pay.prototype.config.gameCode,
                            serverCode: Pay.prototype.config.serverCode,
                            param: Pay.prototype.config.param,
                            siteCode: Pay.prototype.config.siteCode,
                            tag: "website",
                            language: Pay.prototype.config.language,
                            os: Pay.prototype.config.os,
                            packageName: Pay.prototype.config.packageName
                        },
                        dataType: "jsonp",
                        success: function (resl) {
                            if (resl.code === 3) {
                                $.ajax({
                                    type: "POST",
                                    url: "//" + that.config.api_URL.appsUrl + "/pay/chargeToGame.do",
                                    data: {
                                        gameCode: Pay.prototype.config.gameCode,
                                        serverCode: Pay.prototype.config.serverCode,
                                        lpoint,
                                        SessionID_LP: j,
                                        language: Pay.prototype.config.language,
                                        packageName: Pay.prototype.config.packageName,
                                        os: Pay.prototype.config.os,
                                        itemCode: Pay.prototype.config.itemCode,
                                        roleid: Pay.prototype.config.passport
                                    },
                                    dataType: "jsonp",
                                    beforeSend: function (e) {
                                        $(".load-container").show()
                                        $(".showad").show()
                                    },
                                    success: function (result) {
                                        $(".load-container").hide()
                                        $(".showad").hide()

                                        if (result.code === "3000") {
                                            $(".main").remove()
                                        } else {
                                            alert(result.msg)
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            })

            $(".selectDit ul").on("click", "li", function () {
                var index = $(this).index()
                var payname = $(this).attr("class")
                console.log(payname)
                console.log(typeof payname)
                switch (payname) {
                    case "MycardCreditCard_mobile_TW":
                        console.log("11")
                        $.ajax({
                            type: "POST",
                            url: "//appsmobile.95vy.com/dist/mobile_store_cashFlow_items.do",
                            data: {
                                cashFlow: itemList[index].name,
                                gameCode: Pay.prototype.config.gameCode,
                                serverCode: Pay.prototype.config.serverCode,
                                paymentType: payname,
                                payTag: "payGpointAndLpoint",
                                packageName: "",
                                language: Pay.prototype.config.language,
                                os: Pay.prototype.config.os,
                            },
                            dataType: "jsonp",
                            success: function (res) {
                                console.log(res)
                                if (res.code === "003") {
                                    var str = ""
                                    for (let i = 0; i < res.cashFlowItemArray.length; i++) {
                                        let indexs = i
                                        str += `
                                        <li class="PointCard_pay0">
                                            <a href="#">
                                            <div class="b_link">
                                            ${res.cashFlowItemArray[indexs].amount}${res.cashFlowItemArray[indexs].currency}= <span style="color: #0198F8">${res.cashFlowItemArray[indexs].lpoint}${res.cashFlowItemArray[indexs].coinname}
                                            </span></div>
                                            <span class="r_icon"></span>
                                            </a>
                                        </li>
                                        `
                                    }
                                    cashFlowItemArray = res.cashFlowItemArray
                                    $(".ex-contant ul").html(str)
                                    $(".buyPonit").hide()
                                    $(".excPoint").show()
                                }
                            }
                        })
                        break;
                    case "MycardPhone_mobile_TW":
                        $.ajax({
                            type: "POST",
                            url: "//appsmobile.95vy.com/dist/mobile_store_cashFlow_items.do",
                            data: {
                                cashFlow: itemList[index].name,
                                gameCode: Pay.prototype.config.gameCode,
                                serverCode: Pay.prototype.config.serverCode,
                                paymentType: payname,
                                payTag: "payGpointAndLpoint",
                                packageName: "",
                                language: Pay.prototype.config.language,
                                os: Pay.prototype.config.os,
                            },
                            dataType: "jsonp",
                            success: function (res) {
                                console.log(res)
                                if (res.code === "003") {
                                    phoneList = res.payTypeArray
                                    var str = ""
                                    for (let i = 0; i < res.payTypeArray.length; i++) {
                                        let indexs = i
                                        str += `
                                            <li class="Phone_mobile">
                                                <a href="#">
                                                <div class="b_link">
                                                ${res.payTypeArray[indexs].payTypeName}
                                                </span></div>
                                                <span class="r_icon"></span>
                                                </a>
                                            </li>
                                            `
                                    }
                                    cashFlowItemArray = res.cashFlowItemArray
                                    $(".ex-contant ul").html(str)
                                    $(".buyPonit").hide()
                                    $(".excPoint").show()
                                }
                            }
                        })
                        break;
                    case "MycardADSL_mobile_TW":
                        $.ajax({
                            type: "POST",
                            url: "//appsmobile.95vy.com/dist/mobile_store_cashFlow_items.do",
                            data: {
                                cashFlow: itemList[index].name,
                                gameCode: Pay.prototype.config.gameCode,
                                serverCode: Pay.prototype.config.serverCode,
                                paymentType: payname,
                                payTag: "payGpointAndLpoint",
                                packageName: "",
                                language: Pay.prototype.config.language,
                                os: Pay.prototype.config.os,
                            },
                            dataType: "jsonp",
                            success: function (res) {
                                console.log(res)
                                if (res.code === "003") {
                                    var str = ""
                                    for (let i = 0; i < res.cashFlowItemArray.length; i++) {
                                        let indexs = i
                                        str += `
                                            <li class="PointCard_pay0">
                                                <a href="#">
                                                <div class="b_link">
                                                ${res.cashFlowItemArray[indexs].amount}${res.cashFlowItemArray[indexs].currency}= <span style="color: #0198F8">${res.cashFlowItemArray[indexs].lpoint}${res.cashFlowItemArray[indexs].coinname}
                                                </span></div>
                                                <span class="r_icon"></span>
                                                </a>
                                            </li>
                                            `
                                    }
                                    cashFlowItemArray = res.cashFlowItemArray
                                    $(".ex-contant ul").html(str)
                                    $(".buyPonit").hide()
                                    $(".excPoint").show()
                                }
                            }
                        })
                        break;
                    case "Mol":
                        $.ajax({
                            type: "POST",
                            url: "//appsmobile.95vy.com/dist/mobile_store_cashFlow_items.do",
                            data: {
                                cashFlow: itemList[index].name,
                                gameCode: Pay.prototype.config.gameCode,
                                serverCode: Pay.prototype.config.serverCode,
                                paymentType: "Mol",
                                payTag: "",
                                packageName: "",
                                language: Pay.prototype.config.language,
                                os: Pay.prototype.config.os,
                            },
                            dataType: "jsonp",
                            success: function (res) {
                                console.log(res)
                                if (res.code === "003") {
                                    var str = ""
                                    for (let i = 0; i < res.cashFlowItemArray.length; i++) {
                                        let indexs = i
                                        str += `
                                            <li class="Mol">
                                                <a href="#">
                                                <div class="b_link">
                                                ${res.cashFlowItemArray[indexs].amount}${res.cashFlowItemArray[indexs].currency}= <span style="color: #0198F8">${res.cashFlowItemArray[indexs].lpoint}${res.cashFlowItemArray[indexs].coinname}
                                                </span></div>
                                                <span class="r_icon"></span>
                                                </a>
                                            </li>
                                            `
                                    }
                                    cashFlowItemArray = res.cashFlowItemArray
                                    $(".ex-contant ul").html(str)
                                    $(".buyPonit").hide()
                                    $(".excPoint").show()
                                }
                            }
                        })
                        break;
                    case "Mol_pin":
                        var a = $(
                            `<a href='https://pay.95vy.com/mol/initMolPin.do?passport=${Pay.prototype.config.passport}&siteCode=${Pay.prototype.config.siteCode}&gameCode=${Pay.prototype.config.gameCode}&serverCode=${Pay.prototype.config.serverCode}&device_information=7107f089ef707cd,HM NOTE 1S,WIFI,4.4.4,android&payTag=payGpointAndLpoint&payGameLpoint=0&packageName=&language=${Pay.prototype.language}&os=${Pay.prototype.os}' target='_blank'></a>`
                        ).get(0);

                        var e = document.createEvent('MouseEvents');
                        e.initEvent('click', true, true);
                        a.dispatchEvent(e);
                        break;
                    default:
                        $.ajax({
                            type: "POST",
                            url: "//appsmobile.95vy.com/dist/mobile_store_cashFlow_items.do",
                            data: {
                                cashFlow: itemList[index].name,
                                gameCode: Pay.prototype.config.gameCode,
                                serverCode: Pay.prototype.config.serverCode,
                                payTag: "payGpointAndLpoint",
                                packageName: "",
                                language: Pay.prototype.config.language,
                                os: Pay.prototype.config.os,
                            },
                            dataType: "jsonp",
                            success: function (res) {
                                console.log(res)
                                if (res.code === "003") {
                                    var str = ""
                                    for (let i = 0; i < res.cashFlowItemArray.length; i++) {
                                        let indexs = i
                                        str += `
                                            <li class="PointCard_pay0">
                                                <a href="#">
                                                <div class="b_link">
                                                ${res.cashFlowItemArray[indexs].amount}${res.cashFlowItemArray[indexs].currency}= <span style="color: #0198F8">${res.cashFlowItemArray[indexs].lpoint}${res.cashFlowItemArray[indexs].coinname}
                                                </span></div>
                                                <span class="r_icon"></span>
                                                </a>
                                            </li>
                                            `
                                    }
                                    cashFlowItemArray = res.cashFlowItemArray
                                    $(".ex-contant ul").html(str)
                                    $(".buyPonit").hide()
                                    $(".excPoint").show()
                                }
                            }
                        })
                        break;
                }
            })

            $(".ex-contant ul").on("click", "li", function () {
                var index = $(this).index()
                var phoneName = $(this).attr("class")
                if (phoneName === "Phone_mobile") {
                    $.ajax({
                        type: "POST",
                        url: "//appsmobile.95vy.com/dist/mobile_store_cashFlow_items.do",
                        data: {
                            cashFlow: "MycardPhone_mobile_TW",
                            gameCode: Pay.prototype.config.gameCode,
                            serverCode: Pay.prototype.config.serverCode,
                            paymentType: phoneList[index].PaymentType,
                            payTag: "payGpointAndLpoint",
                            packageName: "",
                            language: Pay.prototype.config.language,
                            os: Pay.prototype.config.os,
                        },
                        dataType: "jsonp",
                        success: function (res) {
                            console.log(res)
                            if (res.code === "003") {
                                var str = ""
                                for (let i = 0; i < res.cashFlowItemArray.length; i++) {
                                    let indexs = i
                                    str += `
                                        <li class="PointCard_pay0">
                                            <a href="#">
                                            <div class="b_link">
                                            ${res.cashFlowItemArray[indexs].amount}${res.cashFlowItemArray[indexs].currency}= <span style="color: #0198F8">${res.cashFlowItemArray[indexs].lpoint}${res.cashFlowItemArray[indexs].coinname}
                                            </span></div>
                                            <span class="r_icon"></span>
                                            </a>
                                        </li>
                                        `
                                }
                                cashFlowItemArray = res.cashFlowItemArray
                                $(".Selex-contant ul").html(str)
                                $(".excPoint").hide()
                                $(".excPoint_Sel").show()
                            }
                        }
                    })
                } else if (phoneName === "Mol") {
                    var a = $(
                        `<a href='https://pay.95vy.com/mol/initMol.do?passport=${Pay.prototype.config.passport}&lpoint=${cashFlowItemArray[index].lpoint}&siteCode=${Pay.prototype.config.siteCode}&gameCode=${Pay.prototype.config.gameCode}&serverCode=${Pay.prototype.config.serverCode}&device_information=7107f089ef707cd,HM NOTE 1S,WIFI,4.4.4,android&payTag=payGpointAndLpoint&payGameLpoint=0&packageName=&language=${Pay.prototype.config.language}&os=${Pay.prototype.config.os}' target='_blank'></a>`
                    ).get(0);

                    var e = document.createEvent('MouseEvents');
                    e.initEvent('click', true, true);
                    a.dispatchEvent(e);
                } else {
                    console.log(cashFlowItemArray)
                    $.ajax({
                        type: "POST",
                        url: "//pay.95vy.com/iapMc/mycardConvertMobile.do",
                        data: {
                            lpoint: cashFlowItemArray[index].amount,
                            siteCode: Pay.prototype.config.sitecode,
                            passport,
                            gameCode: Pay.prototype.config.gameCode,
                            language: Pay.prototype.config.language,
                            os: Pay.prototype.config.os,
                            packageName: "com.cuihua",
                            currency: cashFlowItemArray[index].currency
                        },
                        dataType: "jsonp",
                        success: function (res) {
                            console.log(res)
                            if (res.code === "004") {
                                $.ajax({
                                    type: "POST",
                                    url: "//pay.95vy.com/iapMc/getMycardAuthCode.do",
                                    data: {
                                        lpoint: res.lpoint,
                                        siteCode: res.siteCode,
                                        passport: res.passport,
                                        t: res.t,
                                        ck: res.ck,
                                        paymentType: cashFlowItemArray[index].PaymentType,
                                        itemCode: cashFlowItemArray[index].ItemCode,
                                        payType: "paytolpoint",
                                        serverCode: Pay.prototype.config.serverCode,
                                        payGameLpoint: 0,
                                        gameCode: Pay.prototype.config.gameCode,
                                        language: Pay.prototype.config.language,
                                        os: Pay.prototype.config.os,
                                        packageName: "",
                                        isWeb: "2",
                                        currency: cashFlowItemArray[index].currency
                                    },
                                    dataType: "jsonp",
                                    success: function (data) {
                                        console.log(data)
                                        if (data.code === "011") {
                                            var a = $(
                                                `<a href='${data.url}' target='_blank'></a>`
                                            ).get(0);

                                            var e = document.createEvent('MouseEvents');
                                            e.initEvent('click', true, true);
                                            a.dispatchEvent(e);
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            })

            $(".Selex-contant ul").on("click", "li", function () {
                var index = $(this).index()
                console.log(cashFlowItemArray)
                $.ajax({
                    type: "POST",
                    url: "//pay.95vy.com/iapMc/mycardConvertMobile.do",
                    data: {
                        lpoint: cashFlowItemArray[index].amount,
                        siteCode: Pay.prototype.config.sitecode,
                        passport,
                        gameCode: Pay.prototype.config.gameCode,
                        language: Pay.prototype.config.language,
                        os: Pay.prototype.config.os,
                        packageName: "com.cuihua",
                        currency: cashFlowItemArray[index].currency
                    },
                    dataType: "jsonp",
                    success: function (res) {
                        console.log(res)
                        if (res.code === "004") {
                            $.ajax({
                                type: "POST",
                                url: "//pay.95vy.com/iapMc/getMycardAuthCode.do",
                                data: {
                                    lpoint: res.lpoint,
                                    siteCode: res.siteCode,
                                    passport: res.passport,
                                    t: res.t,
                                    ck: res.ck,
                                    paymentType: cashFlowItemArray[index].PaymentType,
                                    itemCode: cashFlowItemArray[index].ItemCode,
                                    payType: "paytolpoint",
                                    serverCode: Pay.prototype.config.serverCode,
                                    payGameLpoint: 0,
                                    gameCode: Pay.prototype.config.gameCode,
                                    language: Pay.prototype.config.language,
                                    os: Pay.prototype.config.os,
                                    packageName: "",
                                    isWeb: "2",
                                    currency: cashFlowItemArray[index].currency
                                },
                                dataType: "jsonp",
                                success: function (data) {
                                    console.log(data)
                                    if (data.code === "011") {
                                        var a = $(
                                            `<a href='${data.url}' target='_blank'></a>`
                                        ).get(0);

                                        var e = document.createEvent('MouseEvents');
                                        e.initEvent('click', true, true);
                                        a.dispatchEvent(e);
                                    }
                                }
                            })
                        }
                    }
                })
            })

        },

        openElse: function () {
            $.ajax({
                url: "//" + this.config.api_URL.appsmobileUrl + "/dist/openElseFB.do?",
                type: "POST",
                data: {
                    gameCode: this.config.gameCode,
                    packageName: this.config.packageName,
                    language: this.config.language,
                    os: this.config.os,
                    glevel: this.config.glevel
                },
                dataType: "jsonp",
                success: function (res) {
                    if (res.code === "1") {
                        Pay.prototype.createElement()
                    } else if (res.code === "0") {
                        Pay.prototype.createElement()
                    }
                }
            })
        },
        getGameInfo: function () {
            $.ajax({
                url: "//" + this.config.api_URL.appsmobileUrl + "/dist/mobile_store_getgameInfo_public.do?",
                type: "POST",
                data: {
                    gameCode: this.config.gameCode,
                    serverCode: this.config.serverCode,
                    packageName: this.config.packageName,
                    language: this.config.language,
                    os: this.config.os
                },
                dataType: "jsonp",
                success: function (res) {
                    if (res.code === "1") {
                        $(".pay-gname").text(res.gameName)
                        $(".spay-game").text("(" + res.serverName + ")")
                    } else {
                        alert(res.msg)
                    }
                }
            })
        },
        getUserInfo: function () {
            let that = this
            $.ajax({
                url: "//" + that.config.api_URL.loginUrl + "/login/getUserInfo.do?",
                type: "POST",
                data: {
                    SessionID_LP: j,
                    language: that.config.language,
                    gameCode: that.config.gameCode,
                    packageName: that.config.packageName,
                    os: that.config.os
                },
                dataType: "jsonp",
                success: function (res) {
                    if (res.code === "1000") {
                        LpointValue = (res.user.totalpoint - res.user.usepoint)
                        passport = res.user.passport
                        $(".username").text(res.user.username)
                        $(".point").text(LpointValue)
                        $(".userPoint").text(LpointValue)

                        //獲取兌換遊戲幣品項類表
                        $.ajax({
                            url: "//" + that.config.api_URL.appsmobileUrl + "/dist/getPayItemByFbInstantGame.do?",
                            type: "POST",
                            data: {
                                gameCode: that.config.gameCode,
                                itemCode: that.config.itemCode,
                                LpointValue,
                                packageName: that.config.packageName,
                                language: that.config.language,
                                os: that.config.os
                            },
                            dataType: "jsonp",
                            success: function (result) {
                                if (result.code === "003") {

                                    $(".pay-o-info").text(decodeURI(result.itemCont.replace(
                                        /\s+|\+|/g, "")))
                                    lpoint = result.lpoint
                                    if (LpointValue - lpoint < 0) {
                                        $(".exchangeBuy").hide()
                                        $(".pay-buy").show()
                                    } else {
                                        $(".exchangeBuy").show()
                                        $(".pay-buy").hide()
                                    }
                                }
                            }
                        })
                    } else {
                        alert(res.msg)
                    }
                }
            })
        },
        //获取渠道列表
        getCashFlow: function () {
            $.ajax({
                type: "POST",
                url: "//appsmobile.95vy.com/dist/mobile_store_cashFlow.do",
                data: {
                    gameCode: "NRXWS",
                    serverCode: "nrxws1",
                    language: "TW"
                },
                dataType: "jsonp",
                success: function (res) {
                    console.log(res)
                    url = [
                        "//awscdnnrxwsone.95vy.com/myfbinstantConfig/images/lp_mycardmerber.png",
                        "//awscdnnrxwsone.95vy.com/myfbinstantConfig/images/lp_mycard.png",
                        "//awscdnnrxwsone.95vy.com/myfbinstantConfig/images/lp_mycard_asdl.png",
                        "//awscdnnrxwsone.95vy.com/myfbinstantConfig/images/lp_mycardcreditcard.png",
                        "//awscdnnrxwsone.95vy.com/myfbinstantConfig/images/lp_mycardnew.png",
                        "//awscdnnrxwsone.95vy.com/myfbinstantConfig/images/lp_mol.png",
                        "//awscdnnrxwsone.95vy.com/myfbinstantConfig/images/lp_mol_pin.jpg"
                    ]
                    if (res.code === "003") {
                        var str = ""
                        for (let i = 0; i < res.cashFlow.length; i++) {
                            let index = i
                            str +=
                                `
                            <li class="${res.cashFlow[index].name}">
                                <div class="pay-icon">
                                <img src="${url[index]}" alt="">
                                </div>
                                <div class="pay-text">${res.cashFlow[index].msg}</div>
                            </li>
                            `
                        }
                        itemList = res.cashFlow

                        $(".selectDit ul").html(str)
                    } else {
                        alert(res.msg)
                    }
                }
            })
        },
        //获取SessionID_LP
        getSessionID_LP: function () {
            $.ajax({
                url: "//" + this.config.api_URL.loginUrl + "/login/userPassportLogin.do?",
                type: "POST",
                data: {
                    passport: this.config.passport,
                    sitecode: this.config.siteCode,
                    t: this.config.t,
                    ck: this.config.ck,
                    language: this.config.language,
                    gameCode: this.config.gameCode,
                    packageName: this.config.packageName,
                    os: this.config.os
                },
                dataType: "jsonp",
                success: function (res) {
                    console.log(res)
                    if (res.code === "1000") {
                        j = res.sessionID
                        Pay.prototype.createElement()
                    }
                }
            })
        }
    }
    Object.freeze(Pay)
    window.Pay = Pay;
})(window, document)