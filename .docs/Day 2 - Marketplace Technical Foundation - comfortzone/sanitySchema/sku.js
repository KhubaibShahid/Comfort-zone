export default {
    name : "SKU",
    title: "SKU",
    fields : [
        {name : "product_name", title : "Product Name", type : "string"},
        {name : "product_attributes", title : "Product Attributes", type : "array", of : [{type : "color"}]},
        {name : "inventory_level", title : "Inventory Level", type : "string"},
        {name : "product_id", title : "Product ID", type : "string"},
        {name : "product_des", title : "Product Description", type : "string"},
    ]

}