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
    res.status(200).json(
        {
            message: "set goals"
        }
    )
})

// @desc UPDATE goals
// @route PUT /api/goals
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json(
        {
            message: `update goal ${req.params.id}`

        }
    )
})

// @desc DELETE goals
// @route DELETE /api/goals
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json(
        {
            message: `delete goal ${req.params.id}`
        }
    )
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}