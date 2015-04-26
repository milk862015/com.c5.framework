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
        var FightSkin = (function (_super) {
            __extends(FightSkin, _super);
            function FightSkin() {
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
            Object.defineProperty(FightSkin.prototype, "skinParts", {
                get: function () {
                    return FightSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            FightSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["groove_png", 284, 13]);
                return t;
            };
            FightSkin.prototype.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["percentHeight", "percentWidth"], [100, 100]);
                t.elementsContent = [this.__3_i(), this.score_i(), this.__4_i(), this.timeGroove_i()];
                return t;
            };
            FightSkin.prototype.score_i = function () {
                var t = new egret.gui.Label();
                this.score = t;
                this.__s(t, ["size", "text", "verticalAlign", "x", "y"], [40, "0", "justify", 83, 20]);
                return t;
            };
            FightSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["scorePanel_png", 23, 13]);
                return t;
            };
            FightSkin.prototype.timeGroove_i = function () {
                var t = new egret.gui.UIAsset();
                this.timeGroove = t;
                this.__s(t, ["source", "x", "y"], ["timegroove_png", 338, 24]);
                return t;
            };
            FightSkin._skinParts = ["score", "timeGroove", "contentGroup"];
            return FightSkin;
        })(egret.gui.Skin);
        ui.FightSkin = FightSkin;
        FightSkin.prototype.__class__ = "skins.ui.FightSkin";
    })(ui = skins.ui || (skins.ui = {}));
})(skins || (skins = {}));
