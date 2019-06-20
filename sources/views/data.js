import {JetView} from "webix-jet";


export default class DataView extends JetView {
	config() {

		let headerLabel = {view: "label", label: "Data", align: "center", height: 50, css: "settings_label"};

		let side = {
			view: "list",
			localId: "mylist",
			width: 200,
			select: true,
			scroll: false,
			data: ["Countries", "Statuses"],
			multiview:true,
			
		};

		let countriesView = {
			view: "datatable",
			localId: "countries",
			css: "align-center",
			select: true,
			editaction: "dblclick",
			columns: [
				{id: "id", header: "Short Name"},
				{id: "Name", header: "Fill Name", fillspace: true, editor: "text", sort: "string"}
			]
		};

		let statusesView = {
			view: "datatable",
			Localid: "statuses",
			editaction: "dblclick",
			css: "align-center",
			select: true,
			columns: [
				{id: "Name", header: "Name", fillspace: true, editor: "text", sort: "string"},
				{id: "Icon", header: "Icon", fillspace: true, editor: "text", sort: "string"}
			]
		};

		let main = {
			cells: [
				{localIdd: "Counries", rows: [countriesView]},
				{localIdd: "Statuses", rows: [statusesView]}
			]
		};

		const fotbar = {
			view: "toolbar",
			elements: [
				{},
				{view: "button", value: "Add", align: "left", width: 150},
				{view: "button", label: "Delete", width: 150}
			]
		};

		let ui = {
			rows: [
				headerLabel,
				{cols: [side, main]},
				fotbar
			]
		};

		return ui;
	}

	init() {

	}
}
