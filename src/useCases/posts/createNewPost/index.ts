import { CreateNewPostController } from "./createNewPostController";
import { CreateNewPostUseCase } from "./createNewPostUseCase";


const createNewPostUseCase = new CreateNewPostUseCase();
const createNewPostController = new CreateNewPostController(createNewPostUseCase);

export { createNewPostController };