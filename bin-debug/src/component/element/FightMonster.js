var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FightMonster = (function (_super) {
    __extends(FightMonster, _super);
    function FightMonster() {
        _super.call(this);
        // private _bomb:Bomb;
        this.IsDel = false; //标记是否删除
        this.key = "";
        this.initialize();
        this.cacheAsBitmap = true;
    }
    FightMonster.prototype.initialize = function () {
        this.touchEnabled = true;
        this.cbmp = new egret.Bitmap();
        this.addChild(this.cbmp);
        this.fbmp = new egret.Bitmap();
        this.addChild(this.fbmp);
        this.fbmp.y = 5;
    };
    FightMonster.prototype.onCreate = function () {
        this.IsDel = false;
        this.visible = true;
        // if(this.cbmp){
        // 	this.cbmp.visible = true;
        // }
        // if(this.fbmp){
        // 	this.fbmp.visible = true;
        // }
    };
    FightMonster.prototype.onDestroy = function () {
        this.visible = false;
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    //设置正反面的数值
    FightMonster.prototype.SetStatus = function (fnum, cnum) {
        this.front = fnum;
        this.contrary = cnum;
        this.cacheAsBitmap = false;
        this.fbmp.texture = RES.getRes("main.r" + this.front + "_png");
        this.cbmp.texture = RES.getRes("main.b" + this.contrary + "_png");
        this.cacheAsBitmap = true;
    };
    FightMonster.prototype.SetPos = function (px, py) {
        this.px = px;
        this.py = py;
        this.x = Config.FIGHT_WIDTH * this.px;
        this.y = Config.FIGHT_HEIGHT * (Config.FIGHT_COLUMN - this.py - 1);
    };
    FightMonster.prototype.SetRun = function (px, py) {
        if ((this.px != px) || (this.py != py)) {
            this.px = px;
            this.py = py;
            var tw = egret.Tween.get(this);
            var ex = Config.FIGHT_WIDTH * this.px;
            var ey = Config.FIGHT_HEIGHT * (Config.FIGHT_COLUMN - this.py - 1);
            var time = Config.FIGHT_MONSTER_RUN_TIME / (Config.FIGHT_HEIGHT * Config.FIGHT_COLUMN) * (ey - this.y);
            // var time:number = 500;
            // tw.addEventListener(egret.Event.COMPLETE, this.twComplete,this)
            tw.to({ x: ex, y: ey }, time).call(this.twComplete, this);
        }
    };
    FightMonster.prototype.twComplete = function () {
        GameResponse.GetInstance().SendRunEnd();
        console.log("complete");
    };
    FightMonster.prototype.GetPx = function () {
        return this.px;
    };
    FightMonster.prototype.GetPy = function () {
        return this.py;
    };
    FightMonster.prototype.Change = function () {
        this.SetStatus(this.contrary, this.front);
        this.pp = { x: this.px, y: this.py };
        var timer = new egret.Timer(Config.FIGHT_MOSNTER_CHANGE_TIME, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.sendChangeData, this);
        timer.start();
    };
    FightMonster.prototype.OnlyChange = function () {
        this.SetStatus(this.contrary, this.front);
    };
    FightMonster.prototype.sendChangeData = function (e) {
        var timer = e.target;
        timer.stop();
        timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.sendChangeData, this);
        FightManage.GetInstance().Change(this.pp);
        this.pp = null;
    };
    FightMonster.prototype.DelRun = function () {
        if (this.IsDel) {
            var localX = 0;
            var localY = 0;
            if (this.parent) {
                localX = localX + this.parent.x;
                localY = localY + this.parent.y;
            }
            localX = localX + this.x;
            localY = localY + this.y;
            EffectManage.GetInstance().ShowBomb(localX, localY);
            ObjectPool.GetInstance().DestroyObject(this);
        }
    };
    // private playEnd(e:any):void{
    // 	var mc:egret.MovieClip = this._bomb.GetMC()
    // 	mc.removeEventListener("playEnd",this.playEnd,this)
    // 	ObjectPool.GetInstance().DestroyObject(this._bomb)
    // 	this._bomb = null;
    // 	ObjectPool.GetInstance().DestroyObject(<GameObject>this)
    // }
    FightMonster.prototype.onEnterFrame = function (advancedTime) {
    };
    FightMonster.Key = "FightMonster";
    return FightMonster;
})(egret.Sprite);
FightMonster.prototype.__class__ = "FightMonster";
