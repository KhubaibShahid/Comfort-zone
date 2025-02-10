"use client"

import { useEffect, useState } from "react"
import Navbar from "@/app/components/nav";
import Image from "next/image";
import LOGO from "../../../assests/logo.svg";


export default function Products() {


    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    async function getProducts() {
        const res = await fetch(".././api/allProducts");
        const data = await res.json();
        if (data.length) {
            setProducts(data);
            setIsLoading(false)
        } else {
            setError("error");
        }
    }

    useEffect(() => {
        getProducts
    }, [])
    return isLoading ? (
        <div className="w-full h-svh flex justify-center items-center">
        <Image width={100} src={LOGO} className="animate-pulse" alt="logo"></Image>
    </div>
    ) : (
        <div>
            <Navbar type="private"></Navbar>
            <div className="p-8 border-b shadow-md">
                <h2 className="font-bold text-4xl">
                Products
                </h2>
            </div>
            <div className="flex ">
                
            </div>
        </div>
    )
}