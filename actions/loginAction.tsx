"use server"
import * as jose from "jose";
import { cookies } from "next/headers.js";

const handleLogin = async (prev: any, formData: FormData) => {
  try {

    const fields = {
      email: formData.get("loginEmail"),
      password: formData.get("loginPassword"),
      id : 112233
    };

    const res = await fetch(`https://e-commerce-ui-omega.vercel.app/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(fields),
    });

    const data = await res.json();

    if (!res.ok || data.statusbar != 200) {
      return data;
    }

    const user = data.user;

    console.log(user);

    const payload = {
      user: user,
      roles: [user[0].email == "Admin123@gmail.com" ? "admin" : "user"],
      permission: {
        read: true,
        write: true,
      },
    };


    const alg = "HS256";
    const secret = new TextEncoder().encode("khubaib");
    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setSubject(fields.id.toString())
      .setExpirationTime("1h")
      .sign(secret);

    const expTime = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

    console.log("token", token);

    

     const c = await cookies();

     c.set('token', token, {
      expires: expTime,
      httpOnly: true,
      path: "/",
      sameSite: "strict",
    });

    return {message : data.message, user : data.user}


  } catch (error) {
    console.log(error, "error");
    return error
  }
};

export default handleLogin;
