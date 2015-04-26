var GameData = (function () {
    function GameData() {
        if (GameData.instance != null) {
            throw new TypeError("GameData Singleton already constructed");
        }
        GameData.instance = this;
    }
    GameData.GetInstance = function () {
        if (GameData.instance == null) {
            GameData.instance = new GameData();
            GameData.instance.init();
        }
        return GameData.instance;
    };
    GameData.prototype.init = function () {
        this.wxData = {
            appId: "",
            imgUrl: "http://115.29.103.113:8079/icon/gwpd.jpg",
            link: "http://115.29.103.113:8079/DoubleFace/index.html",
            desc: "怪物派对，一起来HAPPY吧！",
            title: "怪物派对，一起来HAPPY！"
        };
    };
    GameData.prototype.SetScore = function (score) {
        this.SetDesc("哈库拉玛塔塔 ，怪物们的尖叫达到了" + score + "分贝，继续HI起来，一起摇摆~~");
    };
    GameData.prototype.SetDesc = function (msg) {
        this.wxData.desc = msg;
    };
    GameData.prototype.GetData = function () {
        return this.wxData;
    };
    return GameData;
})();
GameData.prototype.__class__ = "GameData";
