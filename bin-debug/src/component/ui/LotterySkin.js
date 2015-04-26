var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LotterySkin = (function (_super) {
    __extends(LotterySkin, _super);
    function LotterySkin() {
        _super.call(this);
        this.skinName = "skins.ui.LotterySkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    LotterySkin.prototype.onAddToStage = function (e) {
        this.initialize();
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    LotterySkin.prototype.initialize = function () {
        this.submit.touchEnabled = true;
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this);
    };
    LotterySkin.prototype.btnClickHandler = function (e) {
        UIManage.GetInstance().Show("ResultSkin");
    };
    return LotterySkin;
})(egret.gui.Panel);
LotterySkin.prototype.__class__ = "LotterySkin";
