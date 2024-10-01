import express from "express"
import {Request ,Response} from "express"
import { User } from "../model/user.model";
import { UserID, UserModel } from "../types/model.type";
import { where } from "sequelize";

const userRouter = express.Router();

// Get All Users
userRouter.get("/", async(request: Request ,response: Response) => {
    const user = await User.findAll()
    response.json(user);
})

// Insert a new user
userRouter.post("/createUser" ,async(request: Request ,response: Response) => {
    const {
        name,
        age,
        salary,
        department,
        isMarried,
        isSeniorJob
    }:UserModel = request.body;

    const userData = {
        user_name: name,
        user_age: age,
        user_salary: salary,
        user_department: department,
        user_isMarried: isMarried,
        user_isSeniorJob: isSeniorJob
    }

    const user = await User.create(userData)

    response.send("Create user success.").sendStatus(201)
})

// Get User With User ID
userRouter.get("/:id", async(request: Request, response: Response) => {
    const userId:UserID = parseInt(request.params.id)
    const user = await User.findAll({
        where: {
            user_id: userId
        }
    })
    response.json(user).sendStatus(200)
})

// Update user with usr ID
userRouter.put("/:id",async(request: Request ,response: Response) => {
    const userId = parseInt(request.params.id)
    const {
        name,
        age,
        salary,
        department,
        isMarried,
        isSeniorJob,
    }:UserModel = request.body

    const userData = {
        user_name: name,
        user_age: age,
        user_salary: salary,
        user_department: department,
        user_isMarried: isMarried,
        user_isSeniorJob: isSeniorJob
    }

    const user = await User.update(userData,{
        where: {
            user_id: userId
        },
    })
    response.send(`Update user with user ID: ${userId} success.`).sendStatus(200)
})

// delete User with User ID
userRouter.delete("/:id", async(request: Request, response: Response) => {
    const userId:UserID = parseInt(request.params.id)
    const user = await User.destroy({
        where: {
            user_id: userId
        }
    })
    response.send(`Delete user with user ID: ${userId} success.`).sendStatus(200)
})

export {userRouter}