var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ui;
    (function (ui) {
        var LoginSkin = (function (_super) {
            __extends(LoginSkin, _super);
            function LoginSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1008, 640]);
                this.elementsContent = [this.contentGroup_i(), this.__3_i(), this.__4_i(), this.btnStart_i(), this.__5_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(LoginSkin.prototype, "skinParts", {
                get: function () {
                    return LoginSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            LoginSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["indexPanel_png", 81, 518]);
                return t;
            };
            LoginSkin.prototype.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["logo_png", 55, 269]);
                return t;
            };
            LoginSkin.prototype.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "3个或以上相同底色相连，小怪物们就会欢呼起来", 6830086, 104, 792]);
                return t;
            };
            LoginSkin.prototype.btnStart_i = function () {
                var t = new egret.gui.UIAsset();
                this.btnStart = t;
                this.__s(t, ["source", "x", "y"], ["btnStart_png", 182, 816]);
                return t;
            };
            LoginSkin.prototype.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["percentHeight", "percentWidth"], [100, 100]);
                return t;
            };
            LoginSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["login", 0, 0]);
                return t;
            };
            LoginSkin._skinParts = ["contentGroup", "btnStart"];
            return LoginSkin;
        })(egret.gui.Skin);
        ui.LoginSkin = LoginSkin;
        LoginSkin.prototype.__class__ = "skins.ui.LoginSkin";
    })(ui = skins.ui || (skins.ui = {}));
})(skins || (skins = {}));
