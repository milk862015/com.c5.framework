class LoginSkin extends egret.gui.Panel{
	private btnStart:egret.gui.UIAsset;
	
	public constructor(){
		super();
		this.skinName = "skins.ui.LoginSkin"
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private onAddToStage(e:egret.Event){
		this.initialize();
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private initialize():void{

	}
}