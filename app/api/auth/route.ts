
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as jose from "jose";

export async function GET() {
    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get('token')?.value;
        if (token) {
            const user = jose.decodeJwt(token);
            console.log(user, "payload")
            return NextResponse.json({statusbar : 200, user : user});
        } else {
            return NextResponse.json({statusbar: 401, message : "token unauthorized"})
        }
    } catch (err) {
        console.log("err", err);
        return NextResponse.json({statusbar : 500, message : err});
    }
}