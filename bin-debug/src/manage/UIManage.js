var UIManage = (function () {
    function UIManage() {
        if (UIManage.instance != null) {
            throw new TypeError("UIManage Singleton already constructed");
        }
        UIManage.instance = this;
    }
    UIManage.GetInstance = function () {
        if (UIManage.instance == null) {
            UIManage.instance = new UIManage();
        }
        return UIManage.instance;
    };
    UIManage.prototype.GetShowUI = function () {
        return this.curShow;
    };
    UIManage.prototype.Show = function (key) {
        if (this.curKey == key) {
            return;
        }
        this.Close();
        switch (key) {
            case "FightSkin":
                this.curShow = new FightSkin();
                break;
            case "LoginSkin":
                this.curShow = new LoginSkin();
                break;
            case "ResultSkin":
                this.curShow = new ResultSkin();
                break;
        }
        if (this.curShow) {
            Core.UILayer.addElement(this.curShow);
        }
    };
    UIManage.prototype.Close = function () {
        if (this.curShow && this.curShow.parent) {
            var pa = this.curShow.parent;
            pa.removeElement(this.curShow);
            this.curShow = null;
        }
    };
    return UIManage;
})();
UIManage.prototype.__class__ = "UIManage";
