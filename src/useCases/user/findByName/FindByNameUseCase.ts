import { getCustomRepository } from "typeorm"
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repositories/UserRepository"


class FindByNameUseCase {
    async execute(user_name: string): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);
        const userFound = await userRepository.find({ name: user_name });

        return userFound;
    }
}

export { FindByNameUseCase }