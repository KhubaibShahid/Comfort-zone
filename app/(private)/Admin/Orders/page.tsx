"use client"

import Navbar from "@/app/components/nav"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react"
import Image from "next/image";
import LOGO from "../../../assests/logo.svg";


export default function Orders() {

    const [user, setUser] = useState();

    const [isLoading, setIsLoading] = useState(true);

    async function checkAdmin() {
        const res = await fetch("http://localhost:3000/api/auth");
        const user = await res.json();
        console.log(user.user)
        if (user.user.roles[0] !== "admin") {
            redirect("/")
        } else {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        if (user) {
 
        }
    }, [user])
    useEffect(() => {
        checkAdmin()
    }, [])
    return isLoading ? (
        <div className="w-full h-svh flex justify-center items-center">
            <Image width={100} src={LOGO} className="animate-pulse" alt="logo"></Image>
        </div>
    ) : (
        <div className="">
        <Navbar type="private" className=""></Navbar>
        <div className="">Orders</div>
        </div>
    )
}
