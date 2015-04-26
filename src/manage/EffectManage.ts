class EffectManage{
	private static instance:EffectManage;
	private guide:GuideMovie;

	public constructor(){
		if( EffectManage.instance != null ){
			throw new TypeError("EffectManage Singleton already constructed")
		}

		EffectManage.instance = this;
		this.initialize();
	}

	private initialize():void{

	}

	static GetInstance():EffectManage{
		if( EffectManage.instance == null ){
			EffectManage.instance = new EffectManage();
		}

		return EffectManage.instance;
	}

	public ShowShare():void{
		var sharePanel:SharePanel = new SharePanel();
		Core.EffectLayer.addChild(sharePanel);
	}
}