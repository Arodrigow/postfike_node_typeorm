import { DeletePostController } from "./deletePostController";
import { DeletePostUseCase } from "./DeletePostUseCase";


const deletePostUseCase = new DeletePostUseCase();
const deletePostController = new DeletePostController(deletePostUseCase);

export { deletePostController }