import questionsModel from "../models/questionsModel.js";
import userModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.json(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params._id;
    const user = await userModel.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserBySpezialId = async (req, res) => {
  try {
    const _userSpzialId = req.params._userSpzialId;
    const user = await userModel.findById(_userSpzialId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createUser = async (req, res) => {
    try {
       await userModel.create({
        fullName:req?.body?.fullName,
        email:req?.body?.email,
        _userSpzialId:req?.body?._userSpzialId,
        correctAnswers:req?.body?.correctAnswers,
        IncorrectAnswers:req?.body?.IncorrectAnswers,
        totalScore:req?.body?.totalScore,
       });
      res.json("successfully created");
    } catch (error) {
      res.json(error.message);
    }
  };
