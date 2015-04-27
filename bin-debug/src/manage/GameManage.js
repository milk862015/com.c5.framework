var GameManage = (function () {
    function GameManage() {
        this.IsStart = false;
        this._score = 0; //得分
        if (GameManage.instance != null) {
            throw new TypeError("GameManage Singleton already constructed");
        }
        GameManage.instance = this;
    }
    var __egretProto__ = GameManage.prototype;
    GameManage.GetInstance = function () {
        if (GameManage.instance == null) {
            GameManage.instance = new GameManage();
        }
        return GameManage.instance;
    };
    __egretProto__.Init = function () {
        //初始化数据
        FightConfig.init();
    };
    return GameManage;
})();
GameManage.prototype.__class__ = "GameManage";
