import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  type: {
    type: String,
  },
  question: {
    type: String,
  },
  choices: {
    type: String,
  },
  correct_answers: {
    type: String,
  },
  score: {
    type: Number,
  },
});

export default mongoose.model("Question", questionSchema);
