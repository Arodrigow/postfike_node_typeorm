import { FindByNameController } from "./FindByNameController";
import { FindByNameUseCase } from "./FindByNameUseCase";



const findByNameUseCase = new FindByNameUseCase();
const findByNameController = new FindByNameController(findByNameUseCase);

export { findByNameController }