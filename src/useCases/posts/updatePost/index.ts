import { UpdatePostController } from "./UpdatePostController";
import { UpdatePostUseCase } from "./UpdatePostUseCase";


const updatePostUseCase = new UpdatePostUseCase();
const updatePostController = new UpdatePostController(updatePostUseCase);

export { updatePostController }