import express from "express";
import SettingsController from "../controllers/settingsController";

const router = express.Router();
router.post("/changeEmail", SettingsController.ChangeEmail);
router.post("/changeUserName", SettingsController.ChangeUserName);
router.post("/DeletedAcc", SettingsController.DeletedAcc);
router.post("/ChangeUserPassword", SettingsController.ChangeUserPassword);
export { router };
