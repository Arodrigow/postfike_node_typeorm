import { inject, injectable } from "tsyringe";
import { DeleteResult, getCustomRepository } from "typeorm"
import { UserRepository } from "../../../repositories/implementations/UserRepository"

@injectable()
class DeleteUserUseCase {
    constructor(@inject("UserRepository") private userRespository: UserRepository) { }
    async execute(user_id: string): Promise<void> {
        await this.userRespository.deleteUser(user_id);

    }
}

export { DeleteUserUseCase }