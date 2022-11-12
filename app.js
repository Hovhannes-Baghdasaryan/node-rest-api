import express from "express"
import mongoose from "mongoose";
import postsRouter from "./routes/posts.js"
import bodyParser from "body-parser";
import cors from "cors";
import server from "express/lib/application.js";

(async () => {
    try {
        mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true})
        console.log("connected successfully")
    } catch (error) {
        console.log('connection failed', error)
    }
})()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/posts', postsRouter)

// ROUTES
app.get('/', (req, res) => {
    res.json("home page")
})

app.listen(process.env.PORT || 5000, () => console.log("listen"))
