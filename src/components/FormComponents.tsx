"use client";

import { useState } from "react";

function FormComponents() {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponents;
