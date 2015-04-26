var GameManage = (function () {
    function GameManage() {
        this.IsStart = false;
        this._score = 0; //得分
        if (GameManage.instance != null) {
            throw new TypeError("GameManage Singleton already constructed");
        }
        GameManage.instance = this;
    }
    GameManage.GetInstance = function () {
        if (GameManage.instance == null) {
            GameManage.instance = new GameManage();
        }
        return GameManage.instance;
    };
    GameManage.prototype.Init = function () {
        GameResponse.GetInstance().addEventListener(GameEvent.START, this.gameStart, this);
        GameResponse.GetInstance().addEventListener(GameEvent.TIME_START, this.timeStart, this);
        GameResponse.GetInstance().addEventListener(GameEvent.TIME_PAUSE, this.timePause, this);
        GameResponse.GetInstance().addEventListener(GameEvent.SCORE, this.addScore, this);
        //初始化数据
        FightConfig.init();
    };
    GameManage.prototype.gameStart = function (e) {
        console.log("game start");
        this._score = 0;
        //ui显示
        UIManage.GetInstance().Show("FightSkin");
        EffectManage.GetInstance().CloseGuide();
        FightScene.GetInstance().Init();
        if (FightScene.GetInstance().parent == null) {
            Core.GameLayer.addChild(FightScene.GetInstance());
        }
        FightManage.GetInstance().Start();
        this.IsStart = true;
    };
    GameManage.prototype.timePause = function (e) {
        if (this.gtimer) {
            this.gtimer.stop();
        }
    };
    GameManage.prototype.timeStart = function (e) {
        if (this.gtimer == null) {
            this.gtimer = new egret.Timer(1000, Config.FIGHT_TIME_TOTAL);
            this.gtimer.addEventListener(egret.TimerEvent.TIMER, this.timeTimerFunc, this);
            this.gtimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeCompleteFunc, this);
        }
        if (!this.gtimer.running) {
            this.gtimer.start();
        }
    };
    GameManage.prototype.timeTimerFunc = function (e) {
        var cur = this.gtimer.currentCount();
        var ui = UIManage.GetInstance().GetShowUI();
        if (ui) {
            ui.SetTimeGrooveScale((Config.FIGHT_TIME_TOTAL - cur) / Config.FIGHT_TIME_TOTAL);
        }
    };
    GameManage.prototype.timeCompleteFunc = function (e) {
        if (this.gtimer) {
            this.gtimer.removeEventListener(egret.TimerEvent.TIMER, this.timeTimerFunc, this);
            this.gtimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeCompleteFunc, this);
            this.gtimer = null;
            this.gameOver();
        }
    };
    GameManage.prototype.gameOver = function () {
        this.IsStart = false;
        GameResponse.GetInstance().GameOver();
        FightScene.GetInstance().Hide();
        UIManage.GetInstance().Show("ResultSkin");
    };
    //num 消除个数
    //combo 次数
    GameManage.prototype.addScore = function (e) {
        var num = e.Num;
        var combo = e.Combo;
        var add = num * 10 * (num - 2) * (combo + 1);
        this._score = this._score + add;
        var ui = UIManage.GetInstance().GetShowUI();
        ui.SetScore(this._score);
    };
    //获取得分
    GameManage.prototype.GetScore = function () {
        return this._score;
    };
    return GameManage;
})();
GameManage.prototype.__class__ = "GameManage";
