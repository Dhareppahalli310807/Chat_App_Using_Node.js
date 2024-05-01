import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: Date
});

const chatModel = mongoose.model("chat", chatSchema);
export default chatModel;