var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FightLine = (function (_super) {
    __extends(FightLine, _super);
    function FightLine() {
        _super.call(this);
        this.init();
    }
    FightLine.prototype.init = function () {
        this.bmp = new egret.Bitmap();
        this.addChild(this.bmp);
        this.SetStatus(FightLine.NORMAL);
    };
    FightLine.prototype.SetPos = function (px, py) {
        if (px < 0) {
            px = 0;
        }
        if (py < 0) {
            py = 0;
        }
        this.x = Config.FIGHT_WIDTH * 0.5 + Config.FIGHT_WIDTH * px;
        this.y = Config.FIGHT_HEIGHT * 0.5 + Config.FIGHT_HEIGHT * py;
        this.px = px;
        this.py = py;
    };
    FightLine.prototype.SetEnd = function (ex, ey) {
        if (ex < 0) {
            ex = 0;
        }
        if (ey < 0) {
            ey = 0;
        }
        var ax = (ex - this.px) * Config.FIGHT_WIDTH;
        var ay = (ey - this.py) * Config.FIGHT_HEIGHT;
        var ro = Math.atan2(ay, ax);
        this.rotation = ro / Math.PI * 180;
        var w = Math.sqrt(Math.pow((ex - this.px) * Config.FIGHT_WIDTH, 2) + Math.pow((ey - this.py) * Config.FIGHT_HEIGHT, 2));
        this.bmp.width = w;
        this.ex = ex;
        this.ey = ey;
    };
    FightLine.prototype.SetStatus = function (mode) {
        var url = "";
        if (this.mode == mode) {
            return;
        }
        this.mode = mode;
        switch (mode) {
            case FightLine.NORMAL:
                url = "rect_0_png";
                break;
            case FightLine.PASS:
                url = "rect_1_png";
                break;
            case FightLine.RED:
                url = "rect_2_png";
                break;
        }
        if (url != "") {
            var imgs = RES.getRes("fight");
            this.bmp.texture = imgs.getTexture(url);
            this.bmp.y = -this.bmp.height * 0.5;
        }
    };
    FightLine.prototype.GetStatus = function () {
        return this.mode;
    };
    FightLine.NORMAL = 0;
    FightLine.PASS = 1;
    FightLine.RED = 2;
    return FightLine;
})(egret.Sprite);
FightLine.prototype.__class__ = "FightLine";
