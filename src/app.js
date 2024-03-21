import { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app=Express()

// how to use cors(generally)
// app.use(cors())

// how to use cors in production level
app.use(cors({
    origin: process.env.cors_origin,
    credentials:true
}))

app.use(Express.json({limit:"18kb"}))
app.use(Express.urlencoded({extended:true,limit:"18kb"}))
app.use(Express.static("public"))
app.use(cookieParser())



export {app}