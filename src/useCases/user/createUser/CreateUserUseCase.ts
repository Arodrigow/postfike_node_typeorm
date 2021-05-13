import { getCustomRepository } from "typeorm"
import { User } from "../../../entities/user"
import { UserRepository } from "../../../repositories/UserRepository"

interface IRequest {
    name: string;
    password: string;
    email: string;
    phone: string;
}

class CreateUserUseCase {
    async execute({ name, password, email, phone }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = userRepository.create({ name, password, email, phone });
        await userRepository.save(user);

        return user;
    }
}

export { CreateUserUseCase }