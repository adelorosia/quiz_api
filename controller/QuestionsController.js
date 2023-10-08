import questionsModel from "../models/questionsModel.js";

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await questionsModel.find();
    res.json(questions);
  } catch (error) {
    res.json(error.message);
  }
};

export const createQuestions = async (req, res) => {
    try {
       await questionsModel.create({
        type:req?.body?.type,
        question:req?.body?.question,
        choices:req?.body?.choices,
        correct_answers:req?.body?.correct_answers,
        score:req?.body?.score,
       });
      res.json("successfully created");
    } catch (error) {
      res.json(error.message);
    }
  };
