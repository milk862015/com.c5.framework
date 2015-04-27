class GameResponse extends egret.EventDispatcher{
	static instance:GameResponse;
	public constructor(){
		super()
		if( GameResponse.instance != null ){
			throw new TypeError("GameResponse Singleton already constrocted")
		}
		GameResponse.instance = this;
	}

	static GetInstance():GameResponse{
		if(GameResponse.instance == null){
			GameResponse.instance = new GameResponse()
		}
		return GameResponse.instance
	}

	private sendEvent(key:string):void{
		var ge:GameEvent = new GameEvent(key);
		this.dispatchEvent(ge);
	}

	public Launch():void{
		this.sendEvent(GameEvent.LAUNCH);
	}

	public Start():void{
		this.sendEvent(GameEvent.START)
	}

	public GameOver():void{
		this.sendEvent(GameEvent.GAME_OVER)
	}

	public TimerStart():void{
		this.sendEvent(GameEvent.TIME_START)
	}

	public TimerPause():void{
		this.sendEvent(GameEvent.TIME_PAUSE)
	}

	public AddScore(num:number,combo:number):void{
		var ge:GameEvent = new GameEvent(GameEvent.SCORE)
		ge.Num = num;
		ge.Combo = combo;
		this.dispatchEvent(ge);
	}

	public SendRunEnd():void{
		this.sendEvent(GameEvent.GAME_RUN_END)	
	}
}