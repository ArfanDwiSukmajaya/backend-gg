import { createComment, getCommentByVideoID, deleteComment } from "../services/commentService.js";

// create comment controller
export const createCommentController = async (req, res) => {
  const commentData = req.body;
  try {
    const comment = await createComment(commentData);
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(500).json({ message: "Fail" });
  }
};

// get comment by videoID controller
export const getCommentByVideoIDController = async (req, res) => {
  try {
    const comments = await getCommentByVideoID(req.params.videoID);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete comment by commentID controller
export const deleteCommentController = async (req, res) => {
  try {
    const comment = await deleteComment(req.params.commentID);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
