import { Router } from "express";
import { 
     deleteAdmin,
     getAdmin, getAdmins,
     postAdmin,
     updateAdmin 
    } from "../controller/adminController.js";


const adminRouter = Router();

adminRouter.get('/', getAdmins)
    .post('/', postAdmin)
adminRouter.get('/:id', getAdmin)
    .put('/:id', updateAdmin)
    .delete('/:id', deleteAdmin)

export default adminRouter;
