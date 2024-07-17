const express = require('express')
const goalRouter = express.Router()
const Goal = require('../models/goal')

goalRouter.post('/', async (req, res, next) => {
    try {
        const newGoal = new Goal(req.body)
        const savedGoal = await newGoal.save()
        return res.status(201).send(savedGoal)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

goalRouter.get('/', async(req, res, next) => {
    try {
        const allGoals = await Goal.find()
        return res.status(200).send(allGoals)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = goalRouter
