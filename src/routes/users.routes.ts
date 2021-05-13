import { Router } from "express";

import { createUserController } from "../useCases/user/createUser";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
    //TODO: list all users
});

usersRoutes.patch("/:user_id", (request, response) => {
    //TODO: Updates a user
});

usersRoutes.delete("/:user_id", (request, response) => {
    //TODO: Deletes a user
});

usersRoutes.get("/find", (request, response) => {
    //TODO: Finda user by name
})
export { usersRoutes };