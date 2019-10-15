import * as mongoose from "mongoose";

// Setting BESZ Time (Default is UTC), Difference = 2 hours
let localDateTime = new Date(Date.now());
localDateTime.setHours(localDateTime.getHours() + 2);

export const answerSchema: mongoose.Schema = new mongoose.Schema({
    "author": { type: String, required: true },
    "posted": { type: Date, default: localDateTime },
    "content": { type: String, required: true }
})

const Answer = mongoose.model("Answer", answerSchema);
export default Answer;