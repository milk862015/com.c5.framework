class ResultSkin extends egret.gui.Panel{
	public constructor(){
		super();
		this.skinName = "skins.ui.ResultSkin";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private onAddToStage(e:egret.Event){
		this.initialize();
		this.removeEventListener(egret.TouchEvent.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private initialize():void{

	}

}