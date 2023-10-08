import express from "express"
import { createUser, getAllUsers, getUserById } from "../controller/userController.js"

const router=express.Router()

router.get("/api/users/display",getAllUsers)
router.post("/api/users/create",createUser)
router.get("/api/users/display/:_id", getUserById);
export default router