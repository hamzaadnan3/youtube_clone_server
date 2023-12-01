import express from "express";
import {Signin, Signup} from "../controllers/auth.js"

const router = express.Router();

//signup
router.post("/signup",Signup)

//signin
router.post("/signin",Signin)


//google signin



export default router;
