var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoginSkin = (function (_super) {
    __extends(LoginSkin, _super);
    function LoginSkin() {
        _super.call(this);
        this.skinName = "skins.ui.LoginSkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    LoginSkin.prototype.onAddToStage = function (e) {
        this.initialize();
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    LoginSkin.prototype.initialize = function () {
    };
    return LoginSkin;
})(egret.gui.Panel);
LoginSkin.prototype.__class__ = "LoginSkin";
