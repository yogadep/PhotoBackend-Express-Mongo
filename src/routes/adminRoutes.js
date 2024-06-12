import { Router } from "express";
import { 
     createAdminValidation,
     updateAdminValidation,
     result 
    } from "../middleeware/userValidation.js";
import { 
     createAdmin,
     deleteAdmin,
     getAdmin,
     getAdmins,
     updateAdmin 
    } from "../controller/adminController.js";

const adminRouter = Router();

adminRouter.get('/', getAdmins)
    .post('/', createAdminValidation, result, createAdmin)
adminRouter.get('/:id', getAdmin)
    .put('/:id', updateAdminValidation, result, updateAdmin)
    .delete('/:id', deleteAdmin)

export default adminRouter;
