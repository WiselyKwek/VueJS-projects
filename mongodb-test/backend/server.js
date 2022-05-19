const express = require('express')
const dotenv = require('dotenv').config()
const port = 5000 || process.env.PORT
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// purpose of routes:
// routes help to forward the supported requests to the appropriate controller functions

// link to goals endpoints under routes/goalRoutes
app.use('/api/goals', require('./routes/goalRoutes'))

// overwrite the default express error handler
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})