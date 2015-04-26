var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ResultSkin = (function (_super) {
    __extends(ResultSkin, _super);
    function ResultSkin() {
        _super.call(this);
        this.skinName = "skins.ui.ResultSkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    ResultSkin.prototype.onAddToStage = function (e) {
        this.initialize();
        this.removeEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    ResultSkin.prototype.initialize = function () {
    };
    return ResultSkin;
})(egret.gui.Panel);
ResultSkin.prototype.__class__ = "ResultSkin";
