import mongoose from "mongoose";
import DB_NAME from "../constants.js";
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URL}/${DB_NAME}`,
        );
        console.log(`${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("DB connection error", error);
        process.exit(1);
    }
};
export default connectDB;
