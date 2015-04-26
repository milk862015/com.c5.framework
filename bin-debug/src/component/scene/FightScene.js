var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FightScene = (function (_super) {
    __extends(FightScene, _super);
    function FightScene() {
        _super.call(this);
        if (FightScene.instance != null) {
            throw new TypeError("FightScene Singleton already constructed");
        }
        this.initialize();
        FightScene.instance = this;
    }
    FightScene.prototype.initialize = function () {
        this.initView();
    };
    /**
     *初始化界面
    **/
    FightScene.prototype.initView = function () {
    };
    FightScene.GetInstance = function () {
        if (FightScene.instance == null) {
            FightScene.instance = new FightScene();
        }
        return FightScene.instance;
    };
    FightScene.prototype.Init = function () {
    };
    return FightScene;
})(egret.Sprite);
FightScene.prototype.__class__ = "FightScene";
