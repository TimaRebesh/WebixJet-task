import {JetView} from "webix-jet";
import {usersInfo} from "../models/records";

export default class ContactsView extends JetView {
	config() {
        let headerLabel = {view: "label", label: "Contacts", align: "center", height: 50, css: "settings_label"};
        
        let usersList = {
            view: "list",
            localId: "list:mylist",
            template: "#name# #mail#",
            select: true,
            scroll: false
        };

        let usersForm = {
            view: "form",
            localId: "form:myform",
            scrol: "y",
            elements: [
                { rows: [
                    { type: "section", template:"Edit films", },
                    { view: "text", label: "User Name", name: "userName"},
                    { view: "text", label: "Email", name: "email"}
                ]
            }
            ]
        };

        let ui = {
            cols: [
                {rows:[headerLabel, usersList ]},         
                usersForm
            ]
        }
        return ui;
	}

	init() {
        this.$$("list:mylist").parse(usersInfo);
	}
}