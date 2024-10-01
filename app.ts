import express, { Application } from "express";
import {Request ,Response} from "express"
import sequelize from "./database";
import cors from "cors"
import morgan from "morgan";
import "dotenv/config"

import { userRouter } from "./routes/user";

const app:Application = express();
const PORT:number | string | null = process.env.PORT || "your-port";

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))

app.use("/user", userRouter)

app.listen(PORT ,async() => {
    await sequelize.sync()
    console.log(`Express listening on port ${PORT}`)
})