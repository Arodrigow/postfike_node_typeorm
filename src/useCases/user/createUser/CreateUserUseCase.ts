import { inject, injectable } from "tsyringe";
import { Post } from "../../../entities/post";
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repositories/implementations/UserRepository";

interface IRequest {
    name: string;
    password: string;
    email: string;
    phone: string;
    posts: Post[];
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository) { }

    async execute({ name, password, email, phone, posts }: IRequest): Promise<User> {
        const user = this.userRepository.createUser({ name, password, email, phone, posts });

        return user;
    }
}

export { CreateUserUseCase }