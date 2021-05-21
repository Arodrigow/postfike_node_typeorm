import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm"
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repositories/implementations/UserRepository"

@injectable()
class FindByNameUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async execute(user_name: string): Promise<User[]> {

        const userFound = await this.userRepository.findByUserName(user_name);
        return userFound;
    }
}

export { FindByNameUseCase }