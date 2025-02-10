import { NextResponse } from "next/server";
import client from "@/app/sanityClient";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await client.fetch(
      `*[_type == "user" && email == "${body.email}"]`
    );

    if (user.length) {
      const compare = await bcrypt.compare(body.password, user[0].password).then(function(result) {
        console.log(result, "result");
        return result
      });
      if (compare) {
        return NextResponse.json({
          statusbar: 200,
          user: user,
          message: "login successfully",
        });
      } else {
        return NextResponse.json({
          statusbar: 401,
          type: "password",
          message: "incorrect password",
        });
      }
    } else {
      return NextResponse.json({
        statusbar: 401,
        type: "email",
        message: "invalid email",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ statusbar: 401, message: error });
  }
}
