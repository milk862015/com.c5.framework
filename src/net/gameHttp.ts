/**
 * Created by Administrator on 2014/12/23.
 */
class GameHttp{
    public static SendJoin( nTxt:string,pTxt:string,imgData:string,callback:Function,target:any ):void{
        var urlLoader = new egret.URLLoader();
        var urlReq:egret.URLRequest = new egret.URLRequest();
        urlReq.url = SGame.GetSendUrl();
        urlReq.method = egret.URLRequestMethod.POST;
        //数据
        var content:string = "name="+ nTxt + "&paasWord=" + pTxt + "&data="+imgData;
        urlReq.data = new egret.URLVariables(content);
        urlLoader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
        urlLoader.addEventListener(egret.Event.COMPLETE,callback,target);
        urlLoader.load(urlReq);
    }
}