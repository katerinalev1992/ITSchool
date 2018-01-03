/*global history */
import Controller    from "sap/ui/core/mvc/Controller";
import MyUIComponent from "com/itschool/ui5typescript/Component";

@UI5("com.itschool.ui5typescript.controller.BaseController")
export default class BaseController extends Controller
{

    public getResourceBundle(): jQuery.sap.util.ResourceBundle {
        let resourceModel = <sap.ui.model.resource.ResourceModel>this.getOwnerComponent().getModel("i18n");
        return resourceModel.getResourceBundle();
    }

    public getOwnerComponent(): MyUIComponent {
        return <MyUIComponent>super.getOwnerComponent();
    }

    public onNavBack(): void {
            // this.getRouter().navTo("master", {}, true);
    }
}
