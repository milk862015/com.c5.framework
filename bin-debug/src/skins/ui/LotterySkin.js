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
        var LotterySkin = (function (_super) {
            __extends(LotterySkin, _super);
            function LotterySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1008, 640]);
                this.elementsContent = [this.__3_i(), this.submit_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(LotterySkin.prototype, "skinParts", {
                get: function () {
                    return LotterySkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            LotterySkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["formPanel_png", 0, 0]);
                return t;
            };
            LotterySkin.prototype.submit_i = function () {
                var t = new egret.gui.UIAsset();
                this.submit = t;
                this.__s(t, ["source", "x", "y"], ["btnSubmit_png", 183, 799]);
                return t;
            };
            LotterySkin._skinParts = ["submit"];
            return LotterySkin;
        })(egret.gui.Skin);
        ui.LotterySkin = LotterySkin;
        LotterySkin.prototype.__class__ = "skins.ui.LotterySkin";
    })(ui = skins.ui || (skins.ui = {}));
})(skins || (skins = {}));
