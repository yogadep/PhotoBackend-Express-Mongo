import { Router } from "express";
import { createUser,
         deleteUser,
         getUser,
         getUsers,
         updateUser }
from "../controller/userController.js";

const userRouter = Router()

userRouter.get('/', getUsers)
          .post('/', createUser)
userRouter.get('/:id', getUser)
          .put('/:id', updateUser)
          .delete('/:id', deleteUser)

export default userRouter;