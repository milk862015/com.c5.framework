var GameResponse = (function (_super) {
    __extends(GameResponse, _super);
    function GameResponse() {
        _super.call(this);
        if (GameResponse.instance != null) {
            throw new TypeError("GameResponse Singleton already constrocted");
        }
        GameResponse.instance = this;
    }
    var __egretProto__ = GameResponse.prototype;
    GameResponse.GetInstance = function () {
        if (GameResponse.instance == null) {
            GameResponse.instance = new GameResponse();
        }
        return GameResponse.instance;
    };
    __egretProto__.sendEvent = function (key) {
        var ge = new GameEvent(key);
        this.dispatchEvent(ge);
    };
    __egretProto__.Launch = function () {
        this.sendEvent(GameEvent.LAUNCH);
    };
    __egretProto__.Start = function () {
        this.sendEvent(GameEvent.START);
    };
    __egretProto__.GameOver = function () {
        this.sendEvent(GameEvent.GAME_OVER);
    };
    __egretProto__.TimerStart = function () {
        this.sendEvent(GameEvent.TIME_START);
    };
    __egretProto__.TimerPause = function () {
        this.sendEvent(GameEvent.TIME_PAUSE);
    };
    __egretProto__.AddScore = function (num, combo) {
        var ge = new GameEvent(GameEvent.SCORE);
        ge.Num = num;
        ge.Combo = combo;
        this.dispatchEvent(ge);
    };
    __egretProto__.SendRunEnd = function () {
        this.sendEvent(GameEvent.GAME_RUN_END);
    };
    return GameResponse;
})(egret.EventDispatcher);
GameResponse.prototype.__class__ = "GameResponse";
