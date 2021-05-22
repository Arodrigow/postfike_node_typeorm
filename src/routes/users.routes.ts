import { Router } from "express";

import { CreateUserController } from "../useCases/user/createUser/CreateUserController";
import { DeleteUserController } from "../useCases/user/deleteUser/DeleteUserController";
import { ListAllUsersController } from "../useCases/user/listAllUsers/ListAllUsersController";
import { FindByNameController } from "../useCases/user/findByName/FindByNameController";
import { UpdateUserController } from "../useCases/user/updateUser/UpdateUserController";
import { ensureAuth } from "../middlewares/ensureAuth";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const findByNameController = new FindByNameController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listAllUsersController.handle);

usersRoutes.patch("/:user_id", ensureAuth, updateUserController.handle);

usersRoutes.delete("/:user_id", ensureAuth, deleteUserController.handle);

usersRoutes.get("/find", findByNameController.handle)
export { usersRoutes };