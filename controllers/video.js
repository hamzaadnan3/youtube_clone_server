import Video from "../models/Video.js";
import { createError } from "../error.js";

//add new video
export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

//update video
export const updateVideo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
