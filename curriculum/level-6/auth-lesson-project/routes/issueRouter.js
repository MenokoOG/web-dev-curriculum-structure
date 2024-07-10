const express = require('express');
const Issue = require('../models/issue');
const issueRouter = express.Router();

// POST: Create a new issue /api/main/issues
issueRouter.post('/', async (req, res, next) => {
    try {
        req.body.userId = req.auth._id;
        const newIssue = new Issue(req.body);
        const savedIssue = await newIssue.save();
        res.status(201).send(savedIssue);
    } catch (error) {
        res.status(500);
        next(error);
    }
});

// GET: Retrieve all issues /api/main/issues/all
issueRouter.get('/all', async (req, res, next) => {
    try {
        const allIssues = await Issue.find();
        res.status(200).send(allIssues);
    } catch (error) {
        res.status(500);
        next(error);
    }
});

// GET: Retrieve issues for the authenticated user /api/main/issues
issueRouter.get('/user', async (req, res, next) => {
    try {
        const foundIssues = await Issue.find({ userId: req.auth._id });
        res.status(200).send(foundIssues);
    } catch (error) {
        res.status(500);
        next(error);
    }
});

// PUT: Edit an existing issue /api/main/issues/:issueId
issueRouter.put('/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findOneAndUpdate(
            { _id: req.params.issueId, userId: req.auth._id },
            req.body,
            { new: true }
        );
        if (!updatedIssue) {
            res.status(404);
            return next(new Error('Issue not found'));
        }
        res.status(200).send(updatedIssue);
    } catch (error) {
        res.status(500);
        next(error);
    }
});

// DELETE: Delete an existing issue /api/main/issues/:issueId
issueRouter.delete('/:issueId', async (req, res, next) => {
    try {
        const deletedIssue = await Issue.findOneAndDelete({
            _id: req.params.issueId,
            userId: req.auth._id
        });
        if (!deletedIssue) {
            res.status(404);
            return next(new Error('Issue not found'));
        }
        res.status(200).send(`Successfully deleted issue with ID: ${req.params.issueId}`);
    } catch (error) {
        res.status(500);
        next(error);
    }
});

module.exports = issueRouter;
