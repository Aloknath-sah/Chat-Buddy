import express from 'express'

const app = express()
const port = 5000

//routes
import userRoute from './routes/user.route.js'

app.use('/api/v1/user', userRoute)

app.listen(port, function() {
    console.log(`server is listening at port${port}`)
})