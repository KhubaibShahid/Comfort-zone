export default {
    name : "shipment",
    title : "Shipment",
    fileds : [
        {name : "shipment_id", title : "Shipment ID", type : "string"},
        {name : "shipment_date", title : "Shipment Date", type : "date"},
        {name : "shipment_status", title : "Shipment Status", type : "string"},
        {name : "tracking_number", title : "Tracking Number", type : "number"},
        {name : "order_id", title : "Order ID", type : "string"},
        {name : "shipment_methods", title : "Shipment Methods", type : "string"},
        {name : "shipment_address", title : "Shipment Address", type : "string"},
        {name : "products", title : "Products", type : "array", of : [{type : "string"}]},
        {name : "tracking_info", title : "Tracking Info", type : "string"},
        {name : "additional_info", title : "Additional Info", type : "object", fields : [
            {name : "weight", title : "Weight", type: "string"},
            {name : "dimension", title : "Dimension", type: "string"},
            {name : "length", title : "Length", type: "string"},
            {name : "width", title : "width", type: "string"},
            {name : "height", title : "Height", type: "string"},
        ]},
    ]
}