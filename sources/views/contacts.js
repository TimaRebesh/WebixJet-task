import {JetView} from "webix-jet";
import {usersInfo} from "../models/records";
import ContactsForm from "./contactsForm";


export default class ContactsView extends JetView {
	config() {
		let headerLabel = {view: "label", label: "Contacts", align: "center", height: 50, css: "settings_label"};

		let usersList = {
			view: "list",
			localId: "list:mylist",
			template: "#name# <br> #mail# <span class='webix_icon mdi mdi-close remove-icon' title='Remove'>x</span>",
			type: {height: 80},
			select: true,
			scroll: "auto",
			onClick: {
				"remove-icon": (e, id) => {
					webix.confirm({
						text: "Are you sure you want to delete this data?",
						callback: (result) => {
							if (result) {
								usersInfo.remove(id);
							}
						}
					});
					return false;
				}
			}
		};

		let ui = {
			cols: [
				{rows: [
					headerLabel,
					usersList
				]},
				ContactsForm
			]
		};
		return ui;
	}

	init() {
		this.$$("list:mylist").parse(usersInfo);
		let list = this.$$("list:mylist");
		list.select(list.getFirstId());
	}
}
