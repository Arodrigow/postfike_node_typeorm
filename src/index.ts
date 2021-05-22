import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";
import "./shared/container";

import { postsRoutes } from "./routes/posts.routes";
import { usersRoutes } from "./routes/users.routes";
import { authRoutes } from "./routes/auth.routes";
import { AppError } from "./errors/AppErrors";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes)
app.use("/posts", postsRoutes)
app.use(authRoutes)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal sever error - ${err.message}`
    })
});

export { app };