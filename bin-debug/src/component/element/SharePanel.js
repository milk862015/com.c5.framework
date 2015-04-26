var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SharePanel = (function (_super) {
    __extends(SharePanel, _super);
    function SharePanel() {
        _super.call(this);
        this.initialize();
    }
    SharePanel.prototype.initialize = function () {
        this.bg = new egret.Sprite();
        this.bg.graphics.beginFill(0x000000, 0.5);
        this.bg.graphics.drawRect(0, 0, Config.STAGE_WIDTH, Config.STAGE_HEIGHT);
        this.bg.graphics.endFill();
        this.bg.width = Config.STAGE_WIDTH;
        this.bg.height = Config.STAGE_HEIGHT;
        this.addChild(this.bg);
        this.bmp = new egret.Bitmap();
        this.bmp.texture = RES.getRes("form.shareImg_png");
        this.addChild(this.bmp);
        this.bmp.x = Config.STAGE_WIDTH * 0.5 - this.bmp.width * 0.5;
        this.bmp.y = 5;
        // this.bmp.y = Config.STAGE_HEIGHT *0.5 - this.bmp.height *0.5;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFunc, this);
    };
    SharePanel.prototype.touchFunc = function (e) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return SharePanel;
})(egret.Sprite);
SharePanel.prototype.__class__ = "SharePanel";
