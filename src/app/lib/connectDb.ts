import mongoose, { Document, Schema } from "mongoose";

type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};

async function connectDb(): Promise<void> {
    if (connection.isConnected) {
        console.log(" data base is already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URL || "");

        connection.isConnected = db.connections[0].readyState;

        console.log("Data base is conected");
    } catch (error) {
        console.error("Error in data base");
        process.exit(1);
    }
}

export default connectDb;
