import express from "express";
import { verifyToken } from "../verifyToken.js";
import { deleteUser, updateUser } from "../controllers/user.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, updateUser);

//delete user
router.delete("/:id", verifyToken, deleteUser);

export default router;
