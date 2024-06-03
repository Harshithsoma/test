import express from "express";
import {
  shouldBeLoggedIn,
  shouldBeAdmin,
} from "../controller/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/shouldBeLoggedIn", verifyToken, shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

export default router;
