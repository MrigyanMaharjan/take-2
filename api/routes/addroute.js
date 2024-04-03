import  express  from "express";
import addpeople from "../controllers/postcontroller.js";

const router=express.Router()

router.post('/add',addpeople)

export default router