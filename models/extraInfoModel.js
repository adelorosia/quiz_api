import mongoose from "mongoose";

const extraInfoSchema = mongoose.Schema({
  time: {
    type: Number,
    default:5
  },
  totalQuestion: {
    type: Number,
    default:20
  },
});

export default mongoose.model("extraInfo", extraInfoSchema);
