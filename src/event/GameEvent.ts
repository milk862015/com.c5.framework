class GameEvent extends egret.Event{
	public static LAUNCH:string = "game_event_launch";//游戏launch
	public static START:string = "game_event_start"; //游戏开始
	public static TIME_START:string= "game_event_time_start"; //开始计时
	public static TIME_PAUSE:string = "game_event_time_pause"; //暂停计时
	public static GAME_OVER:string = "game_event_game_over"; //游戏结束
	public static SCORE:string = "game_even_score"; //计分
	public static GAME_RUN_END:string = "game_run_end"; //战斗宠运行完毕的实践

	public Num:number=0;//消除个数
	public Combo:number=0; //Combo次数
	public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false){
		super(type,bubbles,cancelable);
	}
}