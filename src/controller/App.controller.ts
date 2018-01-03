import BaseController   from "com/itschool/ui5typescript/controller/BaseController";
import JSONModel        from "sap/ui/model/json/JSONModel";

@UI5("com.itschool.ui5typescript.controller.App")
export default class App extends BaseController {

    public onInit(): void {
        console.log("APP on init")
    }

}
