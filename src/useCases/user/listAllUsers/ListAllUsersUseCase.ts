import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { User } from "../../../entities/user"

class ListAllUsersUseCase {

    async execute(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);
        const users = await userRepository.find();

        return users;
    }
}

export { ListAllUsersUseCase }