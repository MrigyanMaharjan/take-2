import  express  from "express";
import signup, { signin }  from "../controllers/authcontrollers.js";

const router=express.Router()

router.post("/autho",signup)
router.post("/signin",signin)
export default router