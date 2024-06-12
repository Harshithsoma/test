import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { addMessage } from "../controller/message.controller.js";

const router = express.Router();

router.post("/:chatId", verifyToken, addMessage);

export default router;
