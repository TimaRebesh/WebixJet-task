import {JetView} from "webix-jet";

export default class Exampel extends JetView {
	config() {
		return {
			rows: [
				{$subview: true}
			]
		};
	}

	init() {
		this.show("./start");
	}
}
