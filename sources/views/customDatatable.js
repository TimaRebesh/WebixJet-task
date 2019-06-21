import {JetView} from "webix-jet";

export default class CustomDatatableView extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._gridData = data;
	}

	config() {
		let bottomSide = {
			type: "empty",
			borderless: true,
			padding: 10,
			margin: 10,
			cols: [
				{gravity: 2},
				{
					view: "button",
					type: "form",
					value: "Add",
					click: () => {
						this.$$("customDT").add({});
					}
				},
				{view: "button", type: "form", value: "Delete"}
			]
		};

		return {
			type: "empty",
			rows: [
				{
					view: "datatable",
					localId: "customDT",
					editable: true,
					editaction: "dblclick",
					autoConfig: true,
					scrollX: false
				},
				bottomSide
			]
		};
	}

	init(view) {
		view.queryView("datatable").parse(this._gridData);
	}
}
