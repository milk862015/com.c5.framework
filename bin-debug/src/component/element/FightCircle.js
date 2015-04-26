var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FightCircle = (function (_super) {
    __extends(FightCircle, _super);
    function FightCircle() {
        _super.call(this);
        this.init();
    }
    FightCircle.prototype.init = function () {
        this.bmp = new egret.Bitmap();
        this.addChild(this.bmp);
        this.SetStatus(FightCircle.NORMAL);
    };
    FightCircle.prototype.SetPos = function (px, py) {
        if (px < 0) {
            px = 0;
        }
        if (py < 0) {
            py = 0;
        }
        this.x = px * Config.FIGHT_WIDTH;
        this.y = py * Config.FIGHT_HEIGHT;
        this.px = px;
        this.py = py;
    };
    FightCircle.prototype.SetStatus = function (mode) {
        var url = "";
        if (this.mode == mode) {
            return;
        }
        this.mode = mode;
        switch (mode) {
            case FightCircle.NORMAL:
                url = "circle_0_png";
                break;
            case FightCircle.PASS:
                url = "circle_1_png";
                break;
            case FightCircle.SELECT:
                url = "circle_2_png";
                break;
        }
        if (url != "") {
            var imgs = RES.getRes("fight");
            this.bmp.texture = imgs.getTexture(url);
        }
    };
    FightCircle.prototype.GetStatus = function () {
        return this.mode;
    };
    FightCircle.NORMAL = 0;
    FightCircle.PASS = 1;
    FightCircle.SELECT = 2;
    return FightCircle;
})(egret.Sprite);
FightCircle.prototype.__class__ = "FightCircle";
