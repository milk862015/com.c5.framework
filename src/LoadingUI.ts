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

class LoadingUI extends egret.Sprite{
    private _bg:egret.Bitmap;
    private _sp:egret.Bitmap;
    private _ball:egret.Bitmap;
    private _baseW:number;
    private _baseX:number;
    private _logo:egret.Bitmap;
    private _curComplete:number=0;
    private _totalComplete:number=0;
    public constructor(tc:number){
        super();
        this._totalComplete = tc;
        this.createView();
    }
    private textField:egret.TextField;

    private createView():void {
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes('loading.loadbg_png');
        this._bg.x = Config.STAGE_WIDTH * 0.5 - this._bg.width * 0.5;
        this._bg.y = 450;

        this._baseW = this._bg.width;

        this._sp = new egret.Bitmap();
        this.addChild(this._sp);
        this._sp.texture = RES.getRes('loading.green_png');
        this._sp.scale9Grid = new egret.Rectangle(11,12,4,3);
        this._sp.x = this._bg.x+2;
        this._sp.y = 450+3;
        this.addChild(this._bg);

        this._ball = new egret.Bitmap();
        this._ball.texture = RES.getRes('loading.ball_png');
        this._ball.x = this._bg.x - 13;
        this._baseX = this._ball.x;
        this._ball.y = 390;
        this.addChild(this._ball);

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.x = 290;
        this.textField.y = 480;
        this.textField.textAlign = 'center';

        this._logo = new egret.Bitmap();
        this._logo.texture = RES.getRes('logo');
        this._logo.x = 0;
        this._logo.y = 100;

        this.addChild(this._logo);
    }

    public AddLoadComplete():void{
        this._curComplete = this._curComplete + 1;
        this.setProgress(this._curComplete,this._totalComplete);
    }

    public setProgress(current, total):void {
        var per:number = Math.floor(current/total*100);
        this._sp.width = Math.floor((this._baseW-3) * per/100);
        this._ball.x = this._baseX + this._baseW * per/100;
        this.textField.text =  per+"%";
    }
}
