//存储
function setData() {
    //facebook 登录
    $.ajax({
        url: "//port.damoregame.com/port/fbuserLoginForMobile.do",
        type: "POST",
        data: {
            access_token: "EAADOitz4Bo0BAHPZBhZCLEJaP3CblojKLZBXmxzVMp7LKcivwHrUHRflf9bf4VfyCtKaQOIXs6UaWZArch1DypFzxrnGoTXn4oK6BcRZCSqdvBZBdh5oKqNeDhardAz8ji3KYCSVV7Hs8jCU6qM5OlgPv0fvqjVA7eQqdV90d0BgZDZD",
            language: "TW",
            gameCode: "XXMTW",
            packageName: "com.wuxiaxxmtw.llp",
            os: "ios",
            appid: "227095808050829",
            tag: "website"
        },
        dataType: "jsonp",
        success: function (res) {
            console.log(res)
            if (res.code === "6004") {
                $.ajax({
                    url: "//login.damoregame.com/login/userPartnerLogin.do",
                    type: "POST",
                    data: {
                        siteUsername: res.siteUsername,
                        sitecode: res.sitecode,
                        password: res.password,
                        time: res.time,
                        email: res.email,
                        fbname: res.fbname,
                        language: "TW",
                        gameCode: "XXMTW",
                        packageName: "com.wuxiaxxmtw.llp",
                        os: "ios"
                    },
                    dataType: "jsonp",
                    success: function (data) {
                        console.log(data)
                        if (data.code === "1400") {
                            $.ajax({
                                url: "//login.damoregame.com/login/userMobileAuth.do",
                                type: "POST",
                                data: {
                                    sitecode: "FXSKDVNANDROID",
                                    type: data.type,
                                    os: "ios",
                                    SessionID: data.sessionID,
                                    language: "TW",
                                    gameCode: "XXMTW",
                                    packageName: "com.wuxiaxxmtw.llp",
                                    packageVersion: "1.0.0"
                                },
                                dataType: "jsonp",
                                success: function (result) {
                                    console.log(result)
                                    if (result.code === "1406") {
                                        localStorage.setItem("toCacheInfo", JSON.stringify(result.toCacheInfo))
                                    }
                                }
                            })
                        }
                    }
                })
            }
        }
    })
}


function getData() {
    var toCacheInfo = JSON.parse(localStorage.getItem("toCacheInfo"))
    return toCacheInfo
}