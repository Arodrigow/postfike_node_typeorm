import { Router } from "express";

import { createUserController } from "../useCases/user/createUser";
import { listAllUsersController } from "../useCases/user/listAllUsers";
import { updateUserController } from "../useCases/user/updateUser"

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
    listAllUsersController.handle(request, response);
});

usersRoutes.patch("/:user_id", (request, response) => {
    updateUserController.handle(request, response);
});

usersRoutes.delete("/:user_id", (request, response) => {
    //TODO: Deletes a user
});

usersRoutes.get("/find", (request, response) => {
    //TODO: Finda user by name
})
export { usersRoutes };