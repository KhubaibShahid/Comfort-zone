// import client from "@/app/sanityClient";
// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req : NextApiRequest, res : NextApiResponse) {

//     try {

//         const {data} = await axios.get("https://template-0-beta.vercel.app/api/product");

//         for (const product of data) {
//             await client.create({
//               _type: 'product',
//               id: product.id,
//               name: product.name,
//               imagePath: product.imagePath,
//               price: parseFloat(product.price),
//               description: product.description,
//               discountPercentage: product.discountPercentage,
//               isFeaturedProduct: product.isFeaturedProduct,
//               stockLevel: product.stockLevel,
//               category: product.category,
//             });
//           }
      
//           res.status(200).json({ message: 'Data inserted successfully!' });


//     }
//     catch(err) {
//         console.log(err);
//         res.status(500).json({error : "something wrong go to console"});
//     }
// }