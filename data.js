class GameBaseData {
    static upDataRank(val, modeType, callBack) {
        if (GameBaseData.isFBSDK) {
            let rankName = "";
            if (modeType == 0) {
                rankName = "ballRank";
            } else if (modeType == 1) {
                rankName = "ballRankM1";
            } else if (modeType > 1) {
                rankName = "ballRankM2";
            }
            FBInstant.getLeaderboardAsync(rankName)
                .then(function (leaderboard) {
                    //var date = new Date();
                    return leaderboard.setScoreAsync(val, "");
                })
                .then(function (entry) {
                    if (GameBaseData.isDebug) {
                        console.log(rankName + " has update");
                        console.log(entry.getScore()); // 42
                    }
                    //console.log(entry.getExtraData()); // '{race: "elf", level: 3}'
                    if (callBack) {
                        callBack();
                    }
                }).catch(function (err) {
                    if (GameBaseData.isDebug) {
                        console.log(err);
                    }
                });
        } else {
            if (this.isDebug) {
                console.log("upDataRank" + val);
            }
            if (callBack) {
                callBack();
            }
        }
    }
    static initGameLv() {
        this.gameLv = 1;
        //  laya.utils.Stat.show(0, 0);
        // if (this.gameLvInit == 0) {
        //     laya.utils.Stat.show(-200, 0);
        // laya.utils.Stat.show(0,0);
        //     if (laya.utils.Stat.FPS > 0) {
        //         if (laya.utils.Stat.FPS > 45) {
        //             this.gameLv = 1;
        //         } else {
        //             this.gameLv = 0;
        //         }
        //         this.gameLvInit = 1;
        //         if (laya.utils.Stat.FPS < 20) {
        //             // this.FBEvent(25);
        //         } else if (laya.utils.Stat.FPS < 30) {
        //             // this.FBEvent(26);
        //         } else if (laya.utils.Stat.FPS < 40) {
        //             // this.FBEvent(27);
        //         } else if (laya.utils.Stat.FPS < 50) {
        //             // this.FBEvent(28);
        //         } else {
        //             // this.FBEvent(29);
        //         }
        //         laya.utils.Stat.hide();
        //     }
        // }
    }
    static getNewModeMyRank(callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM2").then(function (leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRankM2  =getMyRank Count= " + num);
                    }
                });
                leaderboard.getPlayerEntryAsync().then(function (entry) {
                    var o = new RankObj();
                    o.rank = entry.getRank() - 1;
                    o.name = entry.getPlayer().getName();
                    o.uuid = entry.getPlayer().getID();
                    o.pic = entry.getPlayer().getPhoto();
                    o.score = entry.getScore() + "";
                    that.newModeMyRank = o;
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getNewModeRankList(callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM2").then(function (leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRankM2  =getRankList Count= " + num);
                    }
                });
                leaderboard.getEntriesAsync(30, 0).then(function (entries) {
                    let data = [];
                    entries.forEach(function (value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        data.push(o);
                    }, that);
                    that.newModeallRank = data;
                    if (GameBaseData.UID == "2158582624199609") { //
                        console.log("多人世界排行");
                        console.log(data);
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        } else {
            //测试数据
            var data = [];
            for (let i = 0; i < 16; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = null;
                o.score = (100 - i) + "";
                data.push(o);
            }
            this.newModeallRank = data;
            this.newModeMyRank = data[4];
            if (callBack) {
                callBack();
            }
        }
    }
    static getMyRank(callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRank").then(function (leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRank  =getMyRank Count= " + num);
                    }
                });
                leaderboard.getPlayerEntryAsync().then(function (entry) {
                    var o = new RankObj();
                    o.rank = entry.getRank() - 1;
                    o.name = entry.getPlayer().getName();
                    o.uuid = entry.getPlayer().getID();
                    o.pic = entry.getPlayer().getPhoto();
                    o.score = entry.getScore() + "";
                    that.myRank = o;
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getRankList(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRank").then(function (leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRank  =getRankList Count= " + num);
                    }
                });
                leaderboard.getEntriesAsync(30, 0).then(function (entries) {
                    let data = [];
                    entries.forEach(function (value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        data.push(o);
                    }, that);
                    that.allRank = data;
                    if (GameBaseData.UID == "2158582624199609") { //
                        console.log("多人世界排行");
                        console.log(data);
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getFriendList(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRank").then(function (leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRank  =getRankList Count= " + num);
                    }
                });
                leaderboard.getConnectedPlayerEntriesAsync(30, 0).then(function (entries) {
                    var data = [];
                    entries.forEach(function (value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        if (o.uuid == GameBaseData.UID) {
                            that.myRank_friend = o;
                        }
                        data.push(o);
                    }, that);
                    that.friendRank = data;
                    if (that.friendRank) {
                        if (that.friendRank.length > 0) {
                            if (that.friendRank.length < 2) {
                                FBInstant.logEvent("Friend0");
                            } else if (that.friendRank.length < 3) {
                                FBInstant.logEvent("Friend1");
                            } else if (that.friendRank.length < 4) {
                                FBInstant.logEvent("Friend2");
                            } else if (that.friendRank.length < 5) {
                                FBInstant.logEvent("Friend3");
                            } else if (that.friendRank.length < 6) {
                                FBInstant.logEvent("Friend4");
                            } else if (that.friendRank.length < 7) {
                                FBInstant.logEvent("Friend5");
                            } else if (that.friendRank.length < 12) {
                                FBInstant.logEvent("Friend6-10");
                            } else if (that.friendRank.length < 22) {
                                FBInstant.logEvent("Friend11-20");
                            } else {
                                FBInstant.logEvent("Friend20+");
                            }
                        }
                    }
                    // that.friendRank=[];
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        } else {
            //测试数据
            var data = [];
            for (let i = 0; i < 6; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = null;
                o.score = (100 - i) + "";
                data.push(o);
            }
            this.UID = "uuid" + 4;
            this.myRank_friend = data[0];
            this.myRank_friend = null;
            this.friendRank = data;
            if (callBack) {
                callBack();
            }
        }
    }
    static getMyRank_model1(callBack, erroBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM1").then(function (leaderboard) {
                leaderboard.getPlayerEntryAsync().then(function (entry) {
                    var o = new RankObj();
                    o.rank = entry.getRank() - 1;
                    o.name = entry.getPlayer().getName();
                    o.uuid = entry.getPlayer().getID();
                    o.pic = entry.getPlayer().getPhoto();
                    o.score = entry.getScore() + "";
                    that.myRank_model1 = o;
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                console.error(error);
                if (erroBack) {
                    erroBack();
                }
            });
        }
    }
    static getRankList_model1(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM1").then(function (leaderboard) {
                leaderboard.getEntriesAsync(30, 0).then(function (entries) {
                    let data = [];
                    entries.forEach(function (value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        data.push(o);
                    }, that);
                    that.allRank_model1 = data;
                    if (GameBaseData.UID == "2158582624199609") { //
                        console.log("单人世界排行");
                        console.log(data);
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getFriendList_model1(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM1").then(function (leaderboard) {
                leaderboard.getConnectedPlayerEntriesAsync(30, 0).then(function (entries) {
                    var data = [];
                    entries.forEach(function (value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        if (o.uuid == GameBaseData.UID) {
                            that.myRank_friend_model1 = o;
                        }
                        data.push(o);
                    }, that);
                    that.friendRank_model1 = data;
                    // that.friendRank=[];
                    if (that.friendRank_model1) {
                        if (that.friendRank_model1.length > 0) {
                            if (that.friendRank_model1.length < 2) {
                                FBInstant.logEvent("Friend0");
                            } else if (that.friendRank_model1.length < 3) {
                                FBInstant.logEvent("Friend1");
                            } else if (that.friendRank_model1.length < 4) {
                                FBInstant.logEvent("Friend2");
                            } else if (that.friendRank_model1.length < 5) {
                                FBInstant.logEvent("Friend3");
                            } else if (that.friendRank_model1.length < 6) {
                                FBInstant.logEvent("Friend4");
                            } else if (that.friendRank_model1.length < 7) {
                                FBInstant.logEvent("Friend5");
                            } else if (that.friendRank_model1.length < 12) {
                                FBInstant.logEvent("Friend6-10");
                            } else if (that.friendRank_model1.length < 22) {
                                FBInstant.logEvent("Friend11-20");
                            } else {
                                FBInstant.logEvent("Friend20+");
                            }
                        }
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        } else {
            //测试数据
            var data = [];
            for (let i = 0; i < 6; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;
                o.pic = null;
                o.score = (100 - i) + "";
                data.push(o);
            }
            this.UID = "uuid" + 5;
            this.myRank_friend_model1 = data[4];
            this.myRank_friend_model1 = null;
            this.friendRank_model1 = data;
            if (callBack) {
                callBack();
            }
        }
    }
    static getInitBeyondFriend(modeType, callBack) {
        if (!GameBaseData.isFBSDK) {
            let numC = 6;
            //测试数据
            var data = [];
            for (let i = 0; i < numC; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = null;
                o.score = (300 * i * 6 - i) + "";
                data.push(o);
            }
            //分数升续
            data.sort((a, b) => {
                return a.score - b.score;
            });
            if (callBack) {
                callBack(data, numC);
            }
            return;
        }
        let rankName = modeType == 0 ? "ballRank" : "ballRankM1";
        if (modeType == 0 && this.friendRank && this.friendRank.length > 0) {
            //模式0已经有数据
            let newArr = this.deepCopy(this.friendRank);
            if (newArr) {
                newArr.sort((a, b) => {
                    return a.score - b.score;
                });
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack(newArr, numL);
                }
            } else {
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack([], numL);
                }
            }
            return;
        } else if (modeType == 1 && this.friendRank_model1 && this.friendRank_model1.length > 0) {
            //模式0已经有数据
            let newArr = this.deepCopy(this.friendRank_model1);
            if (newArr) {
                newArr.sort((a, b) => {
                    return a.score - b.score;
                });
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack(newArr, numL);
                }
            } else {
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack([], numL);
                }
            }
            return;
        }
        //拉取好友排行.
        let that = this;
        FBInstant.getLeaderboardAsync(rankName).then(function (leaderboard) {
            leaderboard.getConnectedPlayerEntriesAsync(30, 0).then(function (entries) {
                var data = [];
                entries.forEach(function (value) {
                    var o = new RankObj();
                    o.rank = value.getRank() - 1;
                    o.name = value.getPlayer().getName();
                    o.uuid = value.getPlayer().getID();
                    o.pic = value.getPlayer().getPhoto();
                    o.score = value.getScore() + "";
                    data.push(o);
                }, that);
                if (modeType == 0) {
                    if (that.friendRank.length == 0) {
                        that.friendRank = data;
                    }
                } else {
                    if (that.friendRank_model1.length == 0) {
                        that.friendRank_model1 = data;
                    }
                }
                let newArr = that.deepCopy(data);
                //分数升续
                data.sort((a, b) => {
                    return a.score - b.score;
                });
                if (callBack) {
                    let numL = modeType == 0 ? that.getRankLength_mode0 : that.getRankLength_mode1;
                    callBack(data, numL);
                }
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    static getRankLength_mode0() {
        // let rankName = "ballRank";
        // let that = this;
        // // console.error("mo0");
        // FBInstant.getLeaderboardAsync(rankName).then(function (leaderboard) {
        //     leaderboard.getEntryCountAsync().then((num) => {
        //         that.beyondRankLength_mode0 = num;
        //         console.error("RLMODE0" + num);
        //     }).catch((error) => {
        //         console.error(error);
        //     });
        // }).catch((error) => {
        //     console.error(error);
        // });
    }
    static getRankLength_mode1() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        let rankName = "ballRankM1";
        let that = this;
        // console.error("mo1");
        FBInstant.getLeaderboardAsync(rankName).then(function (leaderboard) {
            leaderboard.getEntryCountAsync().then((num) => {
                that.beyondRankLength_mode1 = Math.floor(num * (0.8 + 0.1 * Math.random()));
                console.error("RLMODE1" + num);
                let nStart = that.beyondRankLength_mode1 - 30;
                if (nStart < 0) {
                    nStart = 0;
                }
                leaderboard.getEntriesAsync(30, nStart).then(function (entries) {
                    let data = [];
                    entries.forEach(function (value) {
                        data.push(value.getPlayer().getPhoto());
                    }, that);
                    if (data.length > 0) { //成功拉取到数据
                        that.beyondRankLength_mode0 -= data.length;
                        if (that.beyondRankLength_mode0 < 0) {
                            that.beyondRankLength_mode0 = 0;
                        }
                    }
                    that.beyondHead = data;
                    console.error("RLMODE1F" + data.length);
                }).catch((error) => {
                    console.error("1=>");
                    console.error(error);
                });
            }).catch((error) => {
                console.error(error);
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    static getBeyondHeads() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        let timeNow = new Date().getTime();
        let time = (timeNow - this.beyondLoadTime) / 1000;
        if (time < 5) {
            console.log("拉取头像时间未到 " + time);
            return;
        }
        this.beyondLoadTime = timeNow;
        if (this.isDebug) {
            console.log("拉取头像开始");
        }
        let nNum = this.beyondRankLength_mode0 - 30;
        if (nNum < 0) {
            nNum = 0;
        }
        let that = this;
        FBInstant.getLeaderboardAsync("ballRankM1").then(function (leaderboard) {
            leaderboard.getEntriesAsync(30, nNum).then(function (entries) {
                let data = [];
                entries.forEach(function (value) {
                    data.push(value.getPlayer().getPhoto());
                }, that);
                if (data.length > 0) { //成功拉取到数据
                    that.beyondRankLength_mode0 -= data.length;
                    if (that.beyondRankLength_mode0 < 0) {
                        that.beyondRankLength_mode0 = 0;
                    }
                }
                that.beyondHead = data;
                if (that.isDebug) {
                    console.log("拉取头像成功" + data.length);
                }
            }).catch((error) => {
                console.error("1=>");
                console.error(error);
            });
        }).catch((error) => {
            console.error("2=>");
            console.error(error);
        });
    }
    static getBeyondFriend(modeType, startIndex, listMax, callback) {
        if (!GameBaseData.isFBSDK) {
            let numC = 1;
            //测试数据
            var data = [];
            for (let i = 0; i < numC; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = "./res/skin/skin0.png";
                o.score = (100 * i * 6 - i) + "";
                data.push(o);
            }
            if (callback) {
                callback(data, startIndex + 1);
            }
            return;
        }
        let that = this;
        let sIndex = 0;
        let rankName = modeType == 0 ? "ballRank" : "ballRankM1";
        FBInstant.getLeaderboardAsync(rankName).then(function (leaderboard) {
            let sIndex = listMax - startIndex - 1;
            if (that.isDebug) {
                console.log("listMax=" + listMax + "  startIndex=" + startIndex + "_=" + sIndex + "   mode=" + modeType);
            }
            leaderboard.getEntriesAsync(1, listMax - startIndex - 1).then(function (entries) {
                let data = [];
                entries.forEach(function (value) {
                    var o = new RankObj();
                    o.rank = value.getRank() - 1;
                    o.name = value.getPlayer().getName();
                    o.uuid = value.getPlayer().getID();
                    o.pic = value.getPlayer().getPhoto();
                    o.score = value.getScore() + "";
                    data.push(o);
                }, that);
                if (modeType == 0) {
                    that.beyondRankLength_mode0--;
                    if (that.beyondRankLength_mode0 < 0) {
                        that.beyondRankLength_mode0 = 0;
                    }
                } else {
                    that.beyondRankLength_mode1--;
                    if (that.beyondRankLength_mode1 < 0) {
                        that.beyondRankLength_mode1 = 0;
                    }
                }
                if (callback) {
                    callback(data, startIndex + 1);
                }
            });
            // if (that.isDebug) {
            //     console.log("获取BallRank  =getRankList Count= " + num);
            // }
        }).catch((error) => {
            console.error(error);
        });
    }
    static getStartEndRankObj(sScore, eScore, list) {
        let rs = 0;
        for (let i = 0; i < list.length; i++) {
            rs = Math.floor(list[i].score);
            if (rs > 0 && rs >= sScore && rs < eScore) {
                return list[i];
            }
        }
        return null;
    }
    //获取排行榜临近好友
    static GetNeerPlayer() {
        let ranks = null;
        if (this.modelType == 0) {
            ranks = this.friendRank;
        } else {
            ranks = this.friendRank_model1;
        }
        let index = this.getMyRankIndex(this.UID, ranks);
        if (index >= 0) { //找到自己排行榜中的位置
            // let targetObj=this. friendRank[index];
            let startIndex = 0;
            if (ranks.length < 3) {
                startIndex = 0;
            } else {
                if (index == 0) {
                    startIndex = 0;
                } else if (index == ranks.length - 1) {
                    startIndex = ranks.length - 3;
                } else {
                    startIndex = index - 1;
                }
            }
            return this.getRankList_linear(startIndex, 3, ranks);
        }
        let arr = [];
        return arr;
    }
    static getMyRankIndex(uid, rankList) {
        for (let i = 0; i < rankList.length; i++) {
            if (uid == rankList[i].uuid) {
                return i;
            }
        }
        return -1;
    }
    static getRankList_linear(startIndex, maxNum, rankList) {
        let arr = [];
        for (let i = startIndex; i < startIndex + maxNum && i < rankList.length; i++) {
            arr.push(rankList[i]);
        }
        return arr;
    }
    //-分享数据-------------------------------------------
    //添加一个已经分享uid进入列表
    static setAddUidToShare(uid, gameModel) {
        let result = false;
        let rankUids = this.rankUidToShare;
        if (gameModel == 1) {
            rankUids = this.rankUidToShareModel1;
        }
        if (rankUids.length == 0) {
            rankUids.push(uid);
            result = true;
        } else {
            let find = false;
            for (let i = 0; i < rankUids.length; i++) {
                if (rankUids[i] === uid) {
                    find = true;
                    //已经存在
                    break;
                }
            }
            if (!find) {
                rankUids.push(uid);
                result = true;
            }
        }
        return result;
    }
    //得到已经分享的数据字符串
    static getRankUidToShareString(gameModel) {
        if (gameModel == 0) {
            return this.rankUidToShare.toString();
        }
        return this.rankUidToShareModel1.toString();
    }
    //清除分享数据
    static clearUidToShare() {
        this.rankUidToShare = [];
        this.rankUidToShareModel1 = [];
    }
    //判断当前uid是否已经分享过
    static getUidIsShare(uid, gameModel) {
        let rankUids = this.rankUidToShare;
        if (gameModel == 1) {
            rankUids = this.rankUidToShareModel1;
        }
        for (let i = 0, length = rankUids.length; i < length; i++) {
            if (rankUids[i] === uid) {
                return true;
            }
        }
        return false;
    };
    //------------------------------------------------------------
    static getSupportedAPIs() {
        // let rankName = "ballRank";
        // let that = this;
        // // console.error("mo0");
        // FBInstant.getLeaderboardAsync(rankName).then(function (leaderboard) {
        //     leaderboard.getEntryCountAsync().then((num) => {
        //         that.beyondRankLength_mode0 = num;
        //         console.error("RLMODE0" + num);
        //     }).catch((error) => {
        //         console.error(error);
        //     });
        // }).catch((error) => {
        //     console.error(error);
        // });
        var myapi = FBInstant.getSupportedAPIs();
        if (this.isDebug) {
            console.log(myapi);
            console.log("myapi=" + myapi.length);
        }
        if (myapi) {
            for (var i = 0; i < myapi.length; i++) {
                this.isRewardedVideoAsync = false;
                if (myapi[i].indexOf("getRewardedVideoAsync") >= 0) {
                    this.isRewardedVideoAsync = true;
                    if (this.isDebug) {
                        console.log("isRewardedVideoAsync=true");
                    }
                    break;
                }
            }
        }
        if (myapi) {
            for (var i = 0; i < myapi.length; i++) {
                this.isInterstitialAdAsync = false;
                if (myapi[i].indexOf("getInterstitialAdAsync") >= 0) {
                    this.isInterstitialAdAsync = true;
                    if (this.isDebug) {
                        console.log("isInterstitialAdAsync=true");
                    }
                    break;
                }
            }
        }
    }
    // .then(function () {
    //     that.GGState[GGIndex] = -3;
    //     FBInstant.logEvent("AdsWatch_"+GGIndex);
    //     console.log("广告看过了GG" + GGIndex);
    // })
    static getGG() {
        var that = this;
        console.log("进入 getGG" + "isRewardedVideoAsync" + this.isRewardedVideoAsync + "GGState" + this.GGState);
        if (!this.isFBSDK || !this.isRewardedVideoAsync) {
            return;
        }
        if (that.GGState <= -1) {
            console.log("进入 getRewardedVideoAsync" + "+广告id" + that.GGID[that.GGIndex]);
            FBInstant.logEvent("NAdsStart_" + this.GGIndex);
            that.GG = null;
            FBInstant.getRewardedVideoAsync(that.GGID[that.GGIndex]).then(function (rewarded) {
                that.GG = rewarded;
                that.GGState = 1;
                if (GameBaseData.isDebug) {
                    console.log("成功获取广告信息,开始载入GG" + that.GGIndex);
                }
                FBInstant.logEvent("NAdsSuc_" + that.GGIndex);
                return that.GG.loadAsync();
            }).then(function () {
                that.GGState = 2;
                that.GGErrtimes = 0;
                FBInstant.logEvent("NAdsCom_" + that.GGIndex);
                if (GameBaseData.isDebug) {
                    console.log("广告载入完成GG" + that.GGIndex);
                }
            }).catch(function (err) {
                if (GameBaseData.isDebug) {
                    console.log("广告载入失败GG" + that.GGIndex + "报错信息:");
                    console.log(err.message);
                }
                FBInstant.logEvent("NAdsFail_" + that.GGIndex);
                that.GGErrtimes++;
                if (that.GGErrtimes > 2 && (new Date().getTime() - that.GGPlayTime) / 1000 < 30) {
                    // Laya.timer.once(30000, that, () => {//一轮都失败等待30秒在加载
                    that.GGState = -1;
                    //that.GGErrtimes = 0;
                    that.nextAdsIndex();
                    //     that.getGG();
                    // });
                } else {
                    that.GGState = -1;
                    that.nextAdsIndex();
                    that.getGG();
                }
                that.GGPlayTime = new Date().getTime();
            });
        }
    };
    static nextAdsIndex() {
        this.GGIndex++;
        if (this.GGIndex > 2) {
            this.GGIndex = 0;
        }
    }
    static nextCPAdsIndex() {
        this.CPGGIndex++;
        if (this.CPGGIndex > 2) {
            this.CPGGIndex = 0;
        }
    }
    static initVideo() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        // let platform = FBInstant.getPlatform(); // ("IOS" | "ANDROID" | "WEB" | "MOBILE_WEB")
        // if (platform == "IOS") {//是否是IOS平台
        //     this.isIOS = true;
        // }
        // if (platform == "WEB") {//电脑不加载视频
        //     return;
        // }
        // this.getSupportedAPIs();
        // this.getGG();
    }
    static initCPVideo() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        this.getSupportedAPIs();
        // this.CPGGInit();//重新载入
    }
    static getVideoFlag(type) {
        if (type == 3) { //强弹的优先弹插屏
            if (this.CPGGState == 2) {
                return 11;
            }
            // if (this.GGState == 2) {
            //     return 0
            // }
        } else {
            // if (this.GGState == 2) {
            //     return 0
            // }
            if (this.CPGGState == 2) {
                return 11;
            }
        }
        // this.initVideo();
        // this.initCPVideo();
        return -1;
    }
    static playVideo2(callBack, erroBack, tipsBack, playBack) {
        if (!this.isFBSDK) {
            return;
        }
        let that = this;
        if (this.GGState != 2) {
            if (GameBaseData.isDebug) {
                console.log("广告正在加载中GG" + that.GGIndex + "  state=" + this.GGState);
            }
            if (tipsBack) {
                tipsBack();
            }
            that.initVideo();
            return;
        }
        if (playBack) {
            playBack();
        }
        this.GG.showAsync()
            .then(function () {
                if (callBack) {
                    callBack();
                }
                if (GameBaseData.isDebug) {
                    console.log("广告成功播放GG" + that.GGIndex);
                }
                that.GGState = -1;
                that.nextAdsIndex();
                that.initVideo();
            })
            .catch(function (err) {
                if (GameBaseData.isDebug) {
                    console.log("广告播放失败GG" + that.GGIndex);
                    console.log(err);
                }
                if (erroBack) {
                    erroBack();
                }
                that.GGState = -1;
                that.nextAdsIndex();
                that.initVideo();
            });
    }
    /**
     * 0 皮肤
     * 1 2倍奖励
     * 2 复活
     */
    // public static playVideo1(GGIndex, callBack, erroBack, tipsBack, playBack) {
    //     if (!this.isFBSDK) {
    //         return;
    //     }
    //     let that = this;
    //     let platform = FBInstant.getPlatform(); // ("IOS" | "ANDROID" | "WEB" | "MOBILE_WEB")
    //     if (GameBaseData.isDebug) {
    //         console.log("fb平台=" + platform);
    //     }
    //     let cpInde = 0;
    //     if (platform == "WEB") {//电脑
    //         if (cpInde == 0) {
    //             cpInde = 1;
    //         } else if (cpInde == 1) {
    //             cpInde = 2;
    //         } else if (cpInde == 2) {
    //             cpInde = 0;
    //         }
    //         this.PlayCPGG(cpInde, playBack, callBack,erroBack,tipsBack);
    //         // this.PlayCPGG(cpInde, playBack, callBack, () => {
    //         //     if (GGIndex == 2) {//复活广告
    //         //         if (!this.FBUpscore) {
    //         //             this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //         }
    //         //     } else {
    //         //         this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //     }
    //         // }, () => {
    //         //     if (GGIndex == 2) {//复活广告
    //         //         if (!this.FBUpscore) {
    //         //             this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //         }
    //         //     } else {
    //         //         this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //     }
    //         // });
    //         return;
    //     }
    //     let timeC = (new Date().getTime() - this.GGPlayTime[GGIndex]) / 1000;
    //     if (timeC < 30) {//间隔30秒
    //         return;
    //     }
    //     if (this.GGState[GGIndex] == -3 || this.GGState[GGIndex] == -1) {
    //         this.GGState[GGIndex] = -1;//广告再次进行初始预加载
    //         if (GameBaseData.isDebug) {
    //             console.log("没有广告,或者广告需要刷新");
    //         }
    //         that.getGG(GGIndex);
    //     }
    //     if (this.GGState[GGIndex] != 2) {
    //         if (GameBaseData.isDebug) {
    //             console.log("广告正在加载中GG" + GGIndex + "  state=" + this.GGState[GGIndex]);
    //         }
    //         // if (tipsBack) {
    //         //     tipsBack();
    //         // }
    //         if (GGIndex == 0) {
    //             cpInde = 1;
    //         } else if (GGIndex == 1) {
    //             cpInde = 2;
    //         } else if (GGIndex == 2) {
    //             cpInde = 0;
    //         }
    //         this.PlayCPGG(cpInde, playBack, callBack,erroBack,tipsBack);
    //         // this.PlayCPGG(cpInde, playBack, callBack, () => {
    //         //     if (GGIndex == 2) {//复活广告
    //         //         if (!this.FBUpscore) {
    //         //             this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //         }
    //         //     } else {
    //         //         this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //     }
    //         // }, () => {
    //         //     if (GGIndex == 2) {//复活广告
    //         //         if (!this.FBUpscore) {
    //         //             this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //         }
    //         //     } else {
    //         //         this.FBShareFriendGG(this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m", this.modelType == 0 ? "MULTI" : "SINGLE", callBack);
    //         //     }
    //         // });
    //         return;
    //     }
    //     if (playBack) {
    //         playBack();
    //     }
    //     this.GG[GGIndex].showAsync()
    //         .then(function () {
    //             if (callBack) {
    //                 callBack();
    //             }
    //             //FBInstant.logEvent("ReviveAds");
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告成功播放GG" + GGIndex);
    //             }
    //             that.GGState[GGIndex] = -1;
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告再次刷新GG" + GGIndex);
    //             }
    //             that.GGPlayTime[GGIndex] = new Date().getTime();//时间赋值
    //             Laya.timer.once(30000, that, () => {//30秒预加载
    //                 that.getGG(GGIndex);
    //             });
    //         })
    //         .catch(function (err) {
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告播放失败GG" + GGIndex);
    //                 console.log(err);
    //             }
    //             if (erroBack) {
    //                 erroBack();
    //             }
    //             that.GGState[GGIndex] = -1;
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告再次刷新GG" + GGIndex);
    //             }
    //             that.getGG(GGIndex);
    //             //FBInstant.logEvent("gift-ads-fail");
    //         });
    // };
    static CPGGInit() {
        if (!this.isFBSDK || !this.isInterstitialAdAsync) {
            return;
        }
        var that = this;
        if (that.CPGGState <= -1) {
            FBInstant.logEvent("CPAdsStart_" + this.CPGGIndex);
            that.CPGGObj = null;
            FBInstant.getInterstitialAdAsync(this.CPGG[that.CPGGIndex]).then(function (interstitial) {
                that.CPGGObj = interstitial;
                that.CPGGState = 1;
                if (GameBaseData.isDebug) {
                    console.log("插屏成功获取广告信息,开始载入GG" + that.CPGGIndex);
                }
                FBInstant.logEvent("CPAdsSuc_" + that.CPGGIndex);
                return that.CPGGObj.loadAsync();
            }).then(function () {
                that.CPGGState = 2;
                that.CPGGErrtimes = 0;
                FBInstant.logEvent("CPAdsCom_" + that.CPGGIndex);
                if (GameBaseData.isDebug) {
                    console.log("插屏广告载入完成GG" + that.CPGGIndex);
                }
            }).catch(function (err) {
                if (GameBaseData.isDebug) {
                    console.log("插屏广告载入失败GG" + that.CPGGIndex + "报错信息:");
                    console.log(err.message);
                }
                FBInstant.logEvent("CPAdsFail_" + that.CPGGIndex);
                that.CPGGErrtimes++;
                if (that.CPGGErrtimes > 2 && (new Date().getTime() - that.CPGGPlayTime) / 1000 < 30) {
                    // Laya.timer.once(30000, that, () => {//一轮都失败等待30秒在加载
                    that.CPGGState = -1;
                    //that.CPGGErrtimes = 0;
                    that.nextCPAdsIndex();
                    //     that.CPGGInit();
                    // });
                } else {
                    that.CPGGState = -1;
                    that.nextCPAdsIndex();
                    that.CPGGInit();
                }
                that.CPGGPlayTime = new Date().getTime();
            });
        }
    }
    //播放插屏
    // public static PlayCPGG1(GGIndex, playBack, callBack, erroBack, tipsBack) {
    //     if (!this.isFBSDK) {
    //         return;
    //     }
    //     let timeC = (new Date().getTime() - this.CPGGPlayTime[GGIndex]) / 1000;
    //     if (timeC < 30) {//间隔30秒
    //         if (GameBaseData.isDebug) {
    //             console.log("时间间隔不到" + timeC);
    //         }
    //         if (tipsBack) {
    //             tipsBack();
    //         }
    //         return;
    //     }
    //     let platform = FBInstant.getPlatform()
    //     if (this.CPGGState[GGIndex] == -3 || this.CPGGState[GGIndex] == -1) {
    //         this.CPGGState[GGIndex] = -1;//广告再次进行初始预加载
    //         if (GameBaseData.isDebug) {
    //             console.log("插屏没有广告,或者广告需要刷新");
    //         }
    //         this.CPGGInit(GGIndex);//重新载入
    //     }
    //     if (this.CPGGState[GGIndex] != 2) {
    //         if (GameBaseData.isDebug) {
    //             console.log("广告正在加载中GG" + GGIndex + "  state=" + this.CPGGState[GGIndex]);
    //         }
    //         if (tipsBack) {
    //             tipsBack();
    //         }
    //         return;
    //     }
    //     if (playBack) {
    //         playBack();
    //     }
    //     let that = this;
    //     FBInstant.logEvent("InterAds_" + GGIndex + "_" + platform + "_click");
    //     this.CPGGObj[GGIndex].showAsync()
    //         .then(function () {
    //             if (callBack) {
    //                 callBack();
    //             }
    //             FBInstant.logEvent("InterAds_" + GGIndex + "_" + platform + "_suc");
    //             that.CPGGPlayTime[GGIndex] = new Date().getTime();
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告成功播放GG" + GGIndex);
    //             }
    //             that.CPGGState[GGIndex] = -1;
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告再次刷新GG" + GGIndex);
    //             }
    //             that.CPGGInit(GGIndex);
    //         })
    //         .catch(function (err) {
    //             FBInstant.logEvent("InterAds_" + GGIndex + "_" + platform + "_fail");
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告播放失败GG" + GGIndex);
    //                 console.log(err);
    //             }
    //             if (erroBack) {
    //                 erroBack();
    //             }
    //             that.CPGGState[GGIndex] = -1;
    //             if (GameBaseData.isDebug) {
    //                 console.log("广告再次刷新GG" + GGIndex);
    //             }
    //             Laya.timer.once(2000, that, () => {
    //                 that.CPGGInit(GGIndex);
    //             });
    //         });
    // }
    //播放插屏
    static PlayCPGG2(playBack, callBack, erroBack, tipsBack) {
        if (!this.isFBSDK) {
            return;
        }
        if (playBack) {
            playBack();
        }
        let that = this;
        //插屏广告对象没有。
        if (this.CPGGObj == null) {
            if (callBack) {
                callBack();
            }
            return;
        }
        this.CPGGObj.showAsync()
            .then(function () {
                if (callBack) {
                    callBack();
                }
                if (GameBaseData.isDebug) {
                    console.log("插屏广告成功播放GG" + that.CPGGIndex);
                }
                that.CPGGState = -1;
                that.nextCPAdsIndex();
                that.CPGGInit();
            })
            .catch(function (err) {
                if (GameBaseData.isDebug) {
                    console.log("插屏广告播放失败GG" + that.CPGGIndex);
                    console.log(err.message);
                }
                if (erroBack) {
                    erroBack();
                }
                that.CPGGState = -1;
                that.nextCPAdsIndex();
                that.CPGGInit();
            });
    }
    static FBShare(data, callback) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        // FBInstant.shareAsync({
        //     intent: 'SHARE',
        //     image: BaseImage.fbImage,
        //     text: "Aha I'm a geniuses,come and challenge me!",
        //     data: data,
        // }).then(function () {
        //     // continue with the game.
        //     if (GameBaseData.isDebug) {
        //         console.log("分享成功");
        //     }
        //     if (callback) {
        //         callback();
        //     }
        // });
        if (BaseImage.doImage % 4 != 0)
            return;
        BaseImage.doImage++;
        var score = this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m";
        var info = this.modelType == 0 ? "MULTI" : "SINGLE";
        let that = this;
        BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + score, info + " MODEL", (imageD) => {
            if (GameBaseData.isDebug) {
                console.log("图片生成完毕 发送消息");
            }
            BaseImage.doImage = 0;
            FBInstant.shareAsync({
                intent: 'SHARE',
                image: imageD,
                text: "Aha I'm a geniuses,come and challenge me!",
                data: data,
            }).then(function () {
                // continue with the game.
                if (GameBaseData.isDebug) {
                    console.log("分享成功");
                }
                if (callback) {
                    callback();
                }
            }).catch(function (e) {
                // continue with the game.
                if (GameBaseData.isDebug) {
                    console.log("分享失败");
                    console.log(e);
                }
                if (callback) {
                    callback();
                }
            });
        });
    };
    static FBShare_Custom(score, info, callback) {
        if (!this.isFBSDK) {
            return;
        }
        if (BaseImage.doImage % 4 != 0)
            return;
        BaseImage.doImage++;
        BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + score, info + " MODEL", (imageD) => {
            if (GameBaseData.isDebug) {
                console.log("图片生成完毕 发送消息");
            }
            BaseImage.doImage = 0;
            let that = this;
            FBInstant.shareAsync({
                intent: 'SHARE',
                image: imageD,
                text: "Aha I'm a geniuses,come and challenge me!",
                data: null,
            }).then(function () {
                // continue with the game.
                if (GameBaseData.isDebug) {
                    console.log("分享成功");
                }
                if (callback) {
                    callback();
                }
            }).catch(function (e) {
                // continue with the game.
                if (GameBaseData.isDebug) {
                    console.log("分享失败");
                    console.log(e);
                }
                if (callback) {
                    callback();
                }
            });
        });
    };
    static FBShareFriend(data, callback) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        //let data={type:"play",roomID: GameBaseData.contextID, formID: FBInstant.player.getID(), gameType: 0};
        let that = this;
        FBInstant.context.chooseAsync({
            filter: ['NEW_PLAYERS_ONLY'],
            minSize: 2,
        }).then(function () {
            if (GameBaseData.isDebug) {
                console.log("邀请好友成功");
                console.log("FBInstant.context.getID()====>");
            }
            FBInstant.context.getID();
            FBInstant.player.getID();
            const entryPointData = FBInstant.getEntryPointData();
            if (GameBaseData.isDebug) {
                console.log(entryPointData);
            }
            that.FBContextID = FBInstant.context.getID();
            GameBaseData.FBUpscore = true;
            if (callback) {
                callback();
            }
            // data = {
            //     myReplayData: FBInstant.context.getID(),
            //     gameType: this.modelType,
            // };
            // //切换
            // //邀请好友时重置数据
            // FBInstant.updateAsync({
            //     action: "CUSTOM",
            //     cta: "Play",
            //     image: BaseImage.fbImage,
            //     text: "分享",
            //     template: "play_turn",
            //     data: data,
            //     strategy: "IMMEDIATE",
            //     notification: "NO_PUSH"
            // }).then(function () {
            //     console.log("updateAsyncOK");
            // });
        }).catch(function (err) {
            if (GameBaseData.isDebug) {
                console.log("2Fb好友玩游戏列表Catch");
                console.log(err);
            }
        });
    };
    static FBShareFriendGG(pkScore, info, callback) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        //let data={type:"play",roomID: GameBaseData.contextID, formID: FBInstant.player.getID(), gameType: 0};
        let that = this;
        if (BaseImage.doImage % 4 != 0)
            return;
        BaseImage.doImage++;
        BaseImage.getShareImg(FBInstant.player.getPhoto(), pkScore, info + " MODEL", (imgdata) => {
            BaseImage.doImage = 0;
            FBInstant.context.chooseAsync({
                filter: ['NEW_PLAYERS_ONLY'],
                minSize: 2,
            }).then(function () {
                if (GameBaseData.isDebug) {
                    console.log("邀请好友成功");
                    console.log("FBInstant.context.getID()====>");
                }
                FBInstant.context.getID();
                FBInstant.player.getID();
                that.FBContextID = FBInstant.context.getID();
                GameBaseData.FBUpscore = true;
                let data = {
                    myReplayData: FBInstant.context.getID(),
                    gameType: that.modelType,
                };
                //切换
                //邀请好友时重置数据
                FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play",
                    image: imgdata,
                    text: FBInstant.player.getName() + " get " + pkScore + " scores in " + info + " MODEL! Turn you now!",
                    template: "play_turn",
                    data: data,
                    strategy: "IMMEDIATE",
                    notification: "NO_PUSH"
                }).then(function () {
                    if (callback) {
                        that.FBEvent(39);
                        callback();
                    }
                    if (GameBaseData.isDebug) {
                        console.log("updateAsyncOK");
                    }
                });
            }).catch(function (err) {
                if (GameBaseData.isDebug) {
                    console.log("2Fb好友玩游戏列表Catch");
                    console.log(err);
                }
            });
        });
    };
    static FBShareFriend_startGame(callback, useCloseCallBack) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        //let data={type:"play",roomID: GameBaseData.contextID, formID: FBInstant.player.getID(), gameType: 0};
        let that = this;
        FBInstant.context.chooseAsync({
            filter: ['NEW_PLAYERS_ONLY'],
            minSize: 2,
        }).then(function () {
            if (GameBaseData.isDebug) {
                console.log("挑战好友成功");
                console.log("FBInstant.context.getID()====>" + FBInstant.context.getID());
            }
            // FBInstant.context.getID();
            // FBInstant.player.getID();
            // const entryPointData = FBInstant.getEntryPointData();
            // console.log(entryPointData);
            that.FBContextID = FBInstant.context.getID();
            GameBaseData.FBUpscore = true;
            if (callback) {
                callback();
            }
        }).catch(function (err) {
            if (GameBaseData.isDebug) {
                console.log("1Fb好友玩游戏列表Catch");
                console.log(err);
            }
            that.FBContextID = "";
            if (useCloseCallBack) { //正常进入游戏回调
                useCloseCallBack();
            }
        });
    };
    static OpenOtherGame(id, callback) {}
    static PKFriend(pkUid, callBack) {
        if (!this.isFBSDK) {
            return;
        }
        let that = this;
        if (GameBaseData.isDebug) {
            console.log("挑战角色uid=" + pkUid);
        }
        FBInstant.context.createAsync(pkUid)
            .then(function () {
                if (GameBaseData.isDebug) {
                    console.log("createAsync roomID=" + FBInstant.context.getID());
                    console.log("createAsync");
                    console.log("pkuid==" + pkUid);
                }
                let roomID = FBInstant.context.getID();
                that.FBContextID = roomID;
                that.pkFriendUID = pkUid;
                GameBaseData.FBUpscore = true;
                //进入游戏
                if (callBack) {
                    callBack();
                }
            }).catch(function (err) {
                if (GameBaseData.isDebug) {
                    console.log("pk好友==>catch=>");
                    console.log(err);
                }
                let roomID = FBInstant.context.getID();
                that.FBContextID = roomID;
                that.pkFriendUID = pkUid;
                if (GameBaseData.isDebug) {
                    console.log("catch roomID=" + roomID);
                }
                FBInstant.context
                    .switchAsync(roomID + "")
                    .then(function () {
                        if (GameBaseData.isDebug) {
                            console.log(FBInstant.context.getID());
                        }
                    }).catch(function (err) {
                        if (GameBaseData.isDebug) {
                            console.log("switchAsync");
                            console.log(err);
                        }
                    });
                // if (callBack) {//进入游戏
                //     callBack();
                // }
            });
    }
    //游戏结束轮到好友
    static gameOverTurnFriend(pkScore, info) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        if (GameBaseData.isDebug) {
            console.log("gameOverTurnFriend pkUid=========== >" + this.FBContextID);
        }
        if (this.FBContextID == "") {
            return;
        }
        if (GameBaseData.isDebug) {
            console.log("pk完毕 正在發送");
        }
        BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + pkScore, info + " MODEL", (data) => {
            if (GameBaseData.isDebug) {
                console.log("pk完毕 发送消息");
            }
            let that = this;
            FBInstant.updateAsync({
                action: "CUSTOM",
                cta: "Play",
                image: data,
                text: {
                    default: FBInstant.player.getName() + " get " + pkScore + " scores in " + info + " MODEL! Turn you now!",
                    localizations: {
                        en_US: FBInstant.player.getName() + " get " + pkScore + " scores in " + info + " MODEL! Turn you now!",
                    }
                },
                template: "play_turn",
                data: {
                    myReplayData: FBInstant.context.getID(),
                    gameType: that.modelType
                },
                strategy: "IMMEDIATE",
                notification: "NO_PUSH"
            }).then(function () {
                console.log("updateAsync====pk消息发送给好友OK");
                FBInstant.context.switchAsync("")
                    .then(function () {
                        console.log("switchAsync");
                    });
            });
        });
    }
    //提交最佳分数
    static sendToFBBestScore(score) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        console.log("提交最佳分数");
        FBInstant.postSessionScore(score);
    }
    /**
     *
     * @param 1）开始载入进度为0   y001_load1
     * @param 2)  载入中间                y001_load2
     * @param 3)  载入完毕                y001_load3
     * @param 4  点击开始游戏           y002_start1
        @param 5  游戏复活界面弹出                   y002_start2
        @param 6）点击解锁皮肤                   y003_skin1
        @param 7）点击解锁皮肤成功                   y003_skin2
        @param 8）二倍奖励点击               y004_double1
        @param 9）二倍奖励广告成功               y004_double2
        @param 10）二倍奖励广告失败               y004_double3
        @param 11）二倍奖励广告载入中               y004_double4
        @param 12）复活广告点击               y005_relive1
        @param 13）复活广告成功               y005_relive2
        @param 14）复活广告失败                 y005_relive3
        @param 15）复活广告载入中                 y005_relive4
        @param 16）看视频得皮肤点击               y006_video1
        @param 17）看视频得金币广告成功               y006_video2
        @param 18）看视频得金币广告失败                 y006_video3
        @param 19）看视频得金币广告载入中                 y006_video4
        @param 20）奖励点击分享          y007_share
        @param 21）奖励点击邀请          y007_invite
        @param 22）点击领取登陆奖励       y007_login
        @param 23）再来一局       y002_start3
        @param 24）复活分享       y007_share1
     */
    static FBEvent(type) {
        let eventS = "";
        switch (type) {
            case 1: //开始载入进度为0     y001_load1
            case 2: // 载入到一半 y001_load2
            case 3: // 载入完毕   y001_load3
                eventS = "loaded";
                break;
            case 4: //点击开始游戏-普通模式           y002_start1
                eventS = "y002_start1";
                break;
            case 5: //游戏复活界面弹出-普通模式                   y002_start2
                eventS = "y002_start2";
                break;
            case 6: //  6）点击解锁皮肤                   y003_skin1
                eventS = "y003_skin1";
                break;
            case 7: // 7）点击解锁皮肤成功                   y003_skin2
                eventS = "y003_skin2";
                break;
            case 8: //8）二倍奖励点击               y004_double1
                eventS = "erbei_dj";
                break;
            case 9: // 9）二倍奖励广告成功               y004_double2
                eventS = "erbei_sp_cg";
                break;
            case 10: //10）二倍奖励广告失败               y004_double3
                eventS = "erbei_sp_sb";
                break;
            case 11: // 11）二倍奖励广告载入中               y004_double4
                eventS = "erbei_wgg";
                break;
            case 12: //12）复活广告点击               y005_relive1
                eventS = "fuhuo_dj";
                break;
            case 13: //13）复活广告成功               y005_relive2
                eventS = "fuhuo_sp_cg";
                break;
            case 14: // 14）复活广告失败                 y005_relive3
                eventS = "fuhuo_sp_sb";
                break;
            case 15: //15）复活广告载入中                 y005_relive4
                eventS = "fuhuo_wgg";
                break;
            case 16: //16）看视频得皮肤点击               y006_video1
                eventS = "dpf_dj";
                break;
            case 17: //   17）看视频得金币广告成功               y006_video2
                eventS = "dpf_sp_cg";
                break;
            case 18: //18）看视频得金币广告失败                 y006_video3
                eventS = "dpf_sp_sb";
                break;
            case 19: //19）看视频得金币广告载入中                 y006_video4
                eventS = "dpf_wgg";
                break;
            case 20: // 20）奖励点击分享          y007_share
                eventS = "y007_share";
                break;
            case 21: //奖励点击邀请          y007_invite
                eventS = "y007_invite";
                break;
            case 22: //22）点击领取登陆奖励       y007_login
                eventS = "y007_login";
                break;
            case 23: //再来一局-普通模式        y002_start3
                eventS = "y002_start3";
                break;
            case 24: //24）复活分享-普通模式       y007_share1
                eventS = "y007_share1";
                break;
            case 25: //25）fps20以下
                eventS = "y010_fps20";
                break;
            case 26: //26）fps30以下
                eventS = "y010_fps30";
                break;
            case 27: //27）fps40以下
                eventS = "y010_fps40";
                break;
            case 28: //28）fps50以下
                eventS = "y010_fps50";
                break;
            case 29: //29）fps50及其以上
                eventS = "y010_fps60";
                break;
            case 30: //点击开始游戏-道具模式           y011_start1
                eventS = "y011_start1";
                break;
            case 31: //游戏复活界面弹出-道具模式                    y011_start2
                eventS = "y011_start2";
                break;
            case 32: //游戏再来一局-道具模式                    y011_start3
                eventS = "y011_start3";
                break;
            case 33: //排行榜邀请对战-首次
                eventS = "y101_vs1";
                break;
            case 34: //排行榜邀请对战-非首次
                eventS = "y101_vs2";
                break;
            case 35: //排行榜邀请对战-邀请进入
                eventS = "y101_vs3";
                break;
            case 36: //点击进入游戏自动掉起拉好友一起玩
                eventS = "y101_vs4";
                break;
            case 37: //点击进入游戏自动掉起拉好友一起玩，并且选择了关闭
                eventS = "y101_vs5";
                break;
            case 38: //从msg进入
                eventS = "y101_msg";
                break;
            case 39: //从msg进入
                eventS = "y101_shareRelive";
                break;
            case 40: //点击开始游戏-PK模式           y012_start1
                eventS = "y012_start1";
                break;
            case 41: //游戏复活界面弹出-PK模式                    y012_start2
                eventS = "y012_start2";
                break;
            case 42: //游戏再来一局-PK模式                    y012_start3
                eventS = "y012_start3";
                break;
            case 43: //
                eventS = "dpf_cp_cg";
                break;
            case 44: //
                eventS = "dpf_cp_sb";
                break;
            case 45: //13）复活广告成功               y005_relive2
                eventS = "fuhuo_cp_cg";
                break;
            case 46: // 14）复活广告失败                 y005_relive3
                eventS = "fuhuo_cp_sb";
                break;
            case 47: // 9）二倍奖励广告成功               y004_double2
                eventS = "erbei_cp_cg";
                break;
            case 48: //10）二倍奖励广告失败               y004_double3
                eventS = "erbei_cp_sb";
                break;
            case 49: // 9）二倍奖励广告成功               y004_double2
                eventS = "qiangntan_dj";
                break;
            case 50: //10）二倍奖励广告失败               y004_double3
                eventS = "qiangntan_sp_cg";
                break;
            case 51: //10）二倍奖励广告失败               y004_double3
                eventS = "qiangntan_sp_sb";
                break;
            case 52: //10）二倍奖励广告失败               y004_double3
                eventS = "qiangntan_cp_cg";
                break;
            case 53: //10）二倍奖励广告失败               y004_double3
                eventS = "qiangntan_cp_sb";
                break;
            case 54: //10）二倍奖励广告失败               y004_double3
                eventS = "qiangntan_wgg";
                break;
        }
        if (GameBaseData.isDebug) {
            console.log("eventS===" + eventS);
        }
        if (this.isFBSDK) {
            FBInstant.logEvent(eventS);
        }
    }
    static FBEventNew(type) {
        let eventS = "";
        switch (type) {
            case 0:
                eventS = "jrfmN";
                if (GameBaseData._newUser1 == 0 && touch.GameData.instance.record == 0 && touch.GameData.instance.record2 == 0 && touch.GameData.instance.star == 0) {
                    if (this.isFBSDK) {
                        FBInstant.logEvent("scjrfmN");
                    }
                    if (GameBaseData.isDebug) {
                        console.log("================scjrfm");
                    }
                    GameBaseData._newUser1 = 1;
                }
                break;
            case 1:
                eventS = "djksyx";
                break;
            case 2:
                if (this.jrTimse == 1 && this.isFBSDK) {
                    FBInstant.logEvent("decjrgk");
                } else if (this.jrTimse == 2 && this.isFBSDK) {
                    FBInstant.logEvent("dscjrgk");
                }
                this.jrTimse++;
                eventS = "jrgk";
                if (GameBaseData._newUser2 == 0 && touch.GameData.instance.record == 0 && touch.GameData.instance.record2 == 0 && touch.GameData.instance.star == 0) {
                    if (this.isFBSDK) {
                        FBInstant.logEvent("scjrgkN");
                    }
                    if (GameBaseData.isDebug) {
                        console.log("================scjrgkN");
                    }
                    GameBaseData._newUser2 = 1;
                }
                break;
            case 3:
                eventS = "cg10m";
                break;
            case 4:
                eventS = "cxfh";
                break;
            case 5:
                eventS = "jsjm";
                if (GameBaseData._newUser3 == 0 && touch.GameData.instance.record == 0 && touch.GameData.instance.record2 == 0 && touch.GameData.instance.star == 0) {
                    if (this.isFBSDK) {
                        FBInstant.logEvent("scjsjmN");
                    }
                    if (GameBaseData.isDebug) {
                        console.log("================scjsjm");
                    }
                    GameBaseData._newUser3 = 1;
                }
                break;
            case 6:
                eventS = "bufh1";
                break;
            case 7:
                eventS = "bufh2";
                break;
        }
        if (!this.isFBSDK) {
            if (GameBaseData.isDebug) {
                console.log("eventS===" + eventS);
            }
            return;
        }
        FBInstant.logEvent(eventS);
    }
    static deepCopy(obj) {
        var ary2 = JSON.parse(JSON.stringify(obj));
        return ary2;
    }
    static getCPFlag() {
        if (GameBaseData.modelType == 0) {
            if (GameBaseData.cpScore > 2) {
                return 1;
            }
        } else if (GameBaseData.modelType == 1) {
            if (GameBaseData.cpScore > 300) {
                return 1;
            }
        } else {
            return 1;
        }
        return 0;
    }
}
// fbsdk是否开启
GameBaseData.isFBSDK = true;
GameBaseData.isDebug = false;
GameBaseData.isErbei = false;
GameBaseData.isIOS = false;
GameBaseData.myRank = null;
GameBaseData.myRank_friend = null;
GameBaseData.allRank = [];
GameBaseData.friendRank = [];
GameBaseData.newModeMyRank = null;
GameBaseData.newModeallRank = [];
GameBaseData.myRank_model1 = null;
GameBaseData.myRank_friend_model1 = null;
GameBaseData.allRank_model1 = [];
GameBaseData.friendRank_model1 = [];
GameBaseData.beyondList = []; //超越列表
GameBaseData.beyondHead = []; //超越头像列表
GameBaseData.beyondLoadTime = 0; //超越头像拉取时间
GameBaseData.beyondRankLength_mode0 = 0;
GameBaseData.beyondRankLength_mode1 = 0;
GameBaseData.fbHead = "";
GameBaseData.rankUidToShare = []; //排行榜分享数据 模式0
GameBaseData.rankUidToShareModel1 = []; //排行榜分享数据 模式1
GameBaseData.FBContextID = ""; //创建房间号
GameBaseData.pkFriendUID = ""; //pk角色
GameBaseData.FBUpscore = false; //给好友上传成绩
// public static playModelType=0;//游戏模式 0正常,1新模式
GameBaseData.isShowGameView = false; //游戏界面是否显示
GameBaseData.UID = null;
// 当前模式
GameBaseData.modelType = 0;
// 当前模式难度
GameBaseData.modelDif = 0;
// 当前模式目标
GameBaseData.modelGoal = 0;
// 当前模式最大分数
GameBaseData.modelScore = 0;
// 当前模式速度
GameBaseData.modelSpeed = 0;
// 当前模式结束时候的分数，分数过低不弹出插屏
GameBaseData.cpScore = 0;
// 插屏广告次数，每隔一次出一下 匹配模式
GameBaseData.cpGGTimes = 0;
// 插屏广告次数，每隔一次出一下 米数模式
GameBaseData.cpGGTimesLvl = 0;
//插屏广告
GameBaseData.CPGG = [
    "792794774390776_808981456105441",
    "792794774390776_946149259055326",
    "792794774390776_808981052772148",
    "792794774390776_808981456105441",
];
GameBaseData.CPGGIndex = 0; //当前载入广告
GameBaseData.CPGGErrtimes = 0; //连续失败次数
GameBaseData.CPGGObj = null; //广告
GameBaseData.CPGGState = -1; //广告状态
GameBaseData.CPGGPlayTime = 0; //广告播放时间
//视频广告
GameBaseData.GGIndex = 0; //当前载入广告
GameBaseData.GGErrtimes = 0; //连续失败次数
GameBaseData.GG = null; //广告
GameBaseData.GGState = -1; //广告状态
GameBaseData.GGPlayTime = 0; //广告播放时间
GameBaseData.GGID = [
    // "792794774390776_946149482388637",//皮肤
    // "792794774390776_800722810264639",//2倍广告
    // "792794774390776_908932839443635"//复活
    "792794774390776_1150570965279820",
    "792794774390776_1150571145279802",
    "792794774390776_1150571315279785",
];
//当前游戏次数（20200422修改，整个游戏死亡间隔一次弹插屏）
GameBaseData.deadcount = 0;
//多人模式不足10分的当前游戏次数（20200429修改）
GameBaseData.multiDeadCount = 0;
//单人模式不足300分的当前游戏次数（20200429修改）
GameBaseData.singleDeadCount = 0;
//PK模式不足300分的当前游戏次数（20200429修改）
GameBaseData.pkDeadCount = 0;
GameBaseData.reviveCount = 0; //复活次数
GameBaseData.gameLv = 0; //游戏难易度
GameBaseData.gameSpeed = 1; //游戏难易系数
GameBaseData.gameLvInit = 0; //游戏难易度是否初始化  1是已经初始化
GameBaseData.isRewardedVideoAsync = true;
GameBaseData.isInterstitialAdAsync = true;
GameBaseData.jrTimse = 0;
/**
 * 新用户
 */
GameBaseData._newUser1 = 0;
GameBaseData._newUser2 = 0;
GameBaseData._newUser3 = 0;
class RankObj {}
//# sourceMappingURL=GameBaseData.js.map