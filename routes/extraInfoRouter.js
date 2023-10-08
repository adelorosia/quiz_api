import express from "express"
import { createInfo, getAllInfo } from "../controller/extraInfoController.js"

const router=express.Router()

router.get("/api/info/display",getAllInfo)
router.post("/api/info/create",createInfo)

export default router