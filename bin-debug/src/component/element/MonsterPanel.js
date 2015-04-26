var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MonsterPanel = (function (_super) {
    __extends(MonsterPanel, _super);
    function MonsterPanel() {
        _super.call(this);
        this.IsChange = false; //标志是否在判断可消除中
        this._count = 0; //计数
        this._total = 0;
        this.initialize();
    }
    MonsterPanel.prototype.initialize = function () {
        // this.bg = new egret.Bitmap()
        // this.bg.texture = RES.getRes("fight.fightbg_png")
        // this.addChild(this.bg);
    };
    MonsterPanel.prototype.ShowFightMonster = function (nLst) {
        this.clear();
        this.fmLst = [];
        for (var i = 0; i < Config.FIGHT_ROW; i++) {
            var arr = [];
            for (var j = 0; j < Config.FIGHT_COLUMN; j++) {
                var fm = this.createFightMonster();
                var info = nLst[i][j];
                fm.SetStatus(info.f, info.c);
                fm.SetPos(i, j);
                arr.push(fm);
            }
            this.fmLst.push(arr);
        }
    };
    MonsterPanel.prototype.clear = function () {
        if (this.fmLst == null) {
            return;
        }
        var len = this.fmLst.length;
        for (var i = 0; i < len; i++) {
            var alen = this.fmLst[i].length;
            for (var j = 0; j < alen; j++) {
                var fm = this.fmLst[i][j];
                if (fm.parent) {
                    fm.parent.removeChild(fm);
                }
            }
        }
    };
    MonsterPanel.prototype.createFightMonster = function () {
        // var mo:MonsterObject = <MonsterObject>ObjectPool.GetInstance().CreateObject(MonsterObject)
        var fm = ObjectPool.GetInstance().CreateObject(FightMonster);
        fm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fightMonsterOnClick, this);
        this.addChild(fm);
        return fm;
    };
    MonsterPanel.prototype.fightMonsterOnClick = function (e) {
        if (GameManage.GetInstance().IsStart && (this.IsChange == false)) {
            this.IsChange = true;
            var target = e.target;
            target.Change();
        }
    };
    MonsterPanel.prototype.DelRound = function (drLst) {
        this.delRoundLst = drLst;
        if (this.delRoundLst.length > 0) {
            var lst = this.delRoundLst.shift();
            this.addFightMonster(lst.suppleLst);
            GameResponse.GetInstance().AddScore(lst.dpLst.length, lst.combo);
            this.delFightMonster(lst.dpLst);
        }
        else {
            this.IsChange = false;
        }
    };
    MonsterPanel.prototype.delFightMonster = function (lst) {
        var len = lst.length;
        for (var i = 0; i < len; i++) {
            var pp = lst[i];
            this.fmLst[pp.x][pp.y].IsDel = true;
        }
        this.del();
        var timer = new egret.Timer(250, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.run, this);
        timer.start();
        // this.run();
    };
    MonsterPanel.prototype.del = function () {
        var len = this.fmLst.length;
        for (var i = 0; i < len; i++) {
            var alen = this.fmLst[i].length;
            for (var j = 0; j < alen; j++) {
                var fm = this.fmLst[i][j];
                fm.DelRun();
            }
        }
        for (var k = 0; k < len; k++) {
            var lst = this.fmLst[k];
            var pos = this.checkHasDelPos(lst);
            while (pos != -1) {
                lst.splice(pos, 1);
                pos = this.checkHasDelPos(lst);
            }
        }
    };
    MonsterPanel.prototype.run = function (e) {
        var timer = e.target;
        timer.stop();
        timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.run, this);
        var len = this.fmLst.length;
        this._count = 0;
        this._total = 0;
        for (var k = 0; k < len; k++) {
            var blen = this.fmLst[k].length;
            for (var kk = 0; kk < blen; kk++) {
                var afm = this.fmLst[k][kk];
                if ((afm.GetPx() != k) || (afm.GetPy() != kk)) {
                    this._total++;
                }
            }
        }
        GameResponse.GetInstance().addEventListener(GameEvent.GAME_RUN_END, this.runEnd, this);
        for (var i = 0; i < len; i++) {
            var alen = this.fmLst[i].length;
            for (var j = 0; j < alen; j++) {
                var fm = this.fmLst[i][j];
                fm.SetRun(i, j);
            }
        }
        // var timer:egret.Timer = new egret.Timer(1100,1)
        // timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timeCompleteFunc,this);
        // timer.start();
    };
    MonsterPanel.prototype.runEnd = function (e) {
        this._count = this._count + 1;
        if (this._count == this._total) {
            egret.Tween.removeAllTweens();
            GameResponse.GetInstance().removeEventListener(GameEvent.GAME_RUN_END, this.runEnd, this);
            this.DelRound(this.delRoundLst);
        }
    };
    // private timeCompleteFunc(e:egret.TimerEvent):void{
    // }
    //检查是否有需要del的
    MonsterPanel.prototype.checkHasDelPos = function (lst) {
        var index = -1;
        var len = lst.length;
        for (var i = 0; i < len; i++) {
            if (lst[i].IsDel) {
                index = i;
                break;
            }
        }
        return index;
    };
    MonsterPanel.prototype.addFightMonster = function (lst) {
        var len = lst.length;
        for (var i = 0; i < len; i++) {
            var sp = lst[i];
            var info = sp.value;
            var fm = this.createFightMonster();
            fm.SetStatus(info.f, info.c);
            fm.SetPos(sp.x, this.fmLst[sp.x].length);
            this.fmLst[sp.x].push(fm);
        }
    };
    return MonsterPanel;
})(egret.Sprite);
MonsterPanel.prototype.__class__ = "MonsterPanel";
