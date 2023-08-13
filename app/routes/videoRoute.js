import express from "express";
const router = express.Router();

// Import the correct controller function
import { createVideoController, getVideoController, getVideoByIdController, deleteVideoByIdController, updateVideoController } from "../controllers/videoController.js";

// Create the routes
router.post("/videos", createVideoController);
router.get("/videos", getVideoController);
router.patch("/videos/:videoID", updateVideoController);
router.get("/videos/:videoID", getVideoByIdController);
router.delete("/videos/:videoID", deleteVideoByIdController);

export default router;
