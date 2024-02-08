import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/:email", userController.getUser);

export const userRoutes = router;