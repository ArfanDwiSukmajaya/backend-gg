import Video from "../models/video.js";
import { v4 as uuid } from "uuid";

// creataVideo function
export const createVideo = async (videoData) => {
  const video = new Video({
    // videoID: uuid(),
    videoID: videoData.videoID,
    title: videoData.title,
    thumbnail: videoData.thumbnail,
  });

  const cekVideo = await Video.findOne({ title: videoData.title });
  if (cekVideo) {
    return { status: 400, message: "Video already exist" };
  }
  try {
    const savedVideo = await video.save();
    return savedVideo;
  } catch (err) {
    throw new Error(err);
  }
};

// getVideo function
export const getVideo = async () => {
  try {
    const videos = await Video.find();
    return videos;
  } catch (err) {
    throw new Error(err);
  }
};

// updateVideo function
export const updateVideo = async (videoID, videoData) => {
  try {
    const video = await Video.findOneAndUpdate(
      { videoID: videoID },
      {
        $set: {
          title: videoData.title,
          thumbnail: videoData.thumbnail,
        },
      },
      { new: true }
    );
    return video;
  } catch (err) {
    throw new Error(err);
  }
};

// getVideoById function
export const getVideoById = async (videoID) => {
  try {
    const video = await Video.findOne({ videoID: videoID });
    return video;
  } catch (err) {
    throw new Error(err);
  }
};

// deleteVideoById function
export const deleteVideoById = async (videoID) => {
  try {
    const video = await Video.findOneAndDelete({ videoID: videoID });
    return video;
  } catch (err) {
    throw new Error(err);
  }
};
