class FacebookAds {

    static getMyStatic() {
        return FacebookAds.MY_STATIC_ADS;
    }

    constructor(keyPopup_High, keyPopup_Normal, keyPopup_Small, keyVideo_High, keyVideo_Normal) {
        this.keyPopup_High = keyPopup_High;
        this.keyPopup_Normal = keyPopup_Normal;
        this.keyPopup_Small = keyPopup_Small;

        this.keyVideo_High = keyVideo_High;
        this.keyVideo_Normal = keyVideo_Normal;

        this.timeShowPopupAds = 0;
        this.timeShowVideoAds = 0;

        this.countLoadPopup_High = 0;
        this.countLoadPopup_Normal = 0;
        this.countLoadPopup_Small = 0;

        this.countLoadVideo_High = 0;
        this.countLoadVideo_Normal = 0;
        this.numberWatchVideoAds = 0;

        this.maxLoad_Popup = 2;
        this.maxLoad_Video = 2;

        this.delayShowPopupAds = 30;
        this.delayShowVideoAds = 30;

        FacebookAds.MY_STATIC_ADS = this;

        this.isRunAds = true;

        this.logEvent("Ads_New_FacebookAds");
    }

    init() {
        console.log('FacebookAds init...');
        this.isLoadedPopup_High = false;
        this.isLoadedPopup_Normal = false;
        this.isLoadedPopup_Small = false;
        this.isLoadedVideo_High = false;
        this.isLoadedVideo_Normal = false;

        this.loadPopupAdsHigh();

        this.loadVideoAdsHigh();

        FacebookAds.MY_STATIC_ADS = this;
    }

    initAndShowPopup() {
        console.log('FacebookAds init...');
        this.isLoadedPopup_High = false;
        this.isLoadedPopup_Normal = false;
        this.isLoadedPopup_Small = false;
        this.isLoadedVideo_High = false;
        this.isLoadedVideo_Normal = false;

        this.loadPopupAdsAndShow();

        this.loadVideoAdsHigh();

        FacebookAds.MY_STATIC_ADS = this;
    }

    loadPopupAdsHigh() {
        let self = this;
        if (this.keyPopup_High !== null && self.isRunAds) {
            this.preloadedInterstitial_High = null;
            self.isLoadedPopup_High = false;
            try {
                self.logEvent("Ads_P_High_Init");
                console.log('FacebookAds init InterstitialAdAsync ...');
                FBInstant.getInterstitialAdAsync(this.keyPopup_High
                ).then(function (interstitial) {
                    self.logEvent("Ads_P_High_Load_Start");
                    self.preloadedInterstitial_High = interstitial;
                    return self.preloadedInterstitial_High.loadAsync();
                }).then(function () {
                    self.isLoadedPopup_High = true;
                    self.countLoadPopup_High = 0;
                    self.logEvent("Ads_P_High_Loaded");
                    console.log('FacebookAds Interstitial preloaded');
                }).catch(function (err) {
                    ++self.countLoadPopup_High;
                    if (self.countLoadPopup_High < self.maxLoad_Popup) {
                        self.loadPopupAdsHigh();
                    } else {
                        self.logEvent("Ads_P_High_Load_E_1_" + err.message + "_" + err.code);
                        self.loadPopupAdsNormal();
                    }
                    console.log('FacebookAds Interstitial failed to preload: ' + err.message + "   " + err.code);

                    try {
                        if (err.code == 'CLIENT_UNSUPPORTED_OPERATION') {
                            self.isRunAds = false;
                        }
                    } catch (error) {
                    }
                });
            } catch (error) {
                self.logEvent("Ads_P_High_Load_E_2_" + error.message);
                console.log('FacebookAds AdAsync Interstitial failed: ' + error.message);
            }
        }
    }

