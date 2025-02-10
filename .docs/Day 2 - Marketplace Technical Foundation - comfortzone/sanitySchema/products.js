export default {
    name : "products",
    title : "Products",
    type : "document",
    fields : [
        {name : "main_image", title : "Main Image", type : "image"},
        {name : "name", title : "Name", type : "string"},
        {name : "price", title : "Price", type : "number"},
        {name : "images", title : "Images", type : "array", of : {type : "image"}},
        {name : "description", title : "Description", type : "string"},
        {name : "info", title : "Additional Information", type : "string"},
        {name : "color", title : "Color", type : "array", of : {type : "color"}},
        {name : "SKU", title : "SKU", type : "reference", to : [{type : "SKU"}]},
    ]
}