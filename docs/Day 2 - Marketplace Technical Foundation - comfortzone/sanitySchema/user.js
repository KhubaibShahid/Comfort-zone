export default {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    { name: "username", title: "User Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "password", title: "Password", type: "password" },
    {
      name: "orders",
      title: "Orders",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {name : "wishlist", title : "Wishlist", type: "array", of : [{type : string}]},
  ],
};