    loadPopupAdsAndShow() {
        let self = this;
        if (this.keyPopup_High !== null && self.isRunAds) {
            this.preloadedInterstitial_High = null;
            self.isLoadedPopup_High = false;
            try {
                self.logEvent("Ads_P_High_Init");
                console.log('FacebookAds init InterstitialAdAsync ...');
                FBInstant.getInterstitialAdAsync(this.keyPopup_High
                ).then(function (interstitial) {
                    self.logEvent("Ads_P_High_Load_Start");
                    self.preloadedInterstitial_High = interstitial;
                    return self.preloadedInterstitial_High.loadAsync();
                }).then(function () {
                    self.isLoadedPopup_High = true;
                    self.countLoadPopup_High = 0;
                    self.showPopupAdsHigh();
                    self.logEvent("Ads_P_High_Loaded");
                    console.log('FacebookAds Interstitial preloaded');
                }).catch(function (err) {
                    self.countLoadPopup_High = 0;
                    if (self.countLoadPopup_High < self.maxLoad_Popup) {
                        self.loadPopupAdsHigh();
                    } else {
                        self.logEvent("Ads_P_High_Load_E_1_" + err.message + "_" + err.code);
                    }
                    console.log('FacebookAds Interstitial failed to preload: ' + err.message + "   " + err.code);

                    try {
                        if (err.code == 'CLIENT_UNSUPPORTED_OPERATION') {
                            self.isRunAds = false;
                        }
                    } catch (error) {
                    }
                });
            } catch (error) {
                self.logEvent("Ads_P_High_Load_E_2_" + error.message);
                console.log('FacebookAds AdAsync Interstitial failed: ' + error.message);
            }
        }
    }

    showPopupAds() {
        if (!this.isRunAds) {
            return;
        }
        this.countLoadPopup_High = 0;
        this.countLoadPopup_Normal = 0;
        this.countLoadPopup_Small = 0;

        this.showPopupAdsHigh();
    }

    showForcePopupAds() {
        this.timeShowPopupAds = 0;

        this.showPopupAds();
    }

    showPopupAdsHigh() {
        let self = this;
        try {
            if (this.preloadedInterstitial_High !== null) {
                var timeNow = new Date().getTime() / 1000;
                var dentaTime = timeNow - this.timeShowPopupAds;
                if (dentaTime > self.delayShowPopupAds && (timeNow - self.timeShowVideoAds) > 5) {
                    this.preloadedInterstitial_High.showAsync()
                        .then(function () {
                            self.timeShowPopupAds = timeNow;
                            console.log('FacebookAds Interstitial ad show successfully');
                            self.logEvent("Ads_P_High_Show");
                            self.loadPopupAdsHigh();
                        })
                        .catch(function (e) {
                            console.log('FacebookAds Interstitial show error: ' + e.message);
                            self.logEvent("Ads_P_High_E_1_" + e.message + "_" + e.code);
                            self.loadPopupAdsHigh();
                            self.showPopupAdsNormal();
                        });
                } else {
                    self.logEvent("Ads_P_High_Not_Time");
                }
            } else {
                self.logEvent("Ads_P_High_NULL");
                self.showPopupAdsNormal();
            }
        } catch (error) {
            console.log('FacebookAds Interstitial show error: ' + error.message);
            self.logEvent("Ads_P_High_E_2_" + error.message);
            self.loadPopupAdsHigh();
            self.showPopupAdsNormal();
        }
    }

    showPopupAdsHighCallback(callbackShowDone) {
        let self = this;
        try {
            if (this.preloadedInterstitial_High !== null) {
                var timeNow = new Date().getTime() / 1000;
                var dentaTime = timeNow - this.timeShowPopupAds;
                if (dentaTime > self.delayShowPopupAds) {
                    this.preloadedInterstitial_High.showAsync()
                        .then(function () {
                            self.timeShowPopupAds = timeNow;
                            console.log('FacebookAds Interstitial ad show successfully');
                            self.logEvent("Ads_P_High_Show");
                            callbackShowDone.apply();
                            self.loadPopupAdsHigh();
                        })
                        .catch(function (e) {
                            console.log('FacebookAds Interstitial show error: ' + e.message);
                            self.logEvent("Ads_P_High_E_1_" + e.message + "_" + e.code);
                            self.loadPopupAdsHigh();
                            self.showPopupAdsNormalCallback(callbackShowDone);
                        });
                } else {
                    self.logEvent("Ads_P_High_Not_Time");
                }
            } else {
                self.logEvent("Ads_P_High_NULL");
                self.showPopupAdsNormalCallback(callbackShowDone);
            }
        } catch (error) {
            console.log('FacebookAds Interstitial show error: ' + error.message);
            self.logEvent("Ads_P_High_E_2_" + error.message);
            self.loadPopupAdsHigh();
            self.showPopupAdsNormalCallback(callbackShowDone);
        }
    }

    //////////////////////////////////////////////
    //              Ads Popup Normal
    //////////////////////////////////////////////
    loadPopupAdsNormal() {
        let self = this;
        if (this.keyPopup_Normal !== null) {
            this.preloadedInterstitial_Normal = null;
            self.isLoadedPopup_Normal = false;
            try {
                self.logEvent("Ads_P_Normal_Init");
                console.log('FacebookAds init InterstitialAdAsync ...');
                FBInstant.getInterstitialAdAsync(this.keyPopup_Normal
                ).then(function (interstitial) {
                    self.logEvent("Ads_P_Normal_Load_Start");
                    self.preloadedInterstitial_Normal = interstitial;
                    return self.preloadedInterstitial_Normal.loadAsync();
                }).then(function () {
                    self.isLoadedPopup_Normal = true;
                    self.countLoadPopup_Normal = 0;
                    self.logEvent("Ads_P_Normal_Loaded");
                    console.log('FacebookAds Interstitial preloaded');
                }).catch(function (err) {
                    ++self.countLoadPopup_Normal;
                    if (self.countLoadPopup_Normal < self.maxLoad_Popup) {
                        self.loadPopupAdsNormal();
                    } else {
                        self.logEvent("Ads_P_Normal_Load_E_1_" + err.message + "_" + err.code);
                        self.loadPopupAdsSmall();
                    }
                    console.log('FacebookAds Interstitial failed to preload: ' + err.message);
                });
            } catch (error) {
                self.logEvent("Ads_P_Normal_Load_E_2_" + error.message);
                console.log('FacebookAds AdAsync Interstitial failed: ' + error.message);
            }
        }
    }

    showPopupAdsNormal() {
        let self = this;
        try {
            if (this.preloadedInterstitial_Normal !== null) {
                var timeNow = new Date().getTime() / 1000;
                var dentaTime = timeNow - this.timeShowPopupAds;
                if (dentaTime > self.delayShowPopupAds && (timeNow - self.timeShowVideoAds) > 5) {
                    this.preloadedInterstitial_Normal.showAsync()
                        .then(function () {
                            self.timeShowPopupAds = timeNow;
                            console.log('FacebookAds Interstitial ad show successfully');
                            self.logEvent("Ads_P_Normal_Show");
                            self.loadPopupAdsNormal();
                        })
                        .catch(function (e) {
                            console.log('FacebookAds Interstitial show error: ' + e.message);
                            self.logEvent("Ads_P_Normal_E_1_" + e.message + "_" + e.code);
                            self.loadPopupAdsNormal();
                            self.showPopupAdsSmall();
                        });
                } else {
                    self.logEvent("Ads_P_Normal_Not_Time");
                }
            } else {
                self.logEvent("Ads_P_Normal_NULL");
                self.showPopupAdsSmall();
            }
        } catch (error) {
            console.log('FacebookAds Interstitial show error: ' + error.message);
            self.logEvent("Ads_P_Normal_E_2_" + error.message);
            self.loadPopupAdsNormal();
            self.showPopupAdsSmall();
        }
    }

    showPopupAdsNormalCallback(callbackShowDone) {
        let self = this;
        try {
            if (this.preloadedInterstitial_Normal !== null) {
                var timeNow = new Date().getTime() / 1000;
                var dentaTime = timeNow - this.timeShowPopupAds;
                if (dentaTime > self.delayShowPopupAds) {
                    this.preloadedInterstitial_Normal.showAsync()
                        .then(function () {
                            self.timeShowPopupAds = timeNow;
                            console.log('FacebookAds Interstitial ad show successfully');
                            self.logEvent("Ads_P_Normal_Show");
                            callbackShowDone.apply();
                            self.loadPopupAdsNormal();
                        })
                        .catch(function (e) {
                            console.log('FacebookAds Interstitial show error: ' + e.message);
                            self.logEvent("Ads_P_Normal_E_1_" + e.message + "_" + e.code);
                            self.loadPopupAdsNormal();
                            self.showPopupAdsSmallCallback(callbackShowDone);
                        });
                } else {
                    self.logEvent("Ads_P_Normal_Not_Time");
                }
            } else {
                self.logEvent("Ads_P_Normal_NULL");
                self.showPopupAdsSmallCallback(callbackShowDone);
            }
        } catch (error) {
            console.log('FacebookAds Interstitial show error: ' + error.message);
            self.logEvent("Ads_P_Normal_E_2_" + error.message);
            self.loadPopupAdsNormal();
            self.showPopupAdsSmallCallback(callbackShowDone);
        }
    }

    //////////////////////////////////////////////
    //              Ads Popup Small
    //////////////////////////////////////////////
    loadPopupAdsSmall() {
        let self = this;
        if (this.keyPopup_Small !== null) {
            this.preloadedInterstitial_Small = null;
            self.isLoadedPopup_Small = false;
            try {
                self.logEvent("Ads_P_Small_Init");
                console.log('FacebookAds init InterstitialAdAsync ...');
                FBInstant.getInterstitialAdAsync(this.keyPopup_Small
                ).then(function (interstitial) {
                    self.logEvent("Ads_P_Small_Load_Start");
                    self.preloadedInterstitial_Small = interstitial;
                    return self.preloadedInterstitial_Small.loadAsync();
                }).then(function () {
                    self.isLoadedPopup_Small = true;
                    self.countLoadPopup_Small = 0;
                    self.logEvent("Ads_P_Small_Loaded");
                    console.log('FacebookAds Interstitial preloaded');
                }).catch(function (err) {
                    ++self.countLoadPopup_Small;
                    if (self.countLoadPopup_Small < self.maxLoad_Popup) {
                        self.loadPopupAdsSmall();
                    } else {
                        self.logEvent("Ads_P_Small_Load_E_1_" + err.message + "_" + err.code);
                    }
                    console.log('FacebookAds Interstitial failed to preload: ' + err.message);
                });
            } catch (error) {
                self.logEvent("Ads_P_Small_Load_E_2_" + error.message);
                console.log('FacebookAds AdAsync Interstitial failed: ' + error.message);
            }
        }
    }

    showPopupAdsSmall() {
        let self = this;
        try {
            if (this.preloadedInterstitial_Small !== null) {
                var timeNow = new Date().getTime() / 1000;
                var dentaTime = timeNow - this.timeShowPopupAds;
                if (dentaTime > self.delayShowPopupAds && (timeNow - self.timeShowVideoAds) > 5) {
                    this.preloadedInterstitial_Small.showAsync()
                        .then(function () {
                            self.timeShowPopupAds = timeNow;
                            console.log('FacebookAds Interstitial ad show successfully');
                            self.logEvent("Ads_P_Small_Show");
                            self.loadPopupAdsSmall();
                        })
                        .catch(function (e) {
                            console.log('FacebookAds Interstitial show error: ' + e.message);
                            self.logEvent("Ads_P_Small_E_1_" + e.message + "_" + e.code);
                            self.loadPopupAdsSmall();
                        });
                } else {
                    self.logEvent("Ads_P_Small_Not_Time");
                }
            } else {
                self.logEvent("Ads_P_Small_NULL");
            }
        } catch (error) {
            console.log('FacebookAds Interstitial show error: ' + error.message);
            self.logEvent("Ads_P_Small_E_2_" + error.message);
            self.loadPopupAdsSmall();
        }
    }

