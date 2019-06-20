import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		return {
			rows: [
				{view: "label", label: "Settings", align: "center", height: 50, css: "settings_label"},
				{view: "segmented",
					value: "ru",
					inputWidth: 250,
					options: [
                        {id: "en", value: "EN"},
						{id: "ru", value: "RU"}	
					]}
			]
		};
	}

	init() {
	}
}