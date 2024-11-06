import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
    title: string;
    body: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
}

const postSchema: Schema<IPost> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxlength: [100, "Title cannot be more than 100 characters"],
        },
        body: {
            type: String,
            required: [true, "Body content is required"],
            trim: true,
        },
    },
    
    {
        timestamps: true,
    }
);

export interface ApiResponse {
    success: boolean;
    data: IPost[];
    count?: number;
}
const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);

export default Post;
