import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { User } from "../../../entities/user"
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllUsersUseCase {

    constructor(@inject("UserRepository")
    private userRepository: UserRepository
    ) { }

    async execute(): Promise<User[]> {
        const users = await this.userRepository.listAll();

        return users;
    }
}

export { ListAllUsersUseCase }