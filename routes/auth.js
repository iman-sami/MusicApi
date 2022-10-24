import { Router } from "express";
import { AuthController } from "../controllers/auth.js";
const router = Router()

router.route("/register").post(AuthController.register)
router.route("/login").get(AuthController.login)

export default router;