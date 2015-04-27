/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

class Main extends egret.DisplayObjectContainer{

    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;
    private loadArr:string[] = ["preLoad","ready","game"];//加载数据组
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter",AssetAdapter);

        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/theme.thm");

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/resource.json","resource/");

    }

    /**
     * 配置文件加载完成,开始预加载preLoad资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void{
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadGroup("loadRes");
    }
    /**
     * preLoad资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if(event.groupName=="preLoad"){
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
            this.createScene();
        }else if( event.groupName == "loadRes" ){
            //设置加载进度界面
            this.loadingView  = new LoadingUI(this.getTotalNeedLoad());
            this.stage.addChild(this.loadingView);

            if(SGame.IsShowLaunch){
                this.loadArr.push('launch');
                //RES.loadGroup("launch",2);
            }
            if(SGame.IsShowResult){
                this.loadArr.push('result');
                //RES.loadGroup("result",1);
            }

            var len:number = this.loadArr.length;
            for( var i:number=0;i<len;i++ ){
                RES.loadGroup(this.loadArr[i],i);
            }

            //RES.loadGroup("feedback",3);
            //RES.loadGroup("read",4);
            //RES.loadGroup("fight",5);
            //RES.loadGroup("preload",0);
        }
    }

    private getTotalNeedLoad():number{
        //var arr:string[] = ["preload","feedback","read","fight"];
        var arr:string[] = this.loadArr;
        if(SGame.IsShowLaunch){
            arr.push("launch")
        }
        if(SGame.IsShowResult){
            arr.push("result")
        }

        var num:number=0;
        var len:number = arr.length;
        for( var i=0;i<len;i++ ){
            var rArr = RES.getGroupByName(arr[i]);
            num = num + rArr.length;
        }
        return num;
    }

    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if( this.loadArr.indexOf(event.groupName) !=-1 ){
            this.loadingView.AddLoadComplete();
        }

        //if(event.groupName=="preload" || event.groupName=="launch" || event.groupName=="result" ){
        //this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
        //}
    }

    private gameLayer:egret.DisplayObjectContainer;

    private guiLayer:egret.gui.UIStage;
    /**
     * 创建场景界面
     */
    private createScene():void{

        //游戏场景层，游戏场景相关内容可以放在这里面。
        this.gameLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameLayer);
        // var bitmap:egret.Bitmap = new egret.Bitmap();
        // bitmap.texture = RES.getRes("bgImage");
        // this.gameLayer.addChild(bitmap);

        //GUI的组件必须都在这个容器内部,UIStage会始终自动保持跟舞台一样大小。
        this.guiLayer = new egret.gui.UIStage();
        this.addChild(this.guiLayer);

        //特效层
        var eLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        this.addChild(eLayer);

        GameManage.GetInstance().Init();
        FightConfig.init();//初始化配置数据
        console.log("game init");
        Core.Stage = this.stage;
        Core.UILayer = this.guiLayer;
        Core.GameLayer = this.gameLayer;
        Core.EffectLayer = eLayer;
        if( SGame.IsShowLaunch ){
            GameResponse.GetInstance().Launch();
        }else{
            GameResponse.GetInstance().Start();
        }
    }

    //private testResponse(e:GameEvent):void{
    //    egret.gui.Alert.show("这是一个弹窗!","弹窗")
    //}
    //
    //private onButtonClick(event:egret.TouchEvent):void{
    //    GameResponse.GetInstance().Start()
    //}
}