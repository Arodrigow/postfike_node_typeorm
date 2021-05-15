import { FindPostController } from "./FindPostController";
import { FindPostUseCase } from "./FindPostUseCase";

const findPostUseCase = new FindPostUseCase();
const findPostController = new FindPostController(findPostUseCase);

export { findPostController }