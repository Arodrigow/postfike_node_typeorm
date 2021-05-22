import { Router } from "express";
import { AuthUserController } from "../useCases/user/authUser/AuthUserController";

const authRoutes = Router();

const authUserController = new AuthUserController();

authRoutes.post("/session", authUserController.handle);

export { authRoutes }