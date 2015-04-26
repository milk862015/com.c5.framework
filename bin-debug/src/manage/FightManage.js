var FightManage = (function () {
    function FightManage() {
        if (FightManage.instance != null) {
            throw new TypeError("FightManage Singleton already constructed");
        }
        FightManage.instance = this;
        this.initialize();
    }
    FightManage.prototype.initialize = function () {
    };
    FightManage.GetInstance = function () {
        if (FightManage.instance == null) {
            FightManage.instance = new FightManage();
        }
        return FightManage.instance;
    };
    FightManage.prototype.Start = function () {
    };
    return FightManage;
})();
FightManage.prototype.__class__ = "FightManage";
