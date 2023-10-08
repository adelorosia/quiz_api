import extraInfoModel from "../models/extraInfoModel.js";

export const getAllInfo = async (req, res) => {
  try {
    const info = await extraInfoModel.find();
    res.json(info);
  } catch (error) {
    res.json(error.message);
  }
};

export const createInfo = async (req, res) => {
    try {
       await extraInfoModel.create({
        time:req?.body?.time,
        totalQuestion:req?.body?.totalQuestion,
       });
      res.json("successfully created");
    } catch (error) {
      res.json(error.message);
    }
  };
