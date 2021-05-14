import { ListAllUsersController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";


const listAllUsersUseCase = new ListAllUsersUseCase();
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };