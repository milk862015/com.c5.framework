class SharePanel extends egret.Sprite{
	private bg:egret.Sprite;
	private bmp:egret.Bitmap;
	public constructor(){
		super();
		this.initialize();
	}	

	private initialize():void{
		this.bg = new egret.Sprite();
		this.bg.graphics.beginFill(0x000000,0.5);
		this.bg.graphics.drawRect(0,0,Config.STAGE_WIDTH,Config.STAGE_HEIGHT);
		this.bg.graphics.endFill()
		this.bg.width = Config.STAGE_WIDTH;
		this.bg.height = Config.STAGE_HEIGHT;
		this.addChild(this.bg);

		this.bmp = new egret.Bitmap()
		this.bmp.texture = RES.getRes("form.shareImg_png");
		this.addChild(this.bmp);
		this.bmp.x = Config.STAGE_WIDTH*0.5 - this.bmp.width*0.5;
		this.bmp.y = 5;
		// this.bmp.y = Config.STAGE_HEIGHT *0.5 - this.bmp.height *0.5;

		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchFunc,this)
	}

	private touchFunc(e:egret.TouchEvent):void{
		if(this.parent){
			this.parent.removeChild(this)
		}
	}
}