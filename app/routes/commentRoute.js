import express from "express";
const router = express.Router();

import { createCommentController, getCommentByVideoIDController, deleteCommentController } from "../controllers/commentController.js";

router.post("/comments", createCommentController);
router.get("/comments/:videoID", getCommentByVideoIDController);
router.delete("/comments/:commentID", deleteCommentController);

export default router;
