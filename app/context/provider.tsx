"use client";
import  {UserCart, User}  from "./context";
import { CartType, UserType } from "./context";
import {useState} from "react";
import { useEffect } from "react";

export function CartProvider({children}: {children: React.ReactNode}) {

    const [items, setItems] = useState<CartType[] | []>([]);
    return (
        <UserCart.Provider value={{items, setItems}}>
            {children}
        </UserCart.Provider>
    )
}

export function UserProvider({children} : {children : React.ReactNode}) {
    const [user, setUser] = useState<UserType | null>(null);

    async function getToken() {
        const res = await fetch("http://localhost:3000/api/auth")
        const token = await res.json();
        if (token) {
            setUser(token.user);
        }
    }

    useEffect(() => {
        getToken()
    }, [])
    return (
        <User.Provider value={{user, setUser}}>
            {children}
        </User.Provider>
    )
}