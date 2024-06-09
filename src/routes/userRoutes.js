import { Router } from "express";
import { createUser, getUser, getUsers } from "../controller/userController.js";

const userRouter = Router()

userRouter.get('/', getUsers)
          .post('/', createUser)
userRouter.get('/:id', getUser)

export default userRouter;