import connectDb from "@/app/lib/connectDb";
import { auth } from "@/auth";
import PostModel from "@/models/post.model";
import { NextResponse } from "next/server";
import { Session } from "next-auth";

export async function POST(request: Request) {
    await connectDb();
    console.log("Hello");
    try {
        const { title, body } = await request.json();
        const newPost = new PostModel({ title, body });
        await newPost.save();

        console.log("Post saved successfully", newPost);
        return NextResponse.json(
            { message: "Post saved successfully", post: newPost },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving post:", error);
        return NextResponse.json(
            { success: false, error: "Error saving post" },
            { status: 500 }
        );
    }
}