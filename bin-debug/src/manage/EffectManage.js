var EffectManage = (function () {
    function EffectManage() {
        if (EffectManage.instance != null) {
            throw new TypeError("EffectManage Singleton already constructed");
        }
        EffectManage.instance = this;
        this.initialize();
    }
    EffectManage.prototype.initialize = function () {
    };
    EffectManage.GetInstance = function () {
        if (EffectManage.instance == null) {
            EffectManage.instance = new EffectManage();
        }
        return EffectManage.instance;
    };
    EffectManage.prototype.ShowShare = function () {
        var sharePanel = new SharePanel();
        Core.EffectLayer.addChild(sharePanel);
    };
    return EffectManage;
})();
EffectManage.prototype.__class__ = "EffectManage";