    showPopupAdsSmallCallback(callbackShowDone) {
        let self = this;
        try {
            if (this.preloadedInterstitial_Small !== null) {
                var timeNow = new Date().getTime() / 1000;
                var dentaTime = timeNow - this.timeShowPopupAds;
                if (dentaTime > self.delayShowPopupAds) {
                    this.preloadedInterstitial_Small.showAsync()
                        .then(function () {
                            self.timeShowPopupAds = timeNow;
                            console.log('FacebookAds Interstitial ad show successfully');
                            self.logEvent("Ads_P_Small_Show");
                            callbackShowDone.apply();
                            self.loadPopupAdsSmall();
                        })
                        .catch(function (e) {
                            console.log('FacebookAds Interstitial show error: ' + e.message);
                            self.logEvent("Ads_P_Small_E_1_" + e.message + "_" + e.code);
                            self.loadPopupAdsSmall();
                        });
                } else {
                    self.logEvent("Ads_P_Small_Not_Time");
                }
            } else {
                self.logEvent("Ads_P_Small_NULL");
            }
        } catch (error) {
            console.log('FacebookAds Interstitial show error: ' + error.message);
            self.logEvent("Ads_P_Small_E_2_" + error.message);
            self.loadPopupAdsSmall();
        }
    }

    isLoadedPopup() {
        if ((this.isLoadedPopup_High && this.preloadedInterstitial_High != null) || (this.isLoadedPopup_Normal && this.preloadedInterstitial_Normal != null) || (this.isLoadedPopup_Small && this.preloadedInterstitial_Small != null)) {
            return true;
        }
        return false;
    }

    //////////////////////////////////////////////
    //              VIDEO ADS
    //////////////////////////////////////////////
    isLoadedVideo() {
        if ((this.isLoadedVideo_High && this.preloadedVideo_High != null) || (this.isLoadedVideo_Normal && this.preloadedVideo_Normal != null)) {
            return true;
        }
        return false;
    }

    showVideoAds() {
        this.countLoadVideo_High = 0;
        this.countLoadVideo_Normal = 0;

        this.showVideoAdsHigh();
    }

    showVideoAdsCallback(callbackShowDone) {
        this.countLoadVideo_High = 0;
        this.countLoadVideo_Normal = 0;

        this.showVideoAdsHighCallback(callbackShowDone);
    }

    loadVideoAdsHigh() {
        let self = this;
        if (this.keyVideo_High !== null) {
            this.preloadedVideo_High = null;
            self.isLoadedVideo_High = false;
            try {
                self.logEvent("Ads_V_High_Init");
                console.log('FacebookAds init RewardedVideoAsync ...');
                FBInstant.getRewardedVideoAsync(this.keyVideo_High
                ).then(function (rewarded) {
                    self.logEvent("Ads_V_High_Load_Start");
                    self.preloadedVideo_High = rewarded;
                    return self.preloadedVideo_High.loadAsync();
                }).then(function () {
                    self.isLoadedVideo_High = true;
                    self.countLoadVideo_High = 0;
                    self.logEvent("Ads_V_High_Loaded");
                    console.log('FacebookAds Rewarded video preloaded');
                }).catch(function (err) {
                    ++self.countLoadVideo_High;
                    if (self.countLoadVideo_High < self.maxLoad_Video) {
                        self.loadVideoAdsHigh();
                    } else {
                        self.logEvent("Ads_V_High_Load_E_1_" + err.message + "_" + err.code);
                        self.loadVideoAdsNormal();
                    }
                    console.error('FacebookAds Rewarded video failed to preload: ' + err.message);
                });
            } catch (error) {
                self.logEvent("Ads_V_High_Load_E_2_" + error.message);
                console.log('FacebookAds AdAsync Video failed: ' + error.message);
            }
        }
    }

