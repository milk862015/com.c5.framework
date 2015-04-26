class Config {
	static STAGE_WIDTH:number = 640;
	static STAGE_HEIGHT:number = 1008;

	static FIGHT_WIDTH:number = 110;		//战斗格子宽
	static FIGHT_HEIGHT:number = 115;	//战斗格子高
	static FIGHT_ROW:number = 5; //横向数量
	static FIGHT_COLUMN:number = 5; //纵向数量

	static FIGHT_TIME_TOTAL:number = 60;//一局的时间(单位:秒)
	//战斗中怪物的数值
	static FIGHT_MONSTER_DEL:number = -1;//等待被删的
	static FIGHT_MONSTER_ZERO:number = 0;
	static FIGHT_MONSTER_FIRST:number = 1;
	static FIGHT_MONSTER_SECOND:number = 2;
	static FIGHT_MONSTER_THIRD:number = 3;

	static FIGHT_MONSTER_TYPE_COUNT:number = 4;

	//游戏中的速度控制
	static BOMB_FRAMERATE:number = 10;
	static FIGHT_MONSTER_RUN_TIME:number = 250;
	static FIGHT_MOSNTER_CHANGE_TIME:number = 100;
}