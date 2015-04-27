var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
        this.Num = 0; //消除个数
        this.Combo = 0; //Combo次数
    }
    var __egretProto__ = GameEvent.prototype;
    GameEvent.LAUNCH = "game_event_launch"; //游戏launch
    GameEvent.START = "game_event_start"; //游戏开始
    GameEvent.TIME_START = "game_event_time_start"; //开始计时
    GameEvent.TIME_PAUSE = "game_event_time_pause"; //暂停计时
    GameEvent.GAME_OVER = "game_event_game_over"; //游戏结束
    GameEvent.SCORE = "game_even_score"; //计分
    GameEvent.GAME_RUN_END = "game_run_end"; //战斗宠运行完毕的实践
    return GameEvent;
})(egret.Event);
GameEvent.prototype.__class__ = "GameEvent";
