import { getCustomRepository } from "typeorm";
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repositories/UserRepository";

interface IRequest {
    name?: string;
    password?: string;
    email?: string;
    phone?: string;
}

class UpdateUserUseCase {

    async execute(user_id: string, { name, password, email, phone }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const userToBeUpdated = await userRepository.findOne(user_id);

        if (!userToBeUpdated) {
            throw new Error("ID not found")
        }

        console.log(userToBeUpdated);
        const user = userRepository.merge(userToBeUpdated, { name: name, password: password, email: email, phone: phone });

        await userRepository.save(user);
        return user;
    }
}

export { UpdateUserUseCase }