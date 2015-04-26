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
        var ResultSkin = (function (_super) {
            __extends(ResultSkin, _super);
            function ResultSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1008, 640]);
                this.elementsContent = [this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(ResultSkin.prototype, "skinParts", {
                get: function () {
                    return ResultSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ResultSkin.prototype.btnAgain_i = function () {
                var t = new egret.gui.UIAsset();
                this.btnAgain = t;
                this.__s(t, ["source", "x", "y"], ["btnAgain_png", 180, 589]);
                return t;
            };
            ResultSkin.prototype.btnLottery_i = function () {
                var t = new egret.gui.UIAsset();
                this.btnLottery = t;
                this.__s(t, ["source", "x", "y"], ["btnLottery_png", 179, 812]);
                return t;
            };
            ResultSkin.prototype.btnShare_i = function () {
                var t = new egret.gui.UIAsset();
                this.btnShare = t;
                this.__s(t, ["source", "x", "y"], ["btnShare_png", 179, 705]);
                return t;
            };
            ResultSkin.prototype.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["percentHeight", "percentWidth"], [100, 100]);
                t.elementsContent = [this.__3_i(), this.btnLottery_i(), this.btnShare_i(), this.btnAgain_i(), this.scoreTxt_i()];
                return t;
            };
            ResultSkin.prototype.scoreTxt_i = function () {
                var t = new egret.gui.Label();
                this.scoreTxt = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "y"], [true, 125.5, 39, "0分贝", "right", 16711680, "middle", 395]);
                return t;
            };
            ResultSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["endPanel_png", 0, 0]);
                return t;
            };
            ResultSkin._skinParts = ["btnLottery", "btnShare", "btnAgain", "scoreTxt", "contentGroup"];
            return ResultSkin;
        })(egret.gui.Skin);
        ui.ResultSkin = ResultSkin;
        ResultSkin.prototype.__class__ = "skins.ui.ResultSkin";
    })(ui = skins.ui || (skins.ui = {}));
})(skins || (skins = {}));
