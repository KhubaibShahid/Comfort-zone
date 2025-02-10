import { createContext, Dispatch } from "react";
import { SetStateAction } from "react";

interface CartType {
    name: string;
    price: number;
    quantity: number;
    id: number;
    img: string;

}

interface UserType {
    username : string,
    email : string,
    _id : string,
}

const UserCart = createContext<{items: [] | CartType[], setItems :  Dispatch<SetStateAction<[] | CartType[]>>} | []>([]);

const User = createContext<{user : null | UserType, setUser : Dispatch<SetStateAction<null | UserType>>} | null>(null);


export {UserCart, User};
export type {CartType, UserType};