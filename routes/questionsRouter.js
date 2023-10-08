import express from "express"
import { createQuestions, getAllQuestions } from "../controller/QuestionsController.js"

const router=express.Router()

router.get("/api/questions/display",getAllQuestions)
router.post("/api/questions/create",createQuestions)

export default router