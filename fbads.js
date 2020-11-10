/*
* name;
*/
class FBSdkMamager {
    constructor() {
        //是否正在加载插屏广告
        this.isLoadInterstitialAD = false;
        //插屏广告预加载对象
        this.loadedInterstitialAD = null;
        //只加载一次插屏
        this.loadInterstitialADOne = null;
        // 加载错误次数
        this.errorLoadInterstitialCount = 0;
        // 视屏广告KEY
        this.interstitialKeyArr = [];
        //是否才播放了插屏广告
        this.isPlayInterstitialAD = false;
        //视屏广告KEY
        this.intertitialAdsIds = [
            "792794774390776_946149259055326",
            "792794774390776_1150570078613242",
            "792794774390776_1150570448613205",
            "792794774390776_1150570541946529",
            "792794774390776_1150570668613183",
            "792794774390776_1150570711946512",
            "792794774390776_1150570735279843",
            "792794774390776_1150570798613170",
            "792794774390776_1150570841946499",
            "792794774390776_1150572175279699"
        ];
    }
    static GetInstance() {
        if (this._instance == null) {
            this._instance = new FBSdkMamager();
        }
        return this._instance;
    }
    SetMain(main) {
        this._main = main;
    }
    Init() {
        if (GameBaseData.isFBSDK == true) {
            this.loadInterstitial();
            setInterval(this.loadInterstitial.bind(this), 30000);
        }
    }
    //播放视频广告
    PlayRewardVedio(type, callfun, errorfun) {
        if (GameBaseData.isFBSDK == false) {
            //回调
            if (callfun != null) {
                callfun();
            }
            return;
        }
        var RewardedVideoAd = null;
        //开始加载
        this._main.event(touch.GameEvent.SHOW_LOADING);
        var that = this;
        FBInstant.getRewardedVideoAsync(type).then(function (rewardedVideo) {
            console.log("RewardedVideo开始加载");
            RewardedVideoAd = rewardedVideo;
            return RewardedVideoAd.loadAsync();
        }).then(function () {
            console.log("RewardedVideo加载成功回调");
            return RewardedVideoAd.showAsync();
        }).then(function () {
            // 广告显示成功
            console.log("RewardedVideo广告显示成功");
            that._main.event(touch.GameEvent.CLOSE_LOADING);
            //回调
            if (callfun != null) {
                callfun();
            }
        }).catch(function (e) {
            that._main.event(touch.GameEvent.CLOSE_LOADING);
            if (errorfun != null) {
                errorfun();
            }
            console.log("RewardedVideo广告显示失败");
            console.log("加载视频广告失败" + e.message);
            console.log(e.code);
        });
    }
    // 定时加载插屏
    loadInterstitial() {
        // 是否才播放
        if (this.isPlayInterstitialAD == true) {
            this.isPlayInterstitialAD = false;
            return;
        }
        // 是否正在加载插屏广告
        if (this.isLoadInterstitialAD == true) {
            return;
        }
        // 加载完成了
        if (this.loadedInterstitialAD != null) {
            return;
        }
        // 加载此时超过了
        if (this.errorLoadInterstitialCount >= 3) {
            if (this.loadInterstitialADOne == true) {
                this.loadInterstitialADOne = false;
                this.PreloadInterstitial();
            }
        }
        else {
            this.loadInterstitialADOne = false;
            this.PreloadInterstitial();
        }
    }
    //预插屏加载广告
    PreloadInterstitial() {
        this.isLoadInterstitialAD = true;
        if (this.interstitialKeyArr.length <= 0) {
            this.interstitialKeyArr = this.intertitialAdsIds.slice();
            this.interstitialKeyArr.sort(function (a, b) { return Math.random() - 0.5; });
        }
        var interstitialKey = this.interstitialKeyArr.shift();
        var that = this;
        var preloadedRewardedVideo;
        FBInstant.getInterstitialAdAsync(interstitialKey).then(function (rewarded) {
            console.log("加载插屏广告" + interstitialKey);
            preloadedRewardedVideo = rewarded;
            return preloadedRewardedVideo.loadAsync();
        }).then(function () {
            console.log("加载插屏广告加载成功");
            that.loadedInterstitialAD = preloadedRewardedVideo;
            that.isLoadInterstitialAD = false;
        }).catch(function (err) {
            that.isLoadInterstitialAD = false;
            that.errorLoadInterstitialCount++;
            console.log("加载插屏广告加载失败" + err.message);
            console.log(err.code);
        });
    }
    //播放插屏广告
    ShowInterstitial(callback, failfun) {
        if (GameBaseData.isFBSDK == false) {
            if (callback != null) {
                callback();
            }
            return;
        }
        var that = this;
        that.loadInterstitialADOne = true;
        if (that.loadedInterstitialAD != null) {
            that.loadedInterstitialAD.showAsync().then(function () {
                // 广告显示成功
                console.log("InterstitialAd广告显示成功");
                //回调
                if (callback != null) {
                    callback();
                }
                that.loadedInterstitialAD = null;
                that.isPlayInterstitialAD = true;
            }).catch(function (e) {
                that.loadedInterstitialAD = null;
                that.isPlayInterstitialAD = true;
                that.errorLoadInterstitialCount++;
                console.log("加载插屏广告加载失败" + e.message);
                console.log(e.code);
                if (failfun != null) {
                    failfun();
                }
            });
        }
        else {
            console.log("插屏广告尚未加载完成");
            if (failfun != null) {
                failfun();
            }
        }
    }
}
//复活
FBSdkMamager.reliveRewardVedioAdsId = "792794774390776_1158346281168955";
//双倍
FBSdkMamager.doubleRewardVedioAdsId = "792794774390776_1158346647835585";
//钻石
FBSdkMamager.diamondRewardVedioAdsId = "792794774390776_1158346367835613";
//# sourceMappingURL=FBSdkMamager.js.map