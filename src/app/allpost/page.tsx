"use client";

import { useEffect, useState } from "react";
import { ApiResponse, IPost } from "@/models/post.model";
import axios from "axios";
import Navbar from "@/components/Navbar";



export default function PostsPage() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response: ApiResponse = await axios
                    .get("/api/allpost")
                    .then((res) => res.data);

                    console.log(response);

                if (!response.success) {
                    throw new Error("Failed to fetch posts");
                }

                setPosts(response.data);
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : "An error occurred"
                );
                console.error("Failed to fetch posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div className="flex justify-center p-4">Loading posts...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            {error ? (
                <div className="text-red-500 p-4">{error}</div>
            ) : posts.length === 0 ? (
                <div className="text-gray-500 p-4">No posts available</div>
            ) : (
                <div className="grid gap-4">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="border p-4 rounded-lg"
                        >
                            <h2 className="text-xl font-bold mb-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-700">{post.body}</p>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
