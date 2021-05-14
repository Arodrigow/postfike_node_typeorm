import { getCustomRepository } from "typeorm";
import { Post } from "../../../entities/post";
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repositories/UserRepository";

interface IRequest {
    name: string;
    password: string;
    email: string;
    phone: string;
    posts: Post[];
}

class CreateUserUseCase {
    async execute({ name, password, email, phone, posts }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = userRepository.create({ name, password, email, phone, posts });
        await userRepository.save(user);

        return user;
    }
}

export { CreateUserUseCase }