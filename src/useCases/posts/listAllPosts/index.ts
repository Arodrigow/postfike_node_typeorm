import { ListAllPostsController } from "./listAllPostsController";
import { ListAllPostsUseCase } from "./listAllPostsUseCase";


const listAllPostsUseCase = new ListAllPostsUseCase();
const listAllPostsController = new ListAllPostsController(listAllPostsUseCase);

export { listAllPostsController }