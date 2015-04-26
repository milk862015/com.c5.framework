class FightScene extends egret.Sprite{
	static instance:FightScene;

	public constructor(){
		super();
		if(FightScene.instance != null){
			throw new TypeError("FightScene Singleton already constructed")
		}
		this.initialize();
		FightScene.instance = this;
	}

	private initialize():void{
		this.initView();
	}

	/**
	 *初始化界面
	**/
	private initView():void{
 
	}

	static GetInstance():FightScene{
		if(FightScene.instance == null){
			FightScene.instance = new FightScene()
		}
		return FightScene.instance
	}

	public Init():void{
	}
}
