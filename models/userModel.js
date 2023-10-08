import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _userSpzialId: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  correctAnswers: {
    type: Number,
  },
  IncorrectAnswers: {
    type: Number,
  },
  totalScore: {
    type: Number,
  },
});

export default mongoose.model("User", userSchema);
