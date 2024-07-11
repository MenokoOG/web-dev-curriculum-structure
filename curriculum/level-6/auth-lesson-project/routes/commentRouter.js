const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/comment");

// Get comment request
commentRouter.get("/", async (req, res, next) => {
  try {
    const allComments = await Comment.find();
    return res.status(200).send(allComments);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Post comment request
commentRouter.post("/:issueId", async (req, res, next) => {
  req.body.user = req.auth._id;
  req.body.issue = req.params.issueId;
  req.body.username = req.auth.username;
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    return res.status(201).send(savedComment);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

module.exports = commentRouter;
