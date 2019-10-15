import * as mongoose from "mongoose";

const answerSchema = require("./answer").answerSchema;

// Setting BESZ Time (Default is UTC), Difference = 2 hours
let localDateTime = new Date(Date.now());
localDateTime.setHours(localDateTime.getHours() + 2);

export const CommentSchema: mongoose.Schema = new mongoose.Schema({
    author: { type: String, required: true },
    posted: { type: Date, default: localDateTime },
    ratingValue: { type: Number, required: true },
    comment: { type: String, required: true },
    answers: { type: [answerSchema], required: false }
})

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;