var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MonsterObject = (function (_super) {
    __extends(MonsterObject, _super);
    function MonsterObject() {
        _super.call(this);
        this.initialize();
    }
    MonsterObject.prototype.initialize = function () {
        // this.key = "MonsterObject"
    };
    MonsterObject.prototype.onCreate = function () {
        // if(this.view == null){
        // 	this.view = new FightMonster();
        // }
    };
    MonsterObject.prototype.onDestroy = function () {
        // if(this.view){
        // 	if(this.view.parent){
        // 		this.view.parent.removeChild(this.view)
        // 	}
        // 	this.view = null
        // }
    };
    return MonsterObject;
})(GameObject);
MonsterObject.prototype.__class__ = "MonsterObject";
