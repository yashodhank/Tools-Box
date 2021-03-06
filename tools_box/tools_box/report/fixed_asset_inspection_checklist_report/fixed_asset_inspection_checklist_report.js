// Copyright (c) 2016, bobzz.zone@gmail.com and contributors
// For license information, please see license.txt

frappe.query_reports["Fixed Asset Inspection Checklist Report"] = {
	"filters": [
		{
			"fieldname":"from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": "80",
			"reqd":1
		},
		{
			"fieldname":"to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": get_today(),
			"reqd":1
		},
		{
			"fieldname":"asset",
			"label": __("Asset"),
			"fieldtype": "Link",
			"options": "Asset"
		},
		{
			"fieldname":"category",
			"label": __("Asset Category"),
			"fieldtype": "Link",
			"options": "Asset Category"
		},
		{
			"fieldname":"status",
			"label": __("Status"),
			"fieldtype": "Link",
			"options": "Fixed Asset Inspection Status"
		},
	]
}
