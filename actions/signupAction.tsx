"use server";

import bcrypt from "bcrypt";

const handleSignup = async (prevState: any, formData: FormData) => {
  try {

    const myPlaintextPassword = formData.get("signupPassword")?.toString();
    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword as string, salt);

    const fields = {
      name: formData.get("username"),
      email: formData.get("signupEmail"),
      password: hash
    };

    console.log(fields, "fields");

    const res = await fetch(`https://e-commerce-ui-omega.vercel.app/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const data = await res.json();
    if (!res.ok) {
      return {message : data.message, type : data.type};
    }
    return data
  } catch (error) {
    console.log(error);
    return {message : error, type : "server error", statusbar: 500};
  }
};

export default handleSignup;
