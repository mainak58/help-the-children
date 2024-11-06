"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

function FormComponents() {
    const [input, setInput] = useState({
        title: "",
        body: "",
    });

    const [posts, setPosts] = useState([]);
    const { data: session } = useSession();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: input.title,
                body: input.body,
            }),
        });

        if (res.ok) {
            console.log("Data saved to the database");
            setInput({ title: "", body: "" });
        } else {
            console.error("Error saving data");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 py-4 px-6 max-w-md mx-auto bg-white shadow-lg rounded-lg"
        >
            <input
                type="text"
                name="title"
                value={input.title}
                onChange={(e) => {
                    setInput({ ...input, title: e.target.value });
                }}
                placeholder="Enter title"
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                name="body"
                value={input.body}
                onChange={(e) => {
                    setInput({ ...input, body: e.target.value });
                }}
                placeholder="Enter body"
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                Submit
            </button>
        </form>
    );
}

export default FormComponents;
