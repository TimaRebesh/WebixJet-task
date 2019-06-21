import {JetView} from "webix-jet";
import CustomDatatable from "./customDatatable";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class DataView extends JetView {
	config() {
		let header = {
			view: "label", label: "Data", align: "center", height: 50, css: "settings_label"
		};

		let dataSide = {
			view: "tabbar",
			localId: "data:tabbar",
			multiview: true,
			options: [
				{id: "dataCountries", value: "Countries"},
				{id: "dataStatuses", value: "Statuses"}
			]
		};

		let ui = {
			rows: [
				header,
				{
					rows: [
						dataSide,
						{
							cells: [
								{id: "dataCountries", $subview: new CustomDatatable(this.app, "", countries)},
								{id: "dataStatuses", $subview: new CustomDatatable(this.app, "", statuses)}
							]
						}
					]
				}
			]
		};

		return ui;
	}
}
