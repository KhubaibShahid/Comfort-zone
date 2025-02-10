import { NextResponse} from "next/server";
import client from "@/app/sanityClient";

export async function GET(req : Request) {
    try{
        const url = new URL(req.url);
        const id = url.pathname.split("/").pop();

        if (!id) {
            return NextResponse.json({statusbar: 422, err : "missing id"});
        }

        const data = await client.fetch(`*[_type == "product" && _id == "${id}"]`);
        if (data.length) {
            return NextResponse.json(data);
        } else {
            return NextResponse.json({statusbar : 404, err: "not found"})
        }
    }catch(err) {
        console.log("error", err)
        return NextResponse.json({statusbar: 500, err: "error"})
    }
}
