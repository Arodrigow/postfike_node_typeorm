import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repositories/implementations/UserRepository";

interface IRequest {
    name?: string;
    password?: string;
    email?: string;
    phone?: string;
}
@injectable()
class UpdateUserUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async execute(user_id: string, { name, password, email, phone }: IRequest): Promise<User> {

        const userToBeUpdated = await this.userRepository.findByUserId(user_id);

        const user = this.userRepository.updateUser(userToBeUpdated, { name: name, password: password, email: email, phone: phone });

        return user;
    }
}

export { UpdateUserUseCase }