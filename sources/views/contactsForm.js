import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class ContactsForm extends JetView {
	config() {
		return {
			view: "form",
			width: "400",
			localId: "contactsForm",
			elements: [
				{view: "text", name: "Name", label: "User name", labelPosition: "top"},
				{view: "text", name: "Email", label: "Email", labelPosition: "top"},
				{
					view: "combo",
					label: "Country",
					localId: "countries",
					placeholder: "Options",
					options: {
						body: {
							template: "#Name#",
							data: countries
						}
					}
				},
				{
					view: "combo",
					label: "Status",
					value: "#Name#",
					placeholder: "Options",
					options: {
						body: {
							template: "#Name#",
							data: statuses
						}
					}
				},
				{cols: [
					{},
					{
						view: "button",
						value: "Save",
						width: 200,
						css: "webix_primary",
						click: () => {
							$$("list:mylist").save();
						}
					}
				]
				},
				{}
			]
		};
	}

	init() {
	}

	urlChange() {
		let id = this.getParam("id");
		if (id) {
			let item = contacts.getItem(id);
			this.$$("contactsForm").setValues(item);
		}
	}
}
