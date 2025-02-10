


// -----------------------  API Integration ---------------------------

import { NextRequest, NextResponse } from "next/server";
import client from "@/app/sanityClient";

export async function GET() {
    try{
        const data = await client.fetch(`*[_type == "product"]`);
        return NextResponse.json(data);
    }catch(err) {
        return NextResponse.json({statusbar : 500, message : err});
    }
}


// ------------------------ Fetching Data --------------------------------

import {useState, useEffect} from "react";

const [tempArr, setTempArr] = useState([]);
const [error, setError] = useState("");

async function getProducts() {
    try {
      const res : any = await fetch("/api/allProduct/")
      const data = await res.json();
      if (data.length) {
        setTempArr(data);
        setError("");
      }
    } catch (err) {
      setError("internet issue");
      console.log(error);
    }
  }

//   ------------------------- Migrate Data --------------------------------

import client from "@/app/sanityClient";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

    try {

        const {data} = await axios.get("https://template-0-beta.vercel.app/api/product");

        for (const product of data) {
            await client.create({
              _type: 'product',
              id: product.id,
              name: product.name,
              imagePath: product.imagePath,
              price: parseFloat(product.price),
              description: product.description,
              discountPercentage: product.discountPercentage,
              isFeaturedProduct: product.isFeaturedProduct,
              stockLevel: product.stockLevel,
              category: product.category,
            });
          }
      
          res.status(200).json({ message: 'Data inserted successfully!' });


    }
    catch(err) {
        console.log(err);
        res.status(500).json({error : "something wrong go to console"});
    }
}