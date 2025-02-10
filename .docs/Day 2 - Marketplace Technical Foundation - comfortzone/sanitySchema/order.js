export default {
  name: "orders",
  title: "Orders",
  type: "document",
  fields: [
    { name: "product_id", title: "Product ID", type: "string" },
    { name: "customer_id", title: "Customer ID", type: "string" },
    { name: "quantity", title: "Quantity", type: "number" },
    { name: "order_date", title: "Order Date", type: "date" },
    { name: "order_status", title: "Order Status", type: "string" },
    {
      name: "order_info",
      title: "Order Info",
      type: "objects",
      fields: [
        { name: "street", title: "Street", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "state", title: "State", type: "string" },
        { name: "zipcode", title: "Zip Code", type: "number" },
        { name: "country", title: "Country", type: "string" },
        { name: "phone", title: "Phone", type: "number" },
        {name : "add-info", title : "Additional Info", type : "string"}
    ],
    },
  ],
};
