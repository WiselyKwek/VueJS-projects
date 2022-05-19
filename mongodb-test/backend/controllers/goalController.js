// controllers are separate out the route request from the functions that processes the route requests 
//controller also helps render the correct views as per request

const asyncHandler = require('express-async-handler')
// async handles exceptions inside async express routes and pass them to your express error handlers

const Goal = require('../models/goalModel')

// @desc GET goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc SET goals
// @route POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc UPDATE goals
// @route PUT /api/goals
// @access private
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal does not exist")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
})

// @desc DELETE goals
// @route DELETE /api/goals
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal does not exist")
    }
    await goal.remove()
    res.status(200).json({id:req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}