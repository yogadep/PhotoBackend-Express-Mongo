import { Router } from "express";
import { createUser, getUser, getUsers, updateUser } from "../controller/userController.js";

const userRouter = Router()

userRouter.get('/', getUsers)
          .post('/', createUser)
userRouter.get('/:id', getUser)
          .put('/:id', updateUser)

export default userRouter;