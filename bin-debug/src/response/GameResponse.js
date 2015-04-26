var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameResponse = (function (_super) {
    __extends(GameResponse, _super);
    function GameResponse() {
        _super.call(this);
        if (GameResponse.instance != null) {
            throw new TypeError("GameResponse Singleton already constrocted");
        }
        GameResponse.instance = this;
    }
    GameResponse.GetInstance = function () {
        if (GameResponse.instance == null) {
            GameResponse.instance = new GameResponse();
        }
        return GameResponse.instance;
    };
    GameResponse.prototype.sendEvent = function (key) {
        var ge = new GameEvent(key);
        this.dispatchEvent(ge);
    };
    GameResponse.prototype.Start = function () {
        this.sendEvent(GameEvent.START);
    };
    GameResponse.prototype.GameOver = function () {
        this.sendEvent(GameEvent.GAME_OVER);
    };
    GameResponse.prototype.TimerStart = function () {
        this.sendEvent(GameEvent.TIME_START);
    };
    GameResponse.prototype.TimerPause = function () {
        this.sendEvent(GameEvent.TIME_PAUSE);
    };
    GameResponse.prototype.AddScore = function (num, combo) {
        var ge = new GameEvent(GameEvent.SCORE);
        ge.Num = num;
        ge.Combo = combo;
        this.dispatchEvent(ge);
    };
    GameResponse.prototype.SendRunEnd = function () {
        this.sendEvent(GameEvent.GAME_RUN_END);
    };
    return GameResponse;
})(egret.EventDispatcher);
GameResponse.prototype.__class__ = "GameResponse";
