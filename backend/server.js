import cors from "cors"
import 'dotenv/config.js'
import express from "express"
import { connectDB } from "./config/db.js"
import cartRouter from "./routes/cartRoute.js"
import foodRouter from "./routes/foodRoute.js"
import orderRouter from "./routes/orderRoute.js"
import userRouter from "./routes/userRoute.js"


// app config
const app = express()
const port = process.env.port || 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res)=> {
    res.send("API Working")
})

app.listen(port, ()=> {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://spendela:yA6cBhk54NnIN0UX@cluster0.gjwmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0