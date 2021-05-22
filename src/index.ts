import express from "express";
import "./database";
import "./shared/container";

import { postsRoutes } from "./routes/posts.routes";
import { usersRoutes } from "./routes/users.routes";
import { authRoutes } from "./routes/auth.routes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes)
app.use("/posts", postsRoutes)
app.use(authRoutes)

export { app };