import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
    longURL: {
        type: String,
        required: true,
    },

    shortURL: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.models.Link || mongoose.model("Link", LinkSchema);