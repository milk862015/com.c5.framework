var Config = (function () {
    function Config() {
    }
    Config.STAGE_WIDTH = 640;
    Config.STAGE_HEIGHT = 1008;
    Config.FIGHT_WIDTH = 110; //战斗格子宽
    Config.FIGHT_HEIGHT = 115; //战斗格子高
    Config.FIGHT_ROW = 5; //横向数量
    Config.FIGHT_COLUMN = 5; //纵向数量
    Config.FIGHT_TIME_TOTAL = 60; //一局的时间(单位:秒)
    //战斗中怪物的数值
    Config.FIGHT_MONSTER_DEL = -1; //等待被删的
    Config.FIGHT_MONSTER_ZERO = 0;
    Config.FIGHT_MONSTER_FIRST = 1;
    Config.FIGHT_MONSTER_SECOND = 2;
    Config.FIGHT_MONSTER_THIRD = 3;
    Config.FIGHT_MONSTER_TYPE_COUNT = 4;
    //游戏中的速度控制
    Config.BOMB_FRAMERATE = 10;
    Config.FIGHT_MONSTER_RUN_TIME = 250;
    Config.FIGHT_MOSNTER_CHANGE_TIME = 100;
    return Config;
})();
Config.prototype.__class__ = "Config";