    showVideoAdsHigh() {
        let self = this;
        try {
            if (this.preloadedVideo_High !== null) {
                var timeNow = new Date().getTime() / 1000;
                if (timeNow - self.timeShowVideoAds > self.delayShowVideoAds && (timeNow - self.timeShowPopupAds) > 5) {
                    this.preloadedVideo_High.showAsync()
                        .then(function () {
                            self.isLoadedVideo_High = false;
                            self.timeShowVideoAds = timeNow;
                            console.log('FacebookAds Rewarded video ad show successfully');
                            ++self.numberWatchVideoAds;
                            self.logEvent("Ads_Video_Number_Watch_" + self.numberWatchVideoAds);
                            self.logEvent("Ads_V_High_Show");
                            self.loadVideoAdsHigh();
                        })
                        .catch(function (e) {
                            self.isLoadedVideo_High = false;
                            console.log('FacebookAds Rewarded video show error: ' + e.message);
                            self.logEvent("Ads_V_High_E_1_" + e.message + "_" + e.code);
                            self.loadVideoAdsHigh();
                            self.showVideoAdsNormal();
                        });
                } else {
                    self.logEvent("Ads_V_High_Not_Time");
                }
            } else {
                self.logEvent("Ads_V_High_NULL");
                self.showVideoAdsNormal();
            }
        } catch (error) {
            self.isLoadedVideo_High = false;
            console.log('FacebookAds Rewarded video show error: ' + error.message);
            self.logEvent("Ads_V_High_E_2_" + error.message);
            self.loadVideoAdsHigh();
            self.showVideoAdsNormal();
        }
    }

    showVideoAdsHighCallback(callbackShowDone) {
        let self = this;
        try {
            if (this.preloadedVideo_High !== null) {
                var timeNow = new Date().getTime() / 1000;
                if (timeNow - self.timeShowVideoAds > 1) {
                    this.preloadedVideo_High.showAsync()
                        .then(function () {
                            self.isLoadedVideo_High = false;
                            self.timeShowVideoAds = timeNow;
                            console.log('FacebookAds Rewarded video ad show successfully');
                            ++self.numberWatchVideoAds;
                            self.logEvent("Ads_Video_Number_Watch_" + self.numberWatchVideoAds);
                            self.logEvent("Ads_V_High_Show");
                            callbackShowDone.apply();
                            self.loadVideoAdsHigh();
                        })
                        .catch(function (e) {
                            self.isLoadedVideo_High = false;
                            console.log('FacebookAds Rewarded video show error: ' + e.message);
                            self.logEvent("Ads_V_High_E_1_" + e.message + "_" + e.code);
                            self.loadVideoAdsHigh();
                            self.showVideoAdsNormalCallback(callbackShowDone);
                        });
                } else {
                    self.logEvent("Ads_V_High_Not_Time");
                }
            } else {
                self.isLoadedVideo_High = false;
                self.logEvent("Ads_V_High_NULL");
                self.showVideoAdsNormalCallback(callbackShowDone);
            }
        } catch (error) {
            self.isLoadedVideo_High = false;
            console.log('FacebookAds Rewarded video show error: ' + error.message);
            self.logEvent("Ads_V_High_E_2_" + error.message);
            self.loadVideoAdsHigh();
            self.showVideoAdsNormalCallback(callbackShowDone);
        }
    }

    /////////////////////////////////////////////
    loadVideoAdsNormal() {
        let self = this;
        if (this.keyVideo_Normal !== null) {
            this.preloadedVideo_Normal = null;
            self.isLoadedVideo_Normal = false;
            try {
                self.logEvent("Ads_V_Normal_Init");
                console.log('FacebookAds init RewardedVideoAsync ...');
                FBInstant.getRewardedVideoAsync(this.keyVideo_Normal
                ).then(function (rewarded) {
                    self.logEvent("Ads_V_Normal_Load_Start");
                    self.preloadedVideo_Normal = rewarded;
                    return self.preloadedVideo_Normal.loadAsync();
                }).then(function () {
                    self.isLoadedVideo_Normal = true;
                    self.countLoadVideo_Normal = 0;
                    self.logEvent("Ads_V_Normal_Loaded");
                    console.log('FacebookAds Rewarded video preloaded');
                }).catch(function (err) {
                    ++self.countLoadVideo_Normal;
                    if (self.countLoadVideo_Normal < self.maxLoad_Video) {
                        self.loadVideoAdsNormal();
                    } else {
                        self.logEvent("Ads_V_Normal_Load_E_1_" + err.message + "_" + err.code);
                    }
                    console.error('FacebookAds Rewarded video failed to preload: ' + err.message);
                });
            } catch (error) {
                self.logEvent("Ads_V_Normal_Load_E_2_" + error.message);
                console.log('FacebookAds AdAsync Video failed: ' + error.message);
            }
        }
    }

    showVideoAdsNormal() {
        let self = this;
        try {
            if (this.preloadedVideo_Normal !== null) {
                var timeNow = new Date().getTime() / 1000;
                if (timeNow - self.timeShowVideoAds > self.delayShowVideoAds && (timeNow - self.timeShowPopupAds) > 5) {
                    this.preloadedVideo_Normal.showAsync()
                        .then(function () {
                            self.isLoadedVideo_Normal = false;
                            self.timeShowVideoAds = timeNow;
                            console.log('FacebookAds Rewarded video ad show successfully');
                            ++self.numberWatchVideoAds;
                            self.logEvent("Ads_Video_Number_Watch_" + self.numberWatchVideoAds);
                            self.logEvent("Ads_V_Normal_Show");
                            self.loadVideoAdsNormal();
                        })
                        .catch(function (e) {
                            self.isLoadedVideo_Normal = false;
                            console.log('FacebookAds Rewarded video show error: ' + e.message);
                            self.logEvent("Ads_V_Normal_E_1_" + e.message + "_" + e.code);
                            self.loadVideoAdsNormal();
                        });
                } else {
                    self.logEvent("Ads_V_Normal_Not_Time");
                }
            } else {
                self.isLoadedVideo_Normal = false;
                self.logEvent("Ads_V_Normal_NULL");
            }
        } catch (error) {
            self.isLoadedVideo_Normal = false;
            console.log('FacebookAds Rewarded video show error: ' + error.message);
            self.logEvent("Ads_V_Normal_E_2_" + error.message);
            self.loadVideoAdsNormal();
        }
    }

    showVideoAdsNormalCallback(callbackShowDone) {
        let self = this;
        try {
            if (this.preloadedVideo_Normal !== null) {
                var timeNow = new Date().getTime() / 1000;
                if (timeNow - self.timeShowVideoAds > 1) {
                    this.preloadedVideo_Normal.showAsync()
                        .then(function () {
                            self.isLoadedVideo_Normal = false;
                            self.timeShowVideoAds = timeNow;
                            console.log('FacebookAds Rewarded video ad show successfully');
                            ++self.numberWatchVideoAds;
                            self.logEvent("Ads_Video_Number_Watch_" + self.numberWatchVideoAds);
                            self.logEvent("Ads_V_Normal_Show");
                            callbackShowDone.apply();
                            self.loadVideoAdsNormal();
                        })
                        .catch(function (e) {
                            self.isLoadedVideo_Normal = false;
                            console.log('FacebookAds Rewarded video show error: ' + e.message);
                            self.logEvent("Ads_V_Normal_E_1_" + e.message + "_" + e.code);
                            self.loadVideoAdsNormal();
                        });
                } else {
                    self.logEvent("Ads_V_Normal_Not_Time");
                }
            } else {
                self.isLoadedVideo_Normal = false;
                self.logEvent("Ads_V_Normal_NULL");
            }
        } catch (error) {
            self.isLoadedVideo_Normal = false;
            console.log('FacebookAds Rewarded video show error: ' + error.message);
            self.logEvent("Ads_V_Normal_E_2_" + error.message);
            self.loadVideoAdsNormal();
        }
    }

    logEvent(eventName) {
        try {
            FBInstant.logEvent(eventName, 1, { custom_property: eventName });
        } catch (error) {
            console.log('Send Analytic error: ' + error.message);
        }
    }
}