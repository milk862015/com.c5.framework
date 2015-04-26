class FightManage{
	private static instance:FightManage

	public constructor(){
		if( FightManage.instance != null ){
			throw new TypeError("FightManage Singleton already constructed")
		}
		FightManage.instance = this;
		this.initialize();
	}

	private initialize():void{

	}

	static GetInstance():FightManage{
		if(FightManage.instance == null){
			FightManage.instance = new FightManage();
		}

		return FightManage.instance;
	}

	public Start():void{

	}
}
