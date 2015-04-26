class FightSkin extends egret.gui.Panel{
	private timeGroove:egret.gui.UIAsset;
	private score:egret.gui.Label;
	public constructor(){
		super();
		this.skinName = "skins.ui.FightSkin";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private onAddToStage(e:egret.Event){
		this.initialize();
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private initialize():void{
		
	}
}