import { createVideo, getVideo, getVideoById, updateVideo, deleteVideoById } from "../services/videoService.js";

export const createVideoController = async (req, res) => {
  const videoData = req.body;
  try {
    const video = await createVideo(videoData);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controller function for getVideo
export const getVideoController = async (req, res) => {
  try {
    const videos = await getVideo();
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controller function for getVideoById
export const getVideoByIdController = async (req, res) => {
  try {
    const video = await getVideoById(req.params.videoID);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controller function for updateVideo
export const updateVideoController = async (req, res) => {
  const videoData = req.body;
  try {
    const video = await updateVideo(req.params.videoID, videoData);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controller function for deleteVideoById
export const deleteVideoByIdController = async (req, res) => {
  try {
    const video = await deleteVideoById(req.params.videoID);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
