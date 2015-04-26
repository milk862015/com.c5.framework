var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FightSkin = (function (_super) {
    __extends(FightSkin, _super);
    function FightSkin() {
        _super.call(this);
        this.skinName = "skins.ui.FightSkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    FightSkin.prototype.onAddToStage = function (e) {
        this.initialize();
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    FightSkin.prototype.initialize = function () {
    };
    return FightSkin;
})(egret.gui.Panel);
FightSkin.prototype.__class__ = "FightSkin";
