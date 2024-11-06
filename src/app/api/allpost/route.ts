import connectDb from "@/app/lib/connectDb";
import PostModel from "@/models/post.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await connectDb();

    try {
        const allPosts = await PostModel.find({});

        console.log(allPosts);

        return NextResponse.json({ success: true, data: allPosts }, { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json(
            { success: false, error: "Error fetching posts" },
            { status: 500 }
        );
    }
}
