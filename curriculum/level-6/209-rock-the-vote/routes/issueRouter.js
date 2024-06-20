const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue");

// Get issue request
issueRouter.get("/", async (req, res, next) => {
  try {
    const allIssues = await Issue.find();
    return res.status(200).send(allIssues);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Get issues by user id
issueRouter.get("/user", async (req, res, next) => {
  try {
    const issues = await Issue.find({ user: req.auth._id });
    return res.status(200).send(issues);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Post issue request
issueRouter.post("/", async (req, res, next) => {
  req.body.user = req.auth._id;
  try {
    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save();
    return res.status(201).send(savedIssue);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Delete Issue
issueRouter.delete("/:issueId", async (req, res, next) => {
  try {
    const deletedIssue = await Issue.findByIdAndDelete(req.params.issueId);
    return res
      .status(200)
      .send(`Successfully delete issue: ${deletedIssue.title}`);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Update Issue
issueRouter.put("/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(
      req.params.issueId,
      req.body,
      { new: true }
    );
    return res.status(200).send(updatedIssue);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});
module.exports = issueRouter;
