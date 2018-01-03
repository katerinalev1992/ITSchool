import BaseController from "com/itschool/ui5typescript/controller/BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

@UI5("com.itschool.ui5typescript.controller.Main")
export default class App extends BaseController {

    public onInit(): void {
        console.log("On INIT in Main")
    }

    public onAfterRendering(): void {
        let that = this;
    }

    public onProcessPress(): void {
        alert("It works");
    }

    public handleToggleSecondaryContent(): void {
        let oSplitContainer = this.getView().byId("mySplitContainer");
        oSplitContainer.setShowSecondaryContent(!oSplitContainer.getShowSecondaryContent());
    }

    public onFacebookPress(): void {
        window.open("http://facebook.com", "_blank");
    }

    public static onInstagramPress(): void {
        window.open("http://insragram.com", "_blank");
    }

    public static onTwitterPress(): void {
        window.open("http://twitter.com", "_blank");
    }

    public static onLinkedinPress(): void {
        window.open("http://linkedin.com", "_blank");
    }

    public onEmailPress(): void {
        sap.m.URLHelper.triggerEmail(this.getView().byId("email").getText().split("Email: ")[1]);
    }

    public onPhonePress(): void {
        sap.m.URLHelper.triggerTel(this.getView().byId("phone").getText().split("Cellphone: ")[1]);
    }

    onItemPress(): void {
        console.log("here")
    }
}
