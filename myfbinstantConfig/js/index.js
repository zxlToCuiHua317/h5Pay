(function (window, document) {
    function Pay(config) {
        Pay.prototype.config = {
            gameCode: null,
            serverCode: null,
            //合作商渠道
            siteCode: null,
            packageName: null,
            language: null,
            mateLanguage: null,
            os: null,
            glevel: null,
            param: null,
            itemCode: null,
            passport: null,
            t: null,
            ck: null,
            //官方支付事件
            handleCallBakc: null,
            //网址
            api_URL: null,
            appid:null
        }

        let j;
        Object.assign(this.config, config)
        this.getSessionID_LP()
    };

    Pay.prototype = {
        constructor: Pay,
        init: function () {
            this.createElement()
        },
        createElement: function () {
            var pay = document.createElement("DIV")
            pay.classList.add("main")
            pay.innerHTML = `
            <div class="pay-box">
                <div class="nav-main">
                    <div class="title">
                        <div class="back">
                            <svg t="1574929273942" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7528" width="48" height="48">
                                <path
                                    d="M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z"
                                    fill="#bfbfbf" p-id="7529"></path>
                            </svg>
                        </div>
                        <div class="gameName">
                            <span class="gname"></span><span class="sgame"></span>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="appPay" onClick="${this.config.handleCallBakc}('${this.config.itemCode}')";">${this.config.mateLanguage.TW_Language.officialPay}</div>
                        <div class="otherPay">${this.config.mateLanguage.TW_Language.otherPay}</div>
                    </div>
                    <div class="fotter">
                        <div class="affimBuy">
                            <input type="button" value="confirm" class="buy">
                        </div>
                    </div>
                </div>
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
                        <div class="pay-orderNum">${this.config.mateLanguage.TW_Language.account}: <span class="username"></span> </div>
                        <div class="pay-selfNum">${this.config.mateLanguage.TW_Language.point}: <span class="point"></span></div>
                        <div class="pay-orderContent">
                            <div class="pay-o-info">
                                <div class="pay-o-title">
                                    <a href="#" class="pay-o-title-a"></a>
                                </div>
    
                                <div class="pay-o-center"></div>
                                <div class="pay-o-tip">
                                ${this.config.mateLanguage.TW_Language.insufficientTip}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pay-fotter">
                        <div class="pay-affimBuy">
                            <input type="button" value="${this.config.mateLanguage.TW_Language.exchange}" class="pay-buy">
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
                        <h3>${this.config.mateLanguage.TW_Language.buyPoint}</h3>
                    </div>
                </div>
                <div class="contant">
                    <div class="contant-title">
                    ${this.config.mateLanguage.TW_Language.username}:<span class="username"></span>
                    </div>
                    <div class="contant-point">
                    ${this.config.mateLanguage.TW_Language.point}:<span class="userPoint"></span>
                    </div>
                </div>
                <div class="selectDit">
                    <ul>
                        <li class="s1"></li>
                        <li class="s2"></li>
                        <li class="s3"></li>
                        <li class="s4"></li>
                        <li class="s5"></li>
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
                        <h3>${this.config.mateLanguage.TW_Language.buyPoint}</h3>
                    </div>
                </div>
                <div class="ex-contant">
    
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
                        <h3>${this.config.mateLanguage.TW_Language.buyPoint}</h3>
                    </div>
                </div>
                <div class="Selex-contant">
    
                </div>
            </div>
            <div class="load-container">
                <div class="boxLoading"></div>
            </div>
            <div class="showad"></div>
            `
            document.body.appendChild(pay)[2]
            this.handleClick()
        },
        handleClick: function () {
            let a = payConfig.PointCard()
            let b = payConfig.MyCard()
            let bank = payConfig.bankDitch()
            let phone = payConfig.phoneDitch();
            let creditCard = payConfig.creditCardDitch()

            let that = this

            $(".otherPay").click(function () {
                $(".pay-main").show()
                $(".nav-main").hide()
                that.getUserInfo()
                that.getGameInfo()
            })


            $(".pay-back").click(function () {
                $(".pay-main").hide()
                $(".nav-main").show()
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

            for (let i = 1; i <= 5; i++) {
                let index = i;
                $(`.s${index}`).click(function () {
                    let payUl_item = document.createElement("ul")
                    let ga_item = document.createElement("ul")
                    let point_Div = document.createElement("DIV")

                    switch (index) {
                        case 1:
                            // point_Div.innerHTML += `
                            //     <div class="point_code">
                            //         <span>${that.config.mateLanguage.TW_Language.codeNum}:</span> <input type="text" id="inpCode" placeholder="${that.config.mateLanguage.TW_Language.codeDes}">
                            //     </div>
                            //     <div class="point_pass">
                            //         <span>${that.config.mateLanguage.TW_Language.codePass}:</span> <input type="password" name="" id="inpPass" placeholder="${that.config.mateLanguage.TW_Language.codePassDes}">
                            //         <span class="icon_open iconfont icon-yanjing"></span>
                            //         <span class="close iconfont icon-biyan"></span>
                            //     </div>
                            //     <div class="coinPay">
                            //         <input type="button" value="${that.config.mateLanguage.TW_Language.exchange}" id="coinBtn">
                            //     </div>
                            // `
                            for (let s = 0; s < a.ItemList.length; s++) {
                                let indexs = s
                                payUl_item.innerHTML += `
                                <li class="PointCard_pay${indexs}">
                                    <a href="#">
                                        <div class="b_link">
                                            ${a.ItemList[indexs].Amount}${a.ItemList[indexs].Currency}= <span style="color: #0198F8">${a.ItemList[indexs].Amount}L點
                                        </div>
                                        <span class="r_icon"></span>
                                    </a>
                                </li>
                        `
                            }
                            break;
                        case 2:
                            for (let d = 0; d < b.ItemList.length; d++) {
                                let indexss = d
                                payUl_item.innerHTML += 
                                `<li class="MyCard_pay${indexss}">
                                    <a href="#">
                                        <div class="b_link">
                                            ${b.ItemList[indexss].Amount}${b.ItemList[indexss].Currency}= <span style="color: #0198F8">${b.ItemList[indexss].Amount}${that.config.mateLanguage.TW_Language.L_Point}
                                        </div>
                                        <span class="r_icon"></span>
                                    </a>
                                </li>
                                `
                            }
                            break;
                        case 3:
                            for (let b = 0; b < bank.length; b++) {
                                let bindex = b
                                payUl_item.innerHTML += `
                                <li class="Bank_pay${bindex} ${bank[bindex].PaymentType}">
                                    <a href="#">
                                        <div class="b_link">
                                            ${bank[bindex].PaymentTypeDesc}
                                        </div>
                                        <span class="r_icon"></span>
                                    </a>
                                </li>
                                `
                            }
                            break;
                        case 4:
                            for (let p = 0; p < phone.length; p++) {
                                let pindex = p
                                payUl_item.innerHTML += `
                                <li class="phone_pay${pindex} ${phone[pindex].PaymentType}">
                                    <a href="#">
                                        <div class="b_link">
                                            ${phone[pindex].PaymentTypeDesc}
                                        </div>
                                        <span class="r_icon"></span>
                                    </a>
                                </li>
                                `
                            }
                            break;
                        case 5:
                            for (let cr = 0; cr < creditCard.length; cr++) {
                                let crindex = cr
                                payUl_item.innerHTML += `
                                <li class="creditCard_pay${crindex} ${creditCard[crindex].PaymentType}">
                                    <a href="#">
                                        <div class="b_link">
                                            ${creditCard[crindex].PaymentTypeDesc}
                                        </div>
                                        <span class="r_icon"></span>
                                    </a>
                                </li>`
                            }
                            break;
                    }

                    $(".ex-contant").html(payUl_item)
                    $(".excPoint").show()
                    $(".buyPonit").hide()

                    for (let z = 0; z < bank.length; z++) {
                        let zindex = z;
                        $(`.Bank_pay${zindex}`).click(function () {
                            let itemList = bank[zindex].ItemList
                            for (let x = 0; x < itemList.length; x++) {
                                let xindex = x;
                                ga_item.innerHTML += `<li class="Bank_ga${xindex}">
                                                    <a href="#">
                                                <div class="b_link">
                                                    ${itemList[xindex].Amount}${itemList[xindex].Currency}= <span style="color: #0198F8">${itemList[xindex].Amount}${that.config.mateLanguage.TW_Language.point_pt}
                                                 </div>
                                            <span class="r_icon"></span>
                                        </a>
                                    </li>`
                            }
                            $(".Selex-contant").html(ga_item)
                            $(".excPoint_Sel").show()
                            $(".excPoint").hide()

                            for (let bn = 0; bn < itemList.length; bn++) {
                                let bnindex = bn;
                                $(`.Bank_ga${bnindex}`).click(function () {
                                    $.ajax({
                                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                        type: "POST",
                                        data: {
                                            passport,
                                            gameCode: that.config.gameCode,
                                            serverCode: that.config.serverCode,
                                            param: that.config.param,
                                            siteCode: that.config.siteCode,
                                            tag: "website",
                                            language: that.config.language,
                                            os: that.config.os,
                                            packageName: that.config.packageName
                                        },
                                        dataType: "jsonp",
                                        success: function (resl) {
                                            console.log(resl)
                                            if (resl.code === 3) {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "//" + that.config.api_URL.payUrl + "/iapMc/mycardConvertMobile.do?",
                                                    data: {
                                                        amount: itemList[bnindex].Amount,
                                                        siteCode: that.config.siteCode,
                                                        passport,
                                                        gameCode: that.config.gameCode,
                                                        language: that.config.language,
                                                        os: that.config.os,
                                                        packageName: that.config.packageName,
                                                        currency: itemList[bnindex].Currency
                                                    },
                                                    dataType: "jsonp",
                                                    success: function (data) {
                                                        console.log(data)
                                                        if (data.code === "004") {
                                                            $.ajax({
                                                                type: "POST",
                                                                url: "//" + that.config.api_URL.payUrl + "/iapMc/getMycardAuthCode.do?",
                                                                data: {
                                                                    amount: data.amount,
                                                                    siteCode: data.siteCode,
                                                                    passport: data.passport,
                                                                    t: data.t,
                                                                    ck: data.ck,
                                                                    paymentType: bank[bnindex]
                                                                        .PaymentType,
                                                                    itemCode: itemList[bnindex]
                                                                        .ItemCode,
                                                                    packageName: that.config.packageName,
                                                                    payType: "paytolpoint",
                                                                    gameCode: that.config.gameCode,
                                                                    serverCode: that.config.serverCode,
                                                                    payGameLpoint: 0,
                                                                    language: that.config.language,
                                                                    os: that.config.os,
                                                                    isWeb: 2,
                                                                    currency: itemList[bnindex]
                                                                        .Currency
                                                                },
                                                                dataType: "json",
                                                                success: function (res) {
                                                                    console.log(res)
                                                                    if (res.code ===
                                                                        "011") {
                                                                        window.open(res.url)
                                                                    } else {
                                                                        alert(res.msg)
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })

                                })
                            }
                        })
                    }

                    for (let h = 0; h < phone.length; h++) {
                        let hindex = h;
                        $(`.phone_pay${hindex}`).click(function () {
                            let itemList = phone[hindex].ItemList
                            for (let ch = 0; ch < itemList.length; ch++) {
                                let chindex = ch;
                                ga_item.innerHTML += `<li class="phone_ga${chindex}">
                                                    <a href="#">
                                                <div class="b_link">
                                                    ${itemList[chindex].Amount}${itemList[chindex].Currency}= <span style="color: #0198F8">${itemList[chindex].Amount}${that.config.mateLanguage.TW_Language.point_pt}
                                                 </div>
                                            <span class="r_icon"></span>
                                        </a>
                                    </li>`
                            }
                            $(".Selex-contant").html(ga_item)
                            $(".excPoint_Sel").show()
                            $(".excPoint").hide()

                            for (let ph = 0; ph < itemList.length; ph++) {
                                let phindex = ph;
                                $(`.phone_ga${phindex}`).click(function () {
                                    $.ajax({
                                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                        type: "POST",
                                        data: {
                                            passport,
                                            gameCode: that.config.gameCode,
                                            serverCode: that.config.serverCode,
                                            param: that.config.param,
                                            siteCode: that.config.siteCode,
                                            tag: "website",
                                            language: that.config.language,
                                            os: that.config.os,
                                            packageName: that.config.packageName
                                        },
                                        dataType: "jsonp",
                                        success: function (resl) {
                                            console.log(resl)
                                            if (resl.code === 3) {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "//" + that.config.api_URL.payUrl + "/iapMc/mycardConvertMobile.do?",
                                                    data: {
                                                        amount: itemList[phindex].Amount,
                                                        siteCode: that.config.siteCode,
                                                        passport,
                                                        gameCode: that.config.gameCode,
                                                        language: that.config.language,
                                                        os: that.config.os,
                                                        packageName: that.config.packageName,
                                                        currency: itemList[phindex].Currency
                                                    },
                                                    dataType: "jsonp",
                                                    success: function (data) {
                                                        console.log(data)
                                                        if (data.code === "004") {
                                                            $.ajax({
                                                                type: "POST",
                                                                url: "//" + that.config.api_URL.payUrl + "/iapMc/getMycardAuthCode.do?",
                                                                data: {
                                                                    amount: data.amount,
                                                                    siteCode: data.siteCode,
                                                                    passport: data.passport,
                                                                    t: data.t,
                                                                    ck: data.ck,
                                                                    paymentType: phone[phindex]
                                                                        .PaymentType,
                                                                    itemCode: itemList[phindex]
                                                                        .ItemCode,
                                                                    packageName: that.config.packageName,
                                                                    payType: "paytolpoint",
                                                                    gameCode: that.config.gameCode,
                                                                    serverCode: that.config.serverCode,
                                                                    payGameLpoint: 0,
                                                                    language: that.config.language,
                                                                    os: that.config.os,
                                                                    isWeb: 2,
                                                                    currency: itemList[phindex]
                                                                        .Currency
                                                                },
                                                                dataType: "jsonp",
                                                                success: function (res) {
                                                                    console.log(res)
                                                                    if (res.code ===
                                                                        "011") {
                                                                        window.location
                                                                            .href = res.url
                                                                    } else {
                                                                        alert(res.msg)
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })
                                })
                            }
                        })
                    }

                    for (let l = 0; l < creditCard.length; l++) {
                        let lindex = l;
                        $(`.creditCard_pay${lindex}`).click(function () {
                            let itemLists = creditCard[lindex].ItemList
                            for (let ll = 0; ll < itemLists.length; ll++) {
                                let llindex = ll;
                                ga_item.innerHTML += `<li class="creditCard_ga${llindex}">
                                                    <a href="#">
                                                <div class="b_link">
                                                    ${itemLists[llindex].Amount}${itemLists[llindex].Currency}= <span style="color: #0198F8">${itemLists[llindex].Amount}${that.config.mateLanguage.TW_Language.point_pt}
                                                 </div>
                                            <span class="r_icon"></span>
                                        </a>
                                    </li>`
                            }
                            $(".Selex-contant").html(ga_item)
                            $(".excPoint_Sel").show()
                            $(".excPoint").hide()

                            for (let cc = 0; cc < itemLists.length; cc++) {
                                let ccindex = cc;
                                $(`.creditCard_ga${ccindex}`).click(function () {
                                    $.ajax({
                                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                        type: "POST",
                                        data: {
                                            passport,
                                            gameCode: that.config.gameCode,
                                            serverCode: that.config.serverCode,
                                            param: that.config.param,
                                            siteCode: that.config.siteCode,
                                            tag: "website",
                                            language: that.config.language,
                                            os: that.config.os,
                                            packageName: that.config.packageName
                                        },
                                        dataType: "jsonp",
                                        success: function (resl) {
                                            console.log(resl)
                                            if (resl.code === 3) {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "//" + that.config.api_URL.payUrl + "/iapMc/mycardConvertMobile.do?",
                                                    data: {
                                                        amount: itemLists[ccindex].Amount,
                                                        siteCode: that.config.siteCode,
                                                        passport,
                                                        gameCode: that.config.gameCode,
                                                        language: that.config.language,
                                                        os: that.config.os,
                                                        packageName: that.config.packageName,
                                                        currency: itemLists[ccindex].Currency
                                                    },
                                                    dataType: "jsonp",
                                                    success: function (data) {
                                                        console.log(data)
                                                        if (data.code === "004") {
                                                            $.ajax({
                                                                type: "POST",
                                                                url: "//" + that.config.api_URL.payUrl + "/iapMc/getMycardAuthCode.do?",
                                                                data: {
                                                                    amount: data.amount,
                                                                    siteCode: data.siteCode,
                                                                    passport: data.passport,
                                                                    t: data.t,
                                                                    ck: data.ck,
                                                                    paymentType: itemLists[ccindex].PaymentType,
                                                                    itemCode: itemLists[ccindex]
                                                                        .ItemCode,
                                                                    packageName: that.config.packageName,
                                                                    payType: "paytolpoint",
                                                                    gameCode: that.config.gameCode,
                                                                    serverCode: that.config.serverCode,
                                                                    payGameLpoint: 0,
                                                                    language: that.config.language,
                                                                    os: that.config.os,
                                                                    isWeb: 2,
                                                                    currency: itemLists[ccindex]
                                                                        .Currency
                                                                },
                                                                dataType: "jsonp",
                                                                success: function (res) {
                                                                    console.log(res)
                                                                    if (res.code ===
                                                                        "011") {
                                                                        window.location
                                                                            .href = res.url
                                                                    } else {
                                                                        alert(res.msg)
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })

                                })
                            }
                        })
                    }


                    for (let po = 0; po < a.ItemList.length; po++) {
                        let poindex = po;
                        let authCode;
                        $(`.PointCard_pay${poindex}`).click(function () {

                            $.ajax({
                                type: "POST",
                                url: "//" + that.config.api_URL.payUrl + "/iapMcDJ/mycardConvertMobile.do?",
                                data: {
                                    amount: a.ItemList[poindex].Amount,
                                    siteCode: that.config.siteCode,
                                    passport,
                                    gameCode: that.config.gameCode,
                                    language: that.config.language,
                                    os: that.config.os,
                                    packageName: that.config.packageName,
                                    currency: a.ItemList[poindex].Currency
                                },
                                dataType: "json",
                                success: function (res) {
                                    console.log(res)
                                    if (res.code === "004") {
                                        $.ajax({
                                            type: "POST",
                                            url: "//" + that.config.api_URL.payUrl + "/iapMcDJ/getMycardAuthCode.do?",
                                            data: {
                                                amount: res.amount,
                                                siteCode: res.siteCode,
                                                passport: res.passport,
                                                t: res.t,
                                                ck: res.ck,
                                                paymentType: a.PaymentType,
                                                itemCode: a.ItemList[poindex].ItemCode,
                                                payType: "paytolpoint",
                                                serverCode: that.config.serverCode,
                                                payGameLpoint: 0,
                                                gameCode: that.config.gameCode,
                                                language: that.config.language,
                                                os: that.config.os,
                                                packageName: that.config.packageName,
                                                isWeb: 1,
                                                currency: a.ItemList[poindex].Currency
                                            },
                                            dataType: "json",
                                            success: function (data) {
                                                console.log(data)
                                                if (data.code === "011") {
                                                    authCode = data.authCode
                                                } else {
                                                    alert(data.msg)
                                                }
                                            }
                                        })
                                    }
                                }
                            })

                            point_Div.innerHTML += `
                                <div class="point_code">
                                    <span>${that.config.mateLanguage.TW_Language.codeNum}:</span> <input type="text" id="inpCode" placeholder="${that.config.mateLanguage.TW_Language.codeDes}">
                                </div>
                                <div class="point_pass">
                                    <span>${that.config.mateLanguage.TW_Language.codePass}:</span> <input type="password" name="" id="inpPass" placeholder="${that.config.mateLanguage.TW_Language.codePassDes}">
                                    <span class="icon_open iconfont icon-yanjing"></span>
                                    <span class="close iconfont icon-biyan"></span>
                                </div>
                                <div class="coinPay">
                                    <input type="button" value="${that.config.mateLanguage.TW_Language.exchange}" id="coinBtn">
                                </div>
                            `
                            $(".ex-contant").html(point_Div.innerHTML)

                            $(".icon_open").click(function () {
                                $("#inpPass").attr("type", "text")
                                $(".close").show()
                                $(".icon_open").hide()
                            })
                            $(".close").click(function () {
                                $("#inpPass").attr("type", "password")
                                $(".close").hide()
                                $(".icon_open").show()
                            })

                            $("#coinBtn").click(function () {

                                var CardID = $("#inpCode").val()
                                var CardPW = $("#inpPass").val()

                                console.log(CardID)
                                console.log(CardPW)
                                console.log(authCode)

                                $.ajax({
                                    type: "POST",
                                    url: "//" + that.config.api_URL.payUrl + "/iapMcDJ/ingameForCard.do?",
                                    data: {
                                        authCode,
                                        gameCode: that.config.gameCode,
                                        language: that.config.language,
                                        os: that.config.os,
                                        packageName: that.config.packageName,
                                        CardID,
                                        CardPW
                                    },
                                    dataType: "json",
                                    beforeSend: function (e) {
                                        console.log(e)
                                        $(".load-container").show()
                                        $(".showad").show()
                                    },
                                    success: function (res) {
                                        $(".load-container").hide()
                                        $(".showad").hide()
                                        if (res.code === "4") {
                                            alert("交易失敗，請您再次確認或重新操作。若有疑問請洽客服")
                                        }
                                    }
                                })
                            })

                        })
                    }



                    for (let my = 0; my < b.ItemList.length; my++) {
                        let myindex = my
                        $(`.MyCard_pay${myindex}`).click(function () {
                            $.ajax({
                                url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                type: "POST",
                                data: {
                                    passport,
                                    gameCode: that.config.gameCode,
                                    serverCode: that.config.serverCode,
                                    param: that.config.param,
                                    siteCode: that.config.siteCode,
                                    tag: "website",
                                    language: that.config.language,
                                    os: that.config.os,
                                    packageName: that.config.packageName
                                },
                                dataType: "jsonp",
                                success: function (resl) {
                                    console.log(resl)
                                    if (resl.code === 3) {
                                        $.ajax({
                                            type: "POST",
                                            url: "//" + that.config.api_URL.payUrl + "/iapMc/mycardConvertMobile.do?",
                                            data: {
                                                amount: b.ItemList[myindex].Amount,
                                                siteCode: that.config.siteCode,
                                                passport,
                                                gameCode: that.config.gameCode,
                                                language: that.config.language,
                                                os: that.config.os,
                                                packageName: that.config.packageName,
                                                currency: b.ItemList[myindex].Currency
                                            },
                                            dataType: "jsonp",
                                            success: function (data) {
                                                console.log(data)
                                                if (data.code === "004") {
                                                    $.ajax({
                                                        type: "POST",
                                                        url: "//" + that.config.api_URL.payUrl + "/iapMc/getMycardAuthCode.do?",
                                                        data: {
                                                            amount: data.amount,
                                                            siteCode: data.siteCode,
                                                            passport: data.passport,
                                                            t: data.t,
                                                            ck: data.ck,
                                                            paymentType: b.PaymentType,
                                                            itemCode: b.ItemList[myindex].ItemCode,
                                                            packageName: that.config.packageName,
                                                            payType: "paytolpoint",
                                                            gameCode: that.config.gameCode,
                                                            serverCode: that.config.serverCode,
                                                            payGameLpoint: 0,
                                                            language: that.config.language,
                                                            os: that.config.os,
                                                            isWeb: 2,
                                                            currency: b.ItemList[myindex].Currency
                                                        },
                                                        dataType: "jsonp",
                                                        success: function (res) {
                                                            console.log(res)
                                                            if (res.code === "011") {
                                                                window.location.href = res.url
                                                            } else {
                                                                alert(res.msg)
                                                            }
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                    }
                                }
                            })

                        })
                    }

                })
            }
        },
        openElse: function () {
            $.ajax({
                url: "//" + that.config.api_URL.appsmobileUrl + "/dist/openElse.do?",
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
                    console.log(res)
                    if (res.code === "1") {
                        $(".otherPay").show()
                    }
                }
            })
        },
        getGameInfo: function () {
            console.log(this.config)
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
                    console.log(res)
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
                    console.log(res)
                    if (res.code === "1000") {
                        LpointValue = (res.user.totalpoint - res.user.usepoint)
                        passport = res.user.passport
                        $(".username").text(res.user.username)
                        $(".point").text(LpointValue)
                        $(".userPoint").text(LpointValue)

                        //獲取兌換遊戲幣品項類表
                        $.ajax({
                            url: "//" + that.config.api_URL.appsmobileUrl + "/dist/getPayItemByGame.do?",
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
                                console.log(result)
                                if (result.code === "003") {

                                    $(".pay-o-info").text(decodeURI(result.itemCont.replace(
                                        /\s+|\+|/g, "")))
                                    lpoint = result.lpoint
                                }
                            }
                        })
                    } else {
                        alert(res.msg)
                    }
                }
            })
        },
        //获取SessionID_LP dianfanbao dianchilu tieguo
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
                    }
                }
            })
        }
    }

    window.Pay = Pay;
})(window, document)