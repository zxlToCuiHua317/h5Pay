/**
 * momo
 */
var touch;
(function (touch) {
    /**
     * 游戏界面
     */
    class GameView extends ui.GameViewUI {
        /**
         * 构造函数
         */
        constructor(main) {
            super();
            /**
             * 主对象
             */
            this._main = null;
            /**
             * 死亡次数
             */
            this._deadNum = 0;
            /**
             * 复活倒计时
             */
            this._reviveCountdown = 0;
            /**
             * 复活中倒计时
             */
            this._revivingCountdown = 0;
            /**
             * 排行榜纹理
             */
            this._rankTexture = null;
            /**
             * 在线奖励剩余时间
             */
            this._onlineRemainingTime = 0;
            /**
             * 分数
             */
            this._score = 0;
            this._pkscore = 0;
            //已经超越到好友的编号
            this._BeyondFriendMaxIndex = 0;
            //已经超越的数组
            this._beyondList = [];
            //是否正在播放超越
            this._isPlayBeyondF = false;
            this._count = 0;
            this.nearFriends = []; //附近的角色
            this.fbEventType = 0;
            this.isVictory = false;
            this.videoType = -1;
            this.tgID = 0;
            this.tempBeyondList = [];
            this.tempBeyondWorldCount = 0;
            this.tempReadyBeyondRank = null;
            this.tempISReadyBeyondRank = true;
            this.tempBeyondScore = this.getBeyondTagerScore(); //当前待超越的分
            this._main = main;
            this.onScoreChange(0);
            this.onInitLife();
            this._main.event(touch.GameEvent.RESET);
            this.tfScore.visible = false;
            this.boxRevive.visible = false;
            this.boxReviving.visible = false;
            this.boxFinalScore.visible = false;
            this.OS_Menu.visible = false;
            this.boxLife.visible = false;
            this.boxModel2.visible = false;
            this.BeyondFriend.visible = false;
            this.BeyondFriend.alpha = 0;
            this.boxGuide.visible = true;
            this.aniGuide.play(0, true);
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClose, null, false);
            this.btnWatchVideo.clickHandler = Laya.Handler.create(this, this.onWathVideo, null, false);
            this.btnShareRevive.clickHandler = Laya.Handler.create(this, this.onShareRevive, null, false);
            this.btnShareContinue.clickHandler = Laya.Handler.create(this, this.onShareContinue, null, false);
            this.btnShare.clickHandler = Laya.Handler.create(this, this.onShare, null, false);
            this.btnTg.clickHandler = Laya.Handler.create(this, this.onTg, null, false);
            this.btn_tg.clickHandler = Laya.Handler.create(this, this.onOpenTg, null, false);
            this.btnoverShare.clickHandler = Laya.Handler.create(this, this.onShareGameover, null, false);
            this.OS_Menu_Close.clickHandler = Laya.Handler.create(this, this.closeGameOverShare, null, false);
            this.OS_Menu_Share.clickHandler = Laya.Handler.create(this, this.onGameOverShare, null, false);
            this.btnBack.clickHandler = Laya.Handler.create(this, this.onBack, null, false);
            this.btnRestart.clickHandler = Laya.Handler.create(this, this.onRestart, null, false);
            this.btnOnlineReward.clickHandler = Laya.Handler.create(this, this.onOnlineReward, null, false);
            this.spriteOpenRank.on(Laya.Event.CLICK, this, this.onOpenRank);
            this._main.on(touch.GameEvent.LIFE_CHANGE, this, this.onLifeChange);
            this._main.on(touch.GameEvent.SCROE_CHANGE, this, this.onScoreChange);
            this._main.on(touch.GameEvent.DEAD, this, this.onDead);
            this._main.on(touch.GameEvent.CLOSE_RANK, this, this.onCloseRank);
            Laya.stage.once(Laya.Event.MOUSE_DOWN, this, this.onStart);
            this._BeyondFriendMaxIndex = 0; //初始值
            this._isPlayBeyondF = false;
            this._count = 0;
            this.fbEventType = 0;
            this._initGameOverRankEvent();
            // Laya.Tween.to(this.btnoverShare,{scaleX:0.8,scaleY:0.8},500,Laya.Ease.linearIn,Laya.Handler.create(this,this.onTween1));
        }
        /**
         * 销毁函数
         */
        destroy() {
            // Laya.timer.clear(this, this.timeLoop);
            this.destroyRankView();
            Laya.timer.clear(this, this.updateRankView);
            Laya.timer.clear(this, this.onReviveCountDown);
            Laya.timer.clear(this, this.onRevivingCountDown);
            this._main.off(touch.GameEvent.DEAD, this, this.onDead);
            this._main.off(touch.GameEvent.SCROE_CHANGE, this, this.onScoreChange);
            this._main.off(touch.GameEvent.LIFE_CHANGE, this, this.onLifeChange);
            this._main.off(touch.GameEvent.CLOSE_RANK, this, this.onCloseRank);
            this.spriteOpenRank.off(Laya.Event.CLICK, this, this.onOpenRank);
            if (this.btnClose.clickHandler != null) {
                this.btnClose.clickHandler.recover();
                this.btnClose.clickHandler = null;
            }
            if (this.btnWatchVideo.clickHandler != null) {
                this.btnWatchVideo.clickHandler.recover();
                this.btnWatchVideo.clickHandler = null;
            }
            if (this.btnBack.clickHandler != null) {
                this.btnBack.clickHandler.recover();
                this.btnBack.clickHandler = null;
            }
            if (this.btnRestart.clickHandler != null) {
                this.btnRestart.clickHandler.recover();
                this.btnRestart.clickHandler = null;
            }
            if (this.btnOnlineReward.clickHandler != null) {
                this.btnOnlineReward.clickHandler.recover();
                this.btnOnlineReward.clickHandler = null;
            }
            if (this.btnShare.clickHandler != null) {
                this.btnShare.clickHandler.recover();
                this.btnShare.clickHandler = null;
            }
            if (this.btnTg.clickHandler != null) {
                this.btnTg.clickHandler.recover();
                this.btnTg.clickHandler = null;
            }
            this._main = null;
            super.destroy();
        }
        // //初始播放插屏(20200421 开始插屏修改)
        // private checkGGAndPlayGG()
        // {
        // 	console.log("进入游戏次数:---------" + GameBaseData.playGameNum);
        // 	if(GameBaseData.playGameNum > 0)
        // 	{
        // 		console.log("开始游戏播放插屏!!");
        // 		GameBaseData.PlayCPGG2(() => {
        // 		}, () => {
        // 			console.log("播放成功");
        // 		}, () => {
        // 			console.log("播放失败");
        // 		}, () => {
        // 			console.log("播放失败");
        // 		});
        // 	}
        // 	GameBaseData.playGameNum++;
        // }
        _initGameOverRankEvent() {
            for (let index = 0; index < 3; index++) {
                let element = this.friendBox.getChildByName("boxRank" + index);
                let btn = element.getChildByName("pkFriend");
                // btn.clickHandler = Laya.Handler.create(this, this.onShareFriend, null, false);
                let that = this;
                btn.offAll(Laya.Event.CLICK);
                btn.on(Laya.Event.CLICK, this, function () {
                    if (GameBaseData.isDebug) {
                        console.log('click handler ' + index);
                    }
                    that.touchBtn_FbShareTop3(btn, index);
                });
            }
            if (GameBaseData.modelType > 1) {
                this.pkFriend0.visible = false;
                this.pkFriend1.visible = false;
                this.pkFriend2.visible = false;
            } else {
                Laya.Tween.to(this.pkFriend0, {
                    scaleX: 0.8,
                    scaleY: 0.8
                }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween0_1));
                Laya.Tween.to(this.pkFriend1, {
                    scaleX: 0.8,
                    scaleY: 0.8
                }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween1_1));
                Laya.Tween.to(this.pkFriend2, {
                    scaleX: 0.8,
                    scaleY: 0.8
                }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween2_1));
            }
        }
        onTween0_0() {
            Laya.Tween.clearTween(this.onTween0_0);
            this.pkFriend0.scaleX = 1;
            this.pkFriend0.scaleY = 1;
            Laya.Tween.to(this.pkFriend0, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween0_1));
        }
        onTween0_1() {
            Laya.Tween.clearTween(this.onTween0_1);
            this.pkFriend0.scaleX = 0.8;
            this.pkFriend0.scaleY = 0.8;
            Laya.Tween.to(this.pkFriend0, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween0_0));
        }
        onTween1_0() {
            Laya.Tween.clearTween(this.onTween1_0);
            this.pkFriend1.scaleX = 1;
            this.pkFriend1.scaleY = 1;
            Laya.Tween.to(this.pkFriend1, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween1_1));
        }
        onTween1_1() {
            Laya.Tween.clearTween(this.onTween1_1);
            this.pkFriend1.scaleX = 0.8;
            this.pkFriend1.scaleY = 0.8;
            Laya.Tween.to(this.pkFriend1, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween1_0));
        }
        onTween2_0() {
            Laya.Tween.clearTween(this.onTween2_0);
            this.pkFriend2.scaleX = 1;
            this.pkFriend2.scaleY = 1;
            Laya.Tween.to(this.pkFriend2, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween2_1));
        }
        onTween2_1() {
            Laya.Tween.clearTween(this.onTween2_1);
            this.pkFriend2.scaleX = 0.8;
            this.pkFriend2.scaleY = 0.8;
            Laya.Tween.to(this.pkFriend2, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween2_0));
        }
        onTweenShareBtn0() {
            Laya.Tween.clearTween(this.onTweenShareBtn0);
            this.OS_Menu_Share.scaleX = 1;
            this.OS_Menu_Share.scaleY = 1;
            Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn1));
        }
        onTweenShareBtn1() {
            Laya.Tween.clearTween(this.onTweenShareBtn1);
            this.OS_Menu_Share.scaleX = 0.8;
            this.OS_Menu_Share.scaleY = 0.8;
            Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn0));
        }
        /**
         * 开始游戏
         */
        onStart() {
            GameBaseData.initGameLv();
            this.initBeyondFriend();
            this.tfScore.visible = true;
            this.boxGuide.visible = false;
            this.boxLife.visible = GameBaseData.modelType == 1;
            this.boxModel2.visible = GameBaseData.modelType > 1;
            this.fStar0.visible = false;
            this.fStar1.visible = false;
            this.fStar2.visible = false;
            this.aniGuide.stop();
            this._main.event(touch.GameEvent.START);
            GameBaseData.FBEventNew(2);
        }
        setPKScore(score, speed) {
            if (GameBaseData.gameLv == 0) {
                if (speed > 35) {
                    this._pkscore += (score - this._score) * 10;
                } else if (speed > 30) {
                    this._pkscore += (score - this._score) * 7;
                } else if (speed > 25) {
                    this._pkscore += (score - this._score) * 8;
                } else {
                    this._pkscore += (score - this._score) * 3;
                }
            } else {
                if (speed > 39) {
                    this._pkscore += (score - this._score) * 10;
                } else if (speed > 33) {
                    this._pkscore += (score - this._score) * 7;
                } else if (speed > 25) {
                    this._pkscore += (score - this._score) * 8;
                } else {
                    this._pkscore += (score - this._score) * 3;
                }
            }
        }
        /**
         * 分数更新
         * @param score
         */
        onScoreChange(score) {
            if (GameBaseData.modelType > 1) {
                this.setPKScore(score, GameBaseData.modelSpeed);
                this._score = score;
                //+"\nStill " + (GameBaseData.modelGoal - score) + "m"
                this.tfScore.text = "Still " + (GameBaseData.modelGoal - score) + "m";
                this.modelPro.value = this._pkscore / GameBaseData.modelScore;
                this.modelPre.text = Math.floor(this._pkscore * 100 / GameBaseData.modelScore) + "%";
                if (score > 10 && this.fbEventType == 0) {
                    this.fbEventType = 1;
                    GameBaseData.FBEventNew(3);
                }
                if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3) {
                    this.fStar2.visible = true;
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star2) {
                    this.fStar1.visible = true;
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star1) {
                    this.fStar0.visible = true;
                }
            } else {
                this._score = score;
                if (GameBaseData.modelType == 0) {
                    this.tfScore.text = "Surpass " + score + " players";
                    if (score > 1 && this.fbEventType == 0) {
                        this.fbEventType = 1;
                        GameBaseData.FBEventNew(3);
                    }
                    if (this._score > 0) {
                        touch.GameData.instance.addVideoNum(1, this._score, 0);
                    }
                } else {
                    this.tfScore.text = score + "m";
                    if (score > 10 && this.fbEventType == 0) {
                        this.fbEventType = 1;
                        GameBaseData.FBEventNew(3);
                    }
                    if (this._score > 0) {
                        touch.GameData.instance.addVideoNum(9, this._score, 0);
                    }
                }
                // this.updataBeyondFriend();
                this.updataBeyondFriend2();
                this.showUnlockSkin();
            }
        }
        /**
         * 生命更新
         * @param score
         */
        onLifeChange(lifeNum, lifeFlag) {
            this.pbProgress.value = lifeNum / 100;
            if (lifeFlag == 1) { //增加桃心
                this.onChangeLife(true);
            } else if (lifeFlag == 2) { //减少桃心
                this.onChangeLife(false);
            }
        }
        onInitLife() {
            if (GameBaseData.modelType == 1) {
                this.pbProgress.visible = true;
            } else {
                this.pbProgress.visible = false;
            }
            this.l1.visible = false;
            this.l2.visible = false;
            this.l3.visible = false;
            this.l4.visible = false;
            this.l5.visible = false;
            this.l1Gray.visible = true;
            this.l2Gray.visible = true;
            this.l3Gray.visible = true;
            this.l4Gray.visible = true;
            this.l5Gray.visible = true;
        }
        onChangeLife(isAdd) {
            if (isAdd) {
                if (!this.l1.visible) {
                    this.l1.visible = true;
                    this.l1.scaleX = this.l1.scaleY = 0.1;
                    this.l1.x = 310;
                    this.l1.y = 77;
                    Laya.Tween.to(this.l1, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 23,
                        y: 23
                    }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l1Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l2.visible) {
                    this.l2.visible = true;
                    this.l2.scaleX = this.l2.scaleY = 0.1;
                    this.l2.x = 310;
                    this.l2.y = 77;
                    Laya.Tween.to(this.l2, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 76,
                        y: 23
                    }, 350, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l2Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l3.visible) {
                    this.l3.visible = true;
                    this.l3.scaleX = this.l3.scaleY = 0.1;
                    this.l3.x = 310;
                    this.l3.y = 77;
                    Laya.Tween.to(this.l3, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 129,
                        y: 23
                    }, 400, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l3Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l4.visible) {
                    this.l4.visible = true;
                    this.l4.scaleX = this.l4.scaleY = 0.1;
                    this.l4.x = 310;
                    this.l4.y = 77;
                    Laya.Tween.to(this.l4, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 182,
                        y: 23
                    }, 450, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l4Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l5.visible) {
                    this.l5.visible = true;
                    this.l5.scaleX = this.l5.scaleY = 0.1;
                    this.l5.x = 310;
                    this.l5.y = 77;
                    Laya.Tween.to(this.l5, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 235,
                        y: 23
                    }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l5Gray.visible = false;
                    }));
                    return;
                }
            } else {
                this.boxLifeTip.visible = true;
                this.boxLifeTip.scaleX = this.boxLifeTip.scaleY = 1;
                this.boxLifeTip.x = 120;
                this.boxLifeTip.y = 23;
                Laya.Tween.to(this.boxLifeTip, {
                    scaleX: 2.5,
                    scaleY: 2.5,
                    x: 300,
                    y: 600
                }, 1000, Laya.Ease.bounceOut, Laya.Handler.create(this, () => {
                    this.boxLifeTip.visible = false;
                }), 0);
                if (this.l5.visible) {
                    this.l5.visible = false;
                    this.l5Gray.visible = true;
                    // this.l5.scaleX=this.l5.scaleY=1;
                    // Laya.Tween.to(this.l5, {scaleX:0,scaleY:0}, 300, Laya.Ease.elasticIn,Laya.Handler.create(this, () => {
                    // 	this.l5.visible = false;
                    // }), 0);
                    return;
                }
                if (this.l4.visible) {
                    this.l4.visible = false;
                    this.l4Gray.visible = true;
                    // this.l4.scaleX=this.l4.scaleY=1;
                    // Laya.Tween.to(this.l4, {scaleX:0,scaleY:0}, 300, Laya.Ease.elasticIn,Laya.Handler.create(this, () => {
                    // 	this.l4.visible = false;
                    // }), 0);
                    return;
                }
                if (this.l3.visible) {
                    // this.l3.scaleX=this.l3.scaleY=1;
                    // Laya.Tween.to(this.l3, {scaleX:0,scaleY:0}, 300, Laya.Ease.elasticIn,Laya.Handler.create(this, () => {
                    // 	this.l3.visible = false;
                    // }), 0);
                    this.l3.visible = false;
                    this.l3Gray.visible = true;
                    return;
                }
                if (this.l2.visible) {
                    // this.l2.scaleX=this.l2.scaleY=1;
                    // Laya.Tween.to(this.l2, {scaleX:0,scaleY:0}, 300, Laya.Ease.elasticIn,Laya.Handler.create(this, () => {
                    // 	this.l2.visible = false;
                    // }), 0);
                    this.l2.visible = false;
                    this.l2Gray.visible = true;
                    return;
                }
                if (this.l1.visible) {
                    // this.l1.scaleX=this.l1.scaleY=1;
                    // Laya.Tween.to(this.l1, {scaleX:0,scaleY:0}, 1000, Laya.Ease.elasticIn,Laya.Handler.create(this, () => {
                    // 	this.l1.visible = false;
                    // }), 0);
                    this.l1.visible = false;
                    this.l1Gray.visible = true;
                    return;
                }
            }
        }
        /**
         * 死亡
         */
        onDead() {
            //20200429修改游戏死亡之后广告逻辑----hhc			
            if (GameBaseData.modelType == 0) //多人模式
            {
                if (this._score <= 10) //小于10分，每两局弹1次插屏，如果插屏失败，直接弹结束界面
                {
                    GameBaseData.multiDeadCount++;
                    if (GameBaseData.multiDeadCount >= 2) {
                        FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                    } else {
                        this.gameOver();
                    }
                } else if (this._score > 10 && this._score <= 25) //在10分到25分之间，必弹插屏，如果插屏失败，直接弹结束界面
                {
                    FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                } else //大于30分，弹复活界面
                {
                    this.newOnDead();
                }
            } else //单人模式+PK模式
            {
                if (this._score <= 300) {
                    if (GameBaseData.modelType == 1) //单人模式
                    {
                        GameBaseData.singleDeadCount++;
                        if (GameBaseData.singleDeadCount >= 2) {
                            FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                        } else {
                            this.gameOver();
                        }
                    } else //PK模式
                    {
                        GameBaseData.pkDeadCount++;
                        if (GameBaseData.pkDeadCount >= 2) {
                            FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                        } else {
                            this.gameOver();
                        }
                    }
                } else if (this._score > 300 && this._score <= 800) //在10分到30分之间，必弹插屏，如果插屏失败，直接弹结束界面
                {
                    FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                } else //大于30分，弹复活界面
                {
                    this.newOnDead();
                }
            }
        }
        newOnDead() {
            this.isVictory = false;
            if (GameBaseData.modelType > 1 && this._score >= GameBaseData.modelGoal) {
                this._deadNum = 3;
                if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3) {
                    this.isVictory = true;
                }
                this.victory.visible = true;
                this.victory.scaleX = this.victory.scaleY = 1.0;
                this.victory.y = 200;
                Laya.Tween.to(this.victory, {
                    scaleX: 1.5,
                    scaleY: 1.5,
                    y: 425
                }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {}), 0, true, true);
            }
            // Laya.timer.once(1000, this, this.doDead);
            this.doDead();
        }
        /**
         * 执行死亡(20200429这个现在改成了复活的方法-----hhc)
         */
        doDead() {
            // if (GameBaseData.modelType == 0) {
            // this._deadNum = 1;//暂时封住复活广告
            // GameBaseData.FBEvent(GameBaseData.modelType == 0 ? 5 : 31);
            // if (GameBaseData.isFBSDK) {
            // 	if (GameBaseData.modelType == 0) {
            // 		if (Math.floor(this._score / 10) * 10 > 500) {
            // 			FBInstant.logEvent("battleScore999");
            // 		} else {
            // 			FBInstant.logEvent("battleScore" + Math.floor(this._score / 10) * 10);
            // 		}
            // 	} else {
            // 		if (Math.floor(this._score / 500) * 500 > 100000) {
            // 			FBInstant.logEvent("levelScore99999");
            // 		} else {
            // 			FBInstant.logEvent("levelScore" + Math.floor(this._score / 500) * 500);
            // 		}
            // 	}
            // }
            // }
            // this.videoType = GameBaseData.getVideoFlag(2);//&& this.videoType >= 0
            // if (this._deadNum <= 2  && ((GameBaseData.modelType == 0 && this._score > 2) || (GameBaseData.modelType >= 1 && this._score > 100))) {
            // 	GameBaseData.FBEventNew(4);
            // this._deadNum++;
            this.tfScore.visible = false;
            this.boxLife.visible = false;
            this.boxRevive.visible = true;
            this.BeyondFriend.visible = false;
            GameBaseData.FBEvent(GameBaseData.modelType == 0 ? 5 : (GameBaseData.modelType == 1 ? 31 : 41));
            GameBaseData.reviveCount++;
            var showShareBtn = false;
            // if (GameBaseData.reviveCount <= 3) {
            // 	showShareBtn = GameBaseData.reviveCount % 3 == 0;
            // } else {
            // 	showShareBtn = GameBaseData.reviveCount % 2 == 1;
            // }
            this.btn_tg.visible = false;
            if (!GameBaseData.isIOS) {
                this.btn_tg.visible = true;
                this.tgID = Math.floor(6 * Math.random()) + 1;
                this.btn_tg.skin = "index/tg" + this.tgID + ".jpg";
                this.onTweenTGBtn0();
            }
            if (showShareBtn) { //分享
                this.btnShareRevive.visible = true;
                this.btnWatchVideo.visible = false;
                this.onTweenShareReliveBtn0();
                Laya.Tween.clearAll(this.btnWatchVideo);
                //分享按钮开发
                this.btnShareContinue.visible = true;
            } else {
                this.btnShareRevive.visible = false;
                this.btnWatchVideo.visible = true;
                this.onTweenWatchBtn0();
                Laya.Tween.clearAll(this.btnShareRevive);
                this.btnShareContinue.visible = false;
            }
            this.doReviveCountDown();
            // if (GameBaseData.isFBSDK) {
            // 	if (GameBaseData.modelType == 0) {
            // 		if (Math.floor(this._score / 10) * 10 > 500) {
            // 			FBInstant.logEvent("battleScore999");
            // 		} else {
            // 			FBInstant.logEvent("battleScore" + Math.floor(this._score / 10) * 10);
            // 		}
            // 	} else {
            // 		if (Math.floor(this._score / 500) * 500 > 100000) {
            // 			FBInstant.logEvent("levelScore99999");
            // 		} else {
            // 			FBInstant.logEvent("levelScore" + Math.floor(this._score / 500) * 500);
            // 		}
            // 	}
            // }
            // }
            // else {
            // 	this._deadNum = 0;
            // 	this.gameOver();
            // 	// this.playCPGG();
            // }
        }
        onTweenTGBtn0() {
            Laya.Tween.clearTween(this.onTweenTGBtn0);
            this.btn_tg.scaleX = 1;
            this.btn_tg.scaleY = 1;
            Laya.Tween.to(this.btn_tg, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenTGBtn1), 0, true, true);
        }
        onTweenTGBtn1() {
            Laya.Tween.clearTween(this.onTweenTGBtn1);
            this.btn_tg.scaleX = 0.8;
            this.btn_tg.scaleY = 0.8;
            Laya.Tween.to(this.btn_tg, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenTGBtn0), 0, true, true);
        }
        onTweenWatchBtn0() {
            Laya.Tween.clearTween(this.onTweenShareBtn0);
            this.btnWatchVideo.scaleX = 1;
            this.btnWatchVideo.scaleY = 1;
            Laya.Tween.to(this.btnWatchVideo, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenWatchBtn1), 0, true, true);
        }
        onTweenWatchBtn1() {
            Laya.Tween.clearTween(this.onTweenShareBtn1);
            this.btnWatchVideo.scaleX = 0.8;
            this.btnWatchVideo.scaleY = 0.8;
            Laya.Tween.to(this.btnWatchVideo, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenWatchBtn0), 0, true, true);
        }
        onTweenShareReliveBtn0() {
            Laya.Tween.clearTween(this.onTweenShareReliveBtn0);
            this.btnShareRevive.scaleX = 1;
            this.btnShareRevive.scaleY = 1;
            Laya.Tween.to(this.btnShareRevive, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareReliveBtn1), 0, true, true);
        }
        onTweenShareReliveBtn1() {
            Laya.Tween.clearTween(this.onTweenShareReliveBtn1);
            this.btnShareRevive.scaleX = 0.8;
            this.btnShareRevive.scaleY = 0.8;
            Laya.Tween.to(this.btnShareRevive, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareReliveBtn0), 0, true, true);
        }
        /**
         * 游戏结束,每隔1次出插屏
         */
        // private playCPGG(): void {
        // 	if (this.isVictory) {
        // 		this.isVictory = false;
        // 		// GameBaseData.isErbei=false;
        // 		this.gameOver();
        // 		return;
        // 	}
        // 	let adsId = GameBaseData.getVideoFlag(3);
        // 	if (adsId < 0) {
        // 		GameBaseData.FBEvent(54);
        // 		this.gameOver();
        // 		return;
        // 	}
        // 	if (adsId >= 10) {
        // 		GameBaseData.PlayCPGG2(() => {
        // 		}, () => {
        // 			this.gameOver();
        // 			GameBaseData.FBEvent(52);
        // 		}, () => {
        // 			this.gameOver();
        // 			GameBaseData.FBEvent(53);
        // 		}, () => {
        // 			this.gameOver();
        // 			GameBaseData.FBEvent(53);
        // 		});
        // 	} else {
        // 		GameBaseData.playVideo2(() => {
        // 			this.gameOver();
        // 			GameBaseData.FBEvent(50);
        // 		}, () => {
        // 			this.gameOver();
        // 			GameBaseData.FBEvent(51);
        // 		}, () => {
        // 			this.gameOver();
        // 			GameBaseData.FBEvent(51);
        // 		}, () => {
        // 		});
        // 	}
        // }
        onTg() {
            this._main.event(touch.GameEvent.OPEN_GAME);
        }
        onOpenTg() {
            GameBaseData.OpenOtherGame(this.tgID - 1, (data) => {
                // Notice.show("=======" + data);
            });
        }
        onShare() {
            this._main.event(touch.GameEvent.OPEN_GIFT);
        }
        openGift() {
            this.imgAward.visible = false;
            this.btnShare.visible = false;
            let curIndex = touch.GameData.instance.onlineIndex;
            for (let index = 0; index < touch.GameConfig.ONLINE_GIFT.length; index++) {
                let onlineGift = touch.GameConfig.ONLINE_GIFT[index];
                if (onlineGift.index <= curIndex) {
                    continue;
                }
                if (onlineGift.time <= touch.GameData.instance.onlineTime) {
                    if (GameBaseData.getVideoFlag(0) >= 0) {
                        this.btnShare.visible = true;;
                        this.imgAward.visible = true;
                    }
                }
                break;
            }
            if (touch.GameData.instance.dailyVaild) {
                this.btnShare.visible = true;
                this.imgAward.visible = true;
            }
            this.btnTg.visible = false;
            if (!GameBaseData.isIOS) {
                // this.btnTg.visible = true;
            }
            this.imgTG.visible = false;
            if (touch.GameData.instance.isGame1On || touch.GameData.instance.isGame2On || touch.GameData.instance.isGame3On || touch.GameData.instance.isGame4On || touch.GameData.instance.isGame5On || touch.GameData.instance.isGame6On) {
                // this.imgTG.visible = true;
            }
        }
        /**
         * 游戏结束
         */
        gameOver() {
            GameBaseData.FBEventNew(5);
            GameBaseData.sendToFBBestScore(this._score);
            this.tfScore.visible = false;
            this.boxLife.visible = false;
            this.BeyondFriend.visible = false;
            this.tfFinalScore.text = this._score.toString();
            this._main.event(touch.GameEvent.GAME_OVER, parseInt(this.tfFinalScore.text));
            this.boxFinalScore.visible = true;
            this.starBox.visible = false;
            this.openGift();
            if (GameBaseData.modelType >= 2) {
                touch.GameData.instance.addVideoNum(26, 0, 1);
                if (this._score > touch.GameData.instance.record2) {
                    touch.GameData.instance.record2 = this._score;
                }
                let starTemp = touch.GameData.instance.star;
                this.tfFinalScore.text = "" + this._pkscore;
                if (this._pkscore > touch.GameData.instance.pkNums[GameBaseData.modelType - 2]) {
                    touch.GameData.instance.addPKNum(GameBaseData.modelType - 2, this._pkscore);
                }
                this.tfBestScore.text = "BestRecord:" + touch.GameData.instance.pkNums[GameBaseData.modelType - 2];
                this.starBox.visible = true;
                this.imgNewRecord.visible = false;
                this.score0.text = "" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star1;
                this.score1.text = "" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star2;
                this.score2.text = "" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3;
                this.star0.visible = false;
                this.star1.visible = false;
                this.star2.visible = false;
                if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3) {
                    this.star2.visible = true;
                    this.star1.visible = true;
                    this.star0.visible = true;
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 3) {
                        touch.GameData.instance.setAddStar(3 - touch.GameData.instance.pkComNums[GameBaseData.modelType - 2]);
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 3);
                    }
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star2) {
                    this.star1.visible = true;
                    this.star0.visible = true;
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 2) {
                        touch.GameData.instance.setAddStar(2 - touch.GameData.instance.pkComNums[GameBaseData.modelType - 2]);
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 2);
                    }
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star1) {
                    this.star0.visible = true;
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 1) {
                        touch.GameData.instance.setAddStar(1 - touch.GameData.instance.pkComNums[GameBaseData.modelType - 2]);
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 1);
                    }
                }
                this.victory.visible = false;
                if (this._score >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].goal) {
                    // this.victory.visible = true;
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 4) {
                        touch.GameData.instance.setAddStar(touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].ex);
                        if (touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].ex > 0) {
                            touch.Notice.show("Sucessful get ertra +" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].ex);
                        }
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 4);
                    }
                    if (this.star2.visible) {
                        this.btnRestart.visible = false;
                    }
                }
                if (GameBaseData.newModeallRank) {
                    this.showFBFriendTop3(GameBaseData.newModeallRank);
                }
                this.setFBFriendList();
            } else if (GameBaseData.modelType == 0) {
                this.imgNewRecord.visible = this._score > touch.GameData.instance.record;
                //有挑战则发送挑战信息
                if (GameBaseData.isDebug) {
                    console.log("有挑战则发送挑战信息");
                }
                GameBaseData.gameOverTurnFriend(this._score, "MULTI");
                if (this._score > touch.GameData.instance.record && touch.GameData.instance.record > 10) {
                    // GameData.instance.saveFBobj();
                    // this.setFBFriendList();
                    //最高分出界面
                    touch.GameData.instance.record = this._score;
                    this.openGameOverShare(this._score);
                } else {
                    if (this._score > touch.GameData.instance.record) {
                        touch.GameData.instance.record = this._score;
                    }
                    this.nearFriends = GameBaseData.GetNeerPlayer();
                    this.showFBFriendTop3(this.nearFriends);
                    this.onOnlineReward();
                }
                touch.GameData.instance.addVideoNum(6, 0, 1);
                touch.GameData.instance.saveFBobj();
                this.setFBFriendList();
                this.tfBestScore.text = "BestRecord:" + touch.GameData.instance.record;
            } else {
                this.imgNewRecord.visible = this._score > touch.GameData.instance.record2;
                //有挑战则发送挑战信息
                if (GameBaseData.isDebug) {
                    console.log("有挑战则发送挑战信息" + GameBaseData.modelType);
                }
                GameBaseData.gameOverTurnFriend(this._score + "m", "SINGLE");
                if (this._score > 3000) { //超过3000直接拉起与好友一起玩
                    if (touch.TipDialog.gameTimes < 3) {
                        touch.TipDialog.gameTimes = 3;
                    }
                }
                if (this._score > touch.GameData.instance.record2 && touch.GameData.instance.record2 > 2000) {
                    // GameData.instance.saveFBobj();
                    // this.setFBFriendList();
                    //最高分出界面
                    touch.GameData.instance.record2 = this._score;
                    this.openGameOverShare(this._score);
                } else {
                    if (this._score > touch.GameData.instance.record2) {
                        touch.GameData.instance.record2 = this._score;
                    }
                    this.nearFriends = GameBaseData.GetNeerPlayer();
                    this.showFBFriendTop3(this.nearFriends);
                    this.onOnlineReward();
                }
                touch.GameData.instance.addVideoNum(14, 0, 1);
                touch.GameData.instance.saveFBobj();
                this.setFBFriendList();
                this.tfBestScore.text = "BestRecord:" + touch.GameData.instance.record2;
            }
            GameBaseData.gameLvInit = 0;
            this.updateOnlineReward();
            this.showRankView();
            // this.playCPGG();
            this.showUnlockSkin();
        }
        showUnlockSkin() {
            if (this.boxTip.visible)
                return;
            let myId = touch.GameData.instance.getNewTipFlag();
            this.boxTip.visible = false;
            if (myId > 0) {
                this.imgTip.skin = "index/skin" + myId + ".png";
                this.boxTip.visible = true;
                this.boxTip.x = 200;
                Laya.Tween.to(this.boxTip, {
                    x: 0
                }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.boxTip, {
                        x: 0
                    }, 2000, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.boxTip.visible = false;
                        this.showUnlockSkin();
                    }));
                }));
            }
        }
        openGameOverShare(score) {
            this.NextBox.visible = false;
            this.OS_Menu.visible = true;
            let modeString = GameBaseData.modelType == 0 ? "MULTI" : "SINGLE";
            let scoreString = GameBaseData.modelType == 0 ? score + "" : score + "m";
            this.OS_Menu_Score.text = "" + scoreString;
            this.OS_Menu_ScoreB.text = "" + scoreString; //分数赋值
            this.OS_Menu_top.text = modeString; //模式赋值
            this.OS_Menu_topB.text = modeString;
            // this.OS_Menu_Score.visible = false
            // this.OS_Menu_ScoreB.visible = false
            // this.OS_Menu_top.visible = false
            // this.OS_Menu_topB.visible = false
            this.OS_Menu_bg.skin = "./res/skin/fx.png";
            // this.OS_Menu_Head.visible = false;
            // this.OS_Menu_bg.on(Laya.Event.LOADED, this, () => {
            this.OS_Menu_Head.visible = true;
            this.OS_Menu_Score.visible = true;
            this.OS_Menu_ScoreB.visible = true;
            this.OS_Menu_top.visible = true;
            this.OS_Menu_topB.visible = true;
            // });//载入监听
            if (GameBaseData.isFBSDK) {
                this.OS_Menu_Head.skin = FBInstant.player.getPhoto(); //头像赋值
                FBInstant.logEvent("Share_open");
            }
            Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn1));
        }
        closeGameOverShare() {
            this.OS_Menu.visible = false;
            this.NextBox.visible = true;
            this.onOnlineReward();
        }
        onGameOverShare() {
            FBInstant.logEvent("Share_click");
            GameBaseData.FBShare_Custom(this.OS_Menu_Score.text, this.OS_Menu_top.text, () => {
                if (GameBaseData.isDebug) {
                    console.log("自定义分享成功");
                }
                // FBInstant.logEvent("Share_suc");
                this.closeGameOverShare();
            });
        }
        /**
         * 更新在线奖励
         */
        updateOnlineReward() {
            this.btnOnlineReward.visible = false;
            let curIndex = touch.GameData.instance.onlineIndex;
            for (let index = 0; index < touch.GameConfig.ONLINE_GIFT.length; index++) {
                let onlineGift = touch.GameConfig.ONLINE_GIFT[index];
                if (onlineGift.index <= curIndex) {
                    continue;
                }
                // this.btnOnlineReward.visible = true;
                if (onlineGift.time <= touch.GameData.instance.onlineTime) {
                    this.tfReady.visible = true;
                    this.btnOnlineReward.disabled = false;
                    this.tfNextReward.visible = false;
                    this.tfNextRewardTime.visible = false;
                } else {
                    this.tfReady.visible = false;
                    // this.btnOnlineReward.disabled = true;
                    this.tfNextReward.visible = true;
                    this.tfNextRewardTime.visible = true;
                    this._onlineRemainingTime = onlineGift.time - touch.GameData.instance.onlineTime;
                    this.tfNextRewardTime.text = touch.TimeUtil.getHourMinuteSecond(this._onlineRemainingTime * 1000);
                    Laya.timer.clear(this, this.timeLoop);
                    Laya.timer.loop(1000, this, this.timeLoop);
                }
                break;
            }
        }
        /**
         * 时间循环
         */
        timeLoop() {
            this._onlineRemainingTime--;
            this.tfNextRewardTime.text = touch.TimeUtil.getHourMinuteSecond(this._onlineRemainingTime * 1000);
            if (this._onlineRemainingTime <= 0) {
                Laya.timer.clear(this, this.timeLoop);
                this.updateOnlineReward();
            }
        }
        /**
         * 显示排行榜视图
         */
        showRankView() {
            this.spriteOpenRank.visible = true;
            // if (GameModule.wechatSDK != null) {
            // 	Laya.Browser.window.sharedCanvas.width = this.spriteRank.width;
            // 	Laya.Browser.window.sharedCanvas.height = this.spriteRank.height;
            // 	GameModule.wechatSDK.postMessage({
            // 		message: "showGameResultRank",
            // 		score: this._score,
            // 		openid: GameModule.wechatSDK.userInfo.openId
            // 	});
            // 	Laya.timer.once(100, this, this.updateRankView);
            // }
        }
        /**
         * 更新排行榜视图
         */
        updateRankView() {
            this._rankTexture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
            this._rankTexture.bitmap.alwaysChange = true;
            this.spriteRank.graphics.drawTexture(this._rankTexture, 0, 0, this.spriteRank.width, this.spriteRank.height);
        }
        showFBFriendTop3(datas) {
            for (var index = 0; index < 3; index++) {
                if (index < datas.length) {
                    let data = datas[index];
                    // var element = this.getChildByName("boxRank" + index) as Laya.Box;
                    var element = this.friendBox.getChildByName("boxRank" + index);
                    if (element != null) {
                        let imgHead = element.getChildByName("imgHead");
                        if (imgHead != null) {
                            imgHead.skin = data.pic;
                        }
                        let tfRank = element.getChildByName("tfRank");
                        if (tfRank != null) {
                            tfRank.text = "" + (data.rank + 1);
                        }
                        let tfName = element.getChildByName("tfName");
                        if (tfName != null) {
                            tfName.text = data.name;
                        }
                        let tfScore = element.getChildByName("tfScore");
                        if (tfScore != null) {
                            if (GameBaseData.modelType == 1) {
                                tfScore.text = "" + data.score + "m";
                            } else {
                                tfScore.text = "" + data.score + "";
                            }
                        }
                        let btnPk = element.getChildByName("pkFriend");
                        this._setFBShareTop3(btnPk, data);
                    }
                } else {
                    var element = this.friendBox.getChildByName("boxRank" + index);
                    let btnPk = element.getChildByName("pkFriend");
                    this._setFBShareTop3(btnPk, null);
                }
            }
        }
        //设置前三名分享按钮
        _setFBShareTop3(obj, rankData) {
            let im0 = obj.getChildByName("im0");
            let im1 = obj.getChildByName("im1");
            let im2 = obj.getChildByName("im2");
            if (rankData) {
                if (rankData.uuid == GameBaseData.UID) {
                    im0.visible = true;
                    im1.visible = false;
                    im2.visible = false;
                } else {
                    im0.visible = false;
                    if (GameBaseData.getUidIsShare(rankData.uuid, GameBaseData.modelType)) { //分享过
                        im1.visible = true;
                        im2.visible = false;
                    } else { //没分想过
                        im1.visible = false;
                        im2.visible = true;
                    }
                }
            } else {
                im0.visible = false;
                im1.visible = false;
                im2.visible = false;
            }
        }
        setFBFriendList() {
            //更新自己分数
            GameBaseData.upDataRank(GameBaseData.modelType > 1 ? touch.GameData.instance.star : this._score, GameBaseData.modelType, () => {
                if (GameBaseData.isDebug) {
                    console.log("更新分数完毕");
                }
                if (GameBaseData.modelType == 0) {
                    GameBaseData.getFriendList(0, () => {
                        this.nearFriends = GameBaseData.GetNeerPlayer();
                        if (GameBaseData.isDebug) {
                            console.log("好友列表拉取成功");
                            console.log(this.nearFriends);
                        }
                        this.showFBFriendTop3(this.nearFriends);
                        if (GameBaseData.isDebug) {
                            console.log("界面绘制成功");
                        }
                        touch.WorldRankDialog._isReqAllData1 = touch.WorldRankDialog._isReqAllData2 = false;
                    }, () => {});
                } else if (GameBaseData.modelType == 1) {
                    GameBaseData.getFriendList_model1(0, () => {
                        this.nearFriends = GameBaseData.GetNeerPlayer();
                        if (GameBaseData.isDebug) {
                            console.log("好友列表拉取成功");
                            console.log(this.nearFriends);
                        }
                        this.showFBFriendTop3(this.nearFriends);
                        if (GameBaseData.isDebug) {
                            console.log("界面绘制成功");
                        }
                        touch.WorldRankDialog._isReqAllData1 = touch.WorldRankDialog._isReqAllData2 = false;
                    }, () => {});
                } else { //新模式
                    GameBaseData.getNewModeRankList(() => {
                        //数据回来
                        this.showFBFriendTop3(GameBaseData.newModeallRank);
                        touch.NewModeRankDialog._isReqAllData1 = touch.NewModeRankDialog._isReqAllData2 = false;
                    }, () => {});
                    // GameBaseData.getFriendList_model1(0, () => {
                    // 	this.nearFriends = GameBaseData.GetNeerPlayer();
                    // 	if (GameBaseData.isDebug) {
                    // 		console.log("好友列表拉取成功");
                    // 		console.log(this.nearFriends);
                    // 	}
                    // 	this.showFBFriendTop3(this.nearFriends);
                    // 	if (GameBaseData.isDebug) {
                    // 		console.log("界面绘制成功");
                    // 	}
                    // 	WorldRankDialog._isReqAllData1 = WorldRankDialog._isReqAllData2 = false;
                    // }, () => { });
                }
            });
        }
        /**
         * 销毁排行榜视图
         */
        destroyRankView() {
            if (this._rankTexture != null) {
                this._rankTexture.bitmap.alwaysChange = false;
                this._rankTexture.destroy();
                this._rankTexture = null;
            }
            this.spriteRank.graphics.clear();
        }
        /**
         * 关闭
         */
        onClose() {
            this.boxRevive.visible = false;
            this.gameOver();
            // this.playCPGG();
            GameBaseData.FBEventNew(6);
            Laya.timer.clear(this, this.onReviveCountDown);
        }
        /**
         * 观看视频
         */
        onWathVideo() {
            if (GameBaseData.isDebug) {
                console.log("观看视频");
            }
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(12);
                // if (GameBaseData.GGState[2] != 2) {
                // 	this.btnClose.visible = true;
                Laya.timer.clear(this, this.onReviveCountDown);
                // }
                FBSdkMamager.GetInstance().PlayRewardVedio(FBSdkMamager.reliveRewardVedioAdsId, this._onWathVideo.bind(this), function () {
                    touch.Notice.show("Ads play failure,please try again.");
                });
                // if (this.videoType < 0) {
                // 	GameBaseData.FBEvent(15);
                // 	// this._onWathVideo();
                // 	Notice.show("Ads is initializing,please wait a moment");
                // 	return;
                // }
                // if (this.videoType >= 10) {
                // 	GameBaseData.PlayCPGG2(() => {
                // 		this.btnClose.visible = true;
                // 		Laya.timer.clear(this, this.onReviveCountDown);
                // 	}, () => {
                // 		GameBaseData.FBEvent(45);
                // 		this._onWathVideo();
                // 	}, () => {
                // 		GameBaseData.FBEvent(46);
                // 		// this._onWathVideo();
                // 		Notice.show("Ads play failure,please try again.");
                // 	}, () => {
                // 		GameBaseData.FBEvent(46);
                // 		// this._onWathVideo();
                // 		Notice.show("Ads play failure,please try again.");
                // 	});
                // } else {
                // 	GameBaseData.playVideo2(() => {
                // 		GameBaseData.FBEvent(13);
                // 		this._onWathVideo();
                // 	}, () => {
                // 		GameBaseData.FBEvent(14);
                // 		// this._onWathVideo();
                // 		Notice.show("Ads play failure,please try again.");
                // 	}, () => {
                // 		GameBaseData.FBEvent(14);
                // 		// this._onWathVideo();
                // 		Notice.show("Ads play failure,please try again.");
                // 	}, () => {
                // 		this.btnClose.visible = true;
                // 		Laya.timer.clear(this, this.onReviveCountDown);
                // 	});
                // }
            } else {
                this._onWathVideo();
            }
        }
        _onWathVideo() {
            var showShareBtn = false;
            // if (GameBaseData.reviveCount <= 3) {
            // 	showShareBtn = GameBaseData.reviveCount % 3 == 0;
            // } else {
            // 	showShareBtn = GameBaseData.reviveCount % 2 == 1;
            // }
            if (showShareBtn) { //分享
                this.boxRevive.visible = false;
                this.boxReviving.visible = true;
                this.tfScore.visible = true;
                this.boxLife.visible = GameBaseData.modelType == 1;
                this.btnClose.visible = true;
                Laya.timer.clear(this, this.onReviveCountDown);
            } else {
                this._main.event(touch.GameEvent.REVIVE);
                this.boxRevive.visible = false;
                this.boxReviving.visible = true;
                this.tfScore.visible = true;
                this.boxLife.visible = GameBaseData.modelType == 1;
                this.doRevivingCountDown();
                this.btnClose.visible = true;
                Laya.timer.clear(this, this.onReviveCountDown);
            }
            if (this.BeyondFriend.alpha == 1) { //如果
                this.BeyondFriend.visible = true;
            }
            touch.GameData.instance.addVideoNum(17, 0, 0);
        }
        onShareRevive() {
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(24);
                var data = {
                    contextType: 0,
                    contextID: null,
                    contextFromID: FBInstant.player.getID()
                };
                GameBaseData.FBShare(data, () => {});
                this._onWathVideo();
            }
        }
        //更新查找是否有需要超越的角色
        updataBeyondFriend2() {
            if (GameBaseData.modelType > 1)
                return;
            this._count++;
            if (this._count < 100 && GameBaseData.modelType == 1) {
                return;
            }
            this._count = 0;
            if (!this.tempISReadyBeyondRank) { //准备超越准备好了
                return;
            }
            if (GameBaseData.isDebug) {
                console.log(this._score + "___" + this.tempBeyondScore);
            }
            if (this._score > this.tempBeyondScore) {
                //播放飘起
                this.setPlayBeyondRank();
            }
        }
        initBeyondFriend() {
            if (GameBaseData.modelType > 1)
                return;
            let that = this;
            GameBaseData.getInitBeyondFriend(GameBaseData.modelType, (data, num) => {
                that.tempBeyondList = data;
                that.getRankObj_second();
            });
        }
        getRankObj_second() {
            if (GameBaseData.modelType > 1)
                return;
            this.tempBeyondWorldCount++;
            this.tempBeyondScore = (this.tempBeyondWorldCount * this.getBeyondTagerScore() - this.getBeyondTagerScore() / 2 + Math.floor(this.getBeyondTagerScore() * Math.random()));
            //在好友中查找
            let findRankObj = GameBaseData.getStartEndRankObj((this.tempBeyondWorldCount - 1) * this.getBeyondTagerScore(), (this.tempBeyondWorldCount) * this.getBeyondTagerScore(), this.tempBeyondList);
            if (findRankObj) { //好友中存在
                // this.tempBeyondWorldCount++;
                this.setReadyBeyondRank(findRankObj); //设置准备超越
            } else { //不存在
                // this.tempBeyondWorldCount++;
                if (GameBaseData.beyondHead.length > 0) {
                    let nRankobj = new RankObj();
                    nRankobj.pic = GameBaseData.beyondHead.pop();
                    nRankobj.score = "" + this.tempBeyondScore;
                    this.setReadyBeyondRank(nRankobj);
                    if (GameBaseData.beyondHead.length == 0) {
                        GameBaseData.getBeyondHeads();
                    }
                } else { //请求新的头像
                    GameBaseData.getBeyondHeads();
                }
                // //在世界中拉取一个
                // let rLength=GameBaseData.modelType==0?GameBaseData.beyondRankLength_mode0:GameBaseData.beyondRankLength_mode1;
                // GameBaseData.getBeyondFriend(GameBaseData.modelType, this.tempBeyondWorldCount, rLength, (data, startI) => {
                // 	this.tempBeyondWorldCount = startI;
                // 	if (data && data.length > 0) {
                // 		let newRankobj = data[0];
                // 		newRankobj.score = this.tempBeyondWorldCount * this.getBeyondTagerScore() - this.getBeyondTagerScore() / 2 + Math.floor(this.getBeyondTagerScore() * Math.random());
                // 		this.setReadyBeyondRank(newRankobj);
                // 	}
                // });
            }
            // this.tempBeyondWorldCount++;
        }
        //设置将要超越的角色
        setReadyBeyondRank(obj) {
            this.tempReadyBeyondRank = obj;
            //设置头像分数属性
            this.bfInfo.text = obj.score + (GameBaseData.modelType == 1 ? "m" : ""); //分数赋值
            this.tempBeyondScore = obj.score;
            if (obj.pic) {
                this.bfImage.skin = null;
                this.bfImage.on(Laya.Event.LOADED, this, this.onLoadBeyondImage); //载入监听
                this.bfImage.skin = obj.pic; //头像赋值
            } else {
                this.onLoadBeyondImage();
            }
            if (GameBaseData.isDebug) {
                console.log("超越角色=>");
                console.log(obj);
            }
        }
        onLoadBeyondImage() {
            if (GameBaseData.isDebug) {
                console.log("超越头像载入完毕");
            }
            //位置
            this.BeyondFriend.y = 360;
            this.BeyondFriend.x = 80;
            this.BeyondFriend.scaleX = this.BeyondFriend.scaleY = 0;
            this.BeyondFriend.alpha = 1;
            if (this.boxRevive.visible || this.boxFinalScore.visible || this.OS_Menu.visible) {} else {
                this.BeyondFriend.visible = true;
            }
            Laya.Tween.clearAll(this.BeyondFriend);
            Laya.Tween.to(this.BeyondFriend, {
                scaleX: 1,
                scaleY: 1
            }, 800, Laya.Ease.elasticOut, Laya.Handler.create(this, () => {}), 0);
            this.tempISReadyBeyondRank = true;
            this.bfImage.off(Laya.Event.LOADED, this, this.onLoadBeyondImage); //移出监听
        }
        setPlayBeyondRank() {
            if (!this.tempReadyBeyondRank) { //如果没有则去请求一个
                console.log("没有头像 请求");
                this.getRankObj_second();
                return;
            }
            this.tempISReadyBeyondRank = false;
            Laya.Tween.clearAll(this.BeyondFriend);
            Laya.Tween.to(this.BeyondFriend, {
                y: 120,
                alpha: 0.1
            }, 800, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                this.tempReadyBeyondRank = null;
                this.tempISReadyBeyondRank = true; //可以再次检测
                //开始下一个准备
                this.BeyondFriend.visible = false; //显示
                console.log("头像超越完毕 请求");
                this.getRankObj_second();
            }), 0);
        }
        //得到目标基础分值
        getBeyondTagerScore() {
            if (GameBaseData.modelType == 0) {
                return 6;
            }
            return 500;
        }
        //分享成功后点击后继续游戏
        onShareContinue() {
            //界面刷新
            this._main.event(touch.GameEvent.REVIVE);
            //倒计时开始刷新
            this.doRevivingCountDown();
            //按钮隐藏
            this.btnShareContinue.visible = false;
        }
        /**
         * 返回
         */
        onBack() {
            if (GameBaseData.isDebug) {
                console.log("TipDialog.gameTimes====" + touch.TipDialog.gameTimes);
            }
            // if (GameBaseData.isFBSDK) {
            // 	this.playCPGG();
            // }
            this._main.event(touch.GameEvent.BACK);
        }
        //点击了游戏结束的分享
        onShareGameover() {
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(20);
                var data = {
                    contextType: 0,
                    contextID: null,
                    contextFromID: FBInstant.player.getID()
                };
                GameBaseData.FBShare(data, null);
            }
        }
        /**
         * 重新开始
         */
        onRestart() {
            if (GameBaseData.modelType > 1) {
                if (touch.GameData.instance.diamond < 50) {
                    touch.Notice.show("Diamond not enough");
                    this._main.event(touch.GameEvent.OPEN_GIFT);
                    return;
                } else {
                    touch.GameData.instance.setAddDiamond(-50);
                }
            }
            let that = this;
            GameBaseData.cpScore = this._score;
            if (touch.TipDialog.gameTimes >= 3 && GameBaseData.isFBSDK && GameBaseData.modelType < 2) {
                if (touch.TipDialog.gameTimesCancel % 5 == 0) {
                    GameBaseData.FBShareFriend_startGame(() => {
                        that._onRestartFB(); //开始游戏 //点击好友按钮
                        GameBaseData.FBEvent(36);
                    }, () => {
                        that._onRestartFB(); //开始游戏 //点击关闭按钮
                        GameBaseData.FBEvent(37);
                        touch.TipDialog.gameTimesCancel++;
                    });
                } else {
                    touch.TipDialog.gameTimesCancel++;
                    // if (GameBaseData.getCPFlag() > 0) {
                    // 	that.playCPGG();
                    // }
                    that._onRestartFB(); //开始游戏 //点击关闭按钮
                }
            } else {
                // if (GameBaseData.getCPFlag() > 0) {
                // 	that.playCPGG();
                // }
                that._onRestartFB(); //开始游戏 //点击关闭按钮
            }
            // this._main.event(GameEvent.START_AGAIN);
        }
        _onRestartFB() {
            this._main.event(touch.GameEvent.START_AGAIN);
        }
        /**
         * 打开排行榜
         */
        onOpenRank() {
            this.destroyRankView();
            if (GameBaseData.modelType >= 2) {
                this._main.event(touch.GameEvent.OPEN_NewMode_RANK);
            } else {
                this._main.event(touch.GameEvent.OPEN_RANK);
            }
        }
        /**
         * 关闭排行榜
         */
        onCloseRank() {
            this.showRankView();
        }
        /**
         * 执行重新开始
         */
        doRestart() {
            this.tfScore.visible = true;
            this.boxLife.visible = GameBaseData.modelType == 1;
            this.boxModel2.visible = GameBaseData.modelType > 1;
            this.fStar0.visible = false;
            this.fStar1.visible = false;
            this.fStar2.visible = false;
            this.victory.visible = false;
            this.boxGuide.visible = false;
            this.aniGuide.stop();
            this._main.event(touch.GameEvent.RESTART);
        }
        /**
         * 复活倒计时
         */
        doReviveCountDown() {
            this._reviveCountdown = GameView.REVIVE_COUNTDOWN;
            //20200429 复活界面去掉关闭按钮 -----hhc
            this.btnClose.visible = false;
            //this.btnClose.visible = true;
            if (GameBaseData.modelType == 0) {
                this.reScore.text = "" + this._score;
            } else {
                this.reScore.text = this._score + "m";
            }
            this.updateReviveUI();
            Laya.timer.loop(1000, this, this.onReviveCountDown);
        }
        /**
         * 复活中倒计时
         */
        onReviveCountDown() {
            this._reviveCountdown--;
            // if (this._reviveCountdown <= 7) {
            // 	this.btnClose.visible = true;
            // }
            this.updateReviveUI();
            if (this._reviveCountdown <= 0) {
                Laya.timer.clear(this, this.onReviveCountDown);
                this.boxRevive.visible = false;
                //20200429修改,当复活弹出的时候,等复活界面倒计时结束时弹插屏----hhc
                FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                //this.gameOver();
                GameBaseData.FBEventNew(7);
            }
        }
        /**
         * 更新复活界面
         */
        updateReviveUI() {
            this.tfReviveCountdown.text = this._reviveCountdown.toString();
        }
        /**
         * 复活中倒计时
         */
        doRevivingCountDown() {
            this._revivingCountdown = GameView.REVIVING_COUNTDOWN;
            this.updateRevivingUI();
            Laya.timer.loop(1000, this, this.onRevivingCountDown);
        }
        /**
         * 复活中倒计时
         */
        onRevivingCountDown() {
            this._revivingCountdown--;
            this.updateRevivingUI();
            if (this._revivingCountdown <= 0) {
                Laya.timer.clear(this, this.onRevivingCountDown);
                this.boxReviving.visible = false;
                this.tfScore.visible = true;
                this.boxLife.visible = GameBaseData.modelType == 1;
                this.BeyondFriend.visible = true;
            }
        }
        /**
         * 更新复活中界面
         */
        updateRevivingUI() {
            this.tfReviving.text = this._revivingCountdown.toString();
        }
        /**
         * 在线奖励
         */
        onOnlineReward() {
            if (touch.TipDialog.can_subscribe && touch.TipDialog.pushState == 0) {
                this._main.event(touch.GameEvent.OPEN_TIP, 1);
                return;
            }
            let diaNums = 5;
            if (GameBaseData.modelType == 0) {
                diaNums = Math.floor(this._score / 2);
            } else if (GameBaseData.modelType == 1) {
                diaNums = Math.floor(this._score / 100);
            } else {
                diaNums = 20;
            }
            if (diaNums > 50) {
                diaNums = 50;
            }
            if (diaNums < 1)
                return;
            // GameData.instance.setAddDiamond(diaNums);
            // this._main.event(GameEvent.SHOW_REWARD, ["index/big_diamond.png", diaNums, true, true]);
            // let curIndex: number = GameData.instance.onlineIndex;
            // for (let index = 0; index < GameConfig.ONLINE_GIFT.length; index++) {
            // 	let onlineGift = GameConfig.ONLINE_GIFT[index];
            // 	if (onlineGift.index <= curIndex) {
            // 		continue;
            // 	}
            // 	if (onlineGift.time <= GameData.instance.onlineTime) {
            // 		// GameData.instance.diamond += onlineGift.num;
            // 		GameData.instance.setAddDiamond(onlineGift.num);
            // 		GameData.instance.onlineIndex = onlineGift.index;
            // 		this._main.event(GameEvent.SHOW_REWARD, ["index/big_diamond.png", onlineGift.num, true, true]);
            // 	}
            // 	this.updateOnlineReward();
            // 	break;
            // }
        }
        /**
         * 切换游戏
         */
        onSwitch() {
            if (GameBaseData.isFBSDK) {
                FBInstant.logEvent("Switch2");
                FBInstant.switchGameAsync("274049616652996");
            }
        }
        touchBtn_FbShareTop3(obj, rankIndex) {
            if (!this.nearFriends) {
                return;
            }
            if (rankIndex < 3 && rankIndex < this.nearFriends.length) {
                let rankData = this.nearFriends[rankIndex];
                let im0 = obj.getChildByName("im0");
                let im1 = obj.getChildByName("im1");
                let im2 = obj.getChildByName("im2");
                if (im0.visible) { //自己
                    if (GameBaseData.isDebug) {
                        console.log('调起分享sdk');
                    }
                    if (GameBaseData.isFBSDK) {
                        var data = {
                            contextType: 0,
                            contextID: null,
                            contextFromID: FBInstant.player.getID()
                        };
                        GameBaseData.FBShare(data, () => {
                            if (GameBaseData.isDebug) {
                                console.log('调起分享sdk成功');
                            }
                        });
                    }
                } else {
                    if (im1.visible) { //已经分享过
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk');
                        }
                        if (GameBaseData.isFBSDK) {
                            if (GameBaseData.isDebug) {
                                console.log('调起挑战sdk 挑战者id=' + rankData.uuid);
                            }
                            GameBaseData.PKFriend(rankData.uuid, () => {
                                this.joinGamePK();
                                GameBaseData.FBEvent(34);
                            });
                        } else {
                            this.joinGamePK();
                        }
                    } else { //没有分享过
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk并给予奖励');
                        }
                        if (GameBaseData.isFBSDK) {
                            if (GameBaseData.isDebug) {
                                console.log('调起挑战sdk 挑战者id=' + rankData.uuid);
                            }
                            GameBaseData.PKFriend(rankData.uuid, () => {
                                GameBaseData.setAddUidToShare(rankData.uuid, GameBaseData.modelType);
                                // GameData.instance.setAddDiamond(100);
                                // Notice.show("Sucessful get 100 diamonds!");
                                this.joinGamePK();
                                GameBaseData.FBEvent(33);
                                //改变界面状态
                                im1.visible = true;
                                im2.visible = false;
                            });
                        } else {
                            GameBaseData.setAddUidToShare(rankData.uuid, GameBaseData.modelType);
                            touch.GameData.instance.setAddDiamond(100);
                            touch.Notice.show("Sucessful get 100 diamonds!");
                            this.joinGamePK();
                            //改变界面状态
                            im1.visible = true;
                            im2.visible = false;
                        }
                    }
                }
            }
        }
        //进入游戏pk
        joinGamePK() {
            //设置游戏模式
            // let modelType = GameBaseData.modelType;
            // if (modelType == 0) {
            // 	this._main.event(GameEvent.ENTER_GAME1);
            // 	GameBaseData.initGameLv();
            // 	GameBaseData.getFriendList(0, null, null);
            // } else {
            // 	this._main.event(GameEvent.ENTER_GAME2);
            // 	GameBaseData.initGameLv();
            // 	GameBaseData.getFriendList_model1(0, null, null);
            // }
            this._onRestartFB();
        }
    }
    /**
     * 复活倒计时时间
     */
    GameView.REVIVE_COUNTDOWN = 7;
    /**
     * 复活中倒计时时间
     */
    GameView.REVIVING_COUNTDOWN = 3;
    touch.GameView = GameView;
})(touch || (touch = {}));
//# sourceMappingURL=GameView.js.map