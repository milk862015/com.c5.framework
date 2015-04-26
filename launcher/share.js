var SGame ={};

//为true的时候显示，非true不显示
SGame.IsShowResult = true;
SGame.IsShowLaunch = true;
SGame.IsLottery = true;
// 0-有黑框，等比缩放 1-无黑框，拉伸缩放
SGame.ScaleMode = 0;
//不显示结束页的时候的回调函数
SGame.NotShowCallBack = function(obj){

};

 SGame.Share = function(obj){

};

SGame.Lottery=function (){

};

//check变量数据
SGame.check = function(){
    if( typeof is_complete != "undefined" ){
        SGame.IsShowLaunch = is_complete;
        SGame.IsShowResult = is_complete;
    }
};

SGame.checkHost = function(){
    var host = location.host;
    if( host.indexOf('aiwanpai.com') != -1 ){
        var js = document.createElement('script');
        js.src = 'http://www.aiwanpai.com/assets/js/game-handler.js';
        document.getElementsByTagName('head')[0].appendChild(js);
        SGame.check();
    }
};

SGame.checkHost();