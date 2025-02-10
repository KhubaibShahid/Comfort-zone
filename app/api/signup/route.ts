import { NextResponse } from "next/server";
import client from "@/app/sanityClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const regex =
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
    if (body.name.length > 2) {
      if (body.email.match(regex)) {
        if (body.password.length > 7) {
          if (client) {
            const result = await client.create({
              _type: "user",
              username: body.name,
              email: body.email,
              password: body.password,
              wishlist: [],
              orders: [],
            });
            console.log(result);
          }

        return NextResponse.json({statusbar : 200, message : "account created"})
        } else {
          return NextResponse.json({statusbar : 401, type: "password" , message: "password contain at least 8 characters"})
        }
    } else {
        return NextResponse.json({statusbar : 401, type : "email", message: "invalid email"})
    }
} else {
        return NextResponse.json({statusbar : 401, type : "username", message: "username contain at least 3 characters"})
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ statusbar: 401, message: err });
  }
}
