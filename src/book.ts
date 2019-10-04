import * as mongoose from "mongoose";

const CommentSchema = require("./comment").CommentSchema;

export const BookSchema: mongoose.Schema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    publisher: { type: String, required: true },
    pages: { type: Number, required: true },
    rating: { type: [CommentSchema], required: false }
})

const Book = mongoose.model("Book", BookSchema);
export default Book;