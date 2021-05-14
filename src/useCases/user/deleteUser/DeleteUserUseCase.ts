import { DeleteResult, getCustomRepository } from "typeorm"
import { UserRepository } from "../../../repositories/UserRepository"


class DeleteUserUseCase {
    async execute(user_id: string): Promise<DeleteResult> {
        const userRespository = getCustomRepository(UserRepository);
        const userDeleted = await userRespository.delete(user_id);
        return userDeleted;
    }
}

export { DeleteUserUseCase }