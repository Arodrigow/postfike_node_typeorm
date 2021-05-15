import { FindPostByUserController } from "./findPostByUserController";
import { FindPostByUserUseCase } from "./findPostByUserUseCase";


const findPostByUserUseCase = new FindPostByUserUseCase();
const findPostByUserController = new FindPostByUserController(findPostByUserUseCase);

export { findPostByUserController }