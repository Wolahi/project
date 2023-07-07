import express from "express";
import AuthController from "..//controllers/authController";

const router = express.Router();
router.post("/signUp", AuthController.registration);
router.post("/signIn", AuthController.login);
router.get("/getUser", AuthController.getUser);
export { router };
