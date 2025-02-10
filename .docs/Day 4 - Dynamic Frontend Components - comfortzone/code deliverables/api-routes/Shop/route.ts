import { NextResponse } from "next/server";
import client from "@/app/sanityClient";

export async function GET(request : Request) {
    try{
        const url = new URL(request.url);
        const category = url.searchParams.get("category");
        if (category) {
            try{
                console.log("params")
                const data = await client.fetch(`*[_type == "product" && category == "${category}"]`);
                if (data.length != 0) {
                    return NextResponse.json(data);
                } else {
                    return NextResponse.json({statusbar : 404, message : "not found"})
                }
            }
            catch(err) {
                console.log("err :", err)
            }
        } else {
            console.log("no params")
            const data = await client.fetch(`*[_type == "product"]`);
            return NextResponse.json(data);
        }
    }catch(err) {
        return NextResponse.json({statusbar : 500, message : err});
    }
}
