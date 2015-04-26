var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        _super.call(this);
        this.key = "";
        this.initialize();
    }
    Bomb.prototype.initialize = function () {
        this._mc = new egret.MovieClip(RES.getRes("effect_json"), RES.getRes("effect_png"));
        this._mc.frameRate = Config.BOMB_FRAMERATE;
        this.addChild(this._mc);
    };
    Bomb.prototype.GetMC = function () {
        return this._mc;
    };
    Bomb.prototype.onCreate = function () {
        this.visible = true;
        if (this._mc) {
            this._mc.addEventListener("playEnd", this.playEnd, this);
        }
    };
    Bomb.prototype.Play = function () {
        this._mc.gotoAndPlay("show");
    };
    Bomb.prototype.playEnd = function (e) {
        this._mc.removeEventListener("playEnd", this.playEnd, this);
        ObjectPool.GetInstance().DestroyObject(this);
    };
    Bomb.prototype.onDestroy = function () {
        this.visible = false;
        if (this._mc) {
            this._mc.stop();
        }
        if (this.parent) {
            this.parent.removeChild(this);
            this.visible = false;
        }
    };
    Bomb.prototype.onEnterFrame = function (advancedTime) {
    };
    // public view:egret.DisplayObject;
    Bomb.Key = "Bomb";
    return Bomb;
})(egret.Sprite);
Bomb.prototype.__class__ = "Bomb";
