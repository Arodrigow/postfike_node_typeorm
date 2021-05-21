import { inject, injectable } from "tsyringe";
import { Post } from "../../../entities/post";
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repositories/implementations/UserRepository";

@injectable()
class FindPostByUserUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async execute(user_id: string): Promise<Post[]> {

        const user = await this.userRepository.findByUserId(user_id);

        if (!user) {
            throw new Error("Can not find user");
        }

        return user.posts;
    }
}

export { FindPostByUserUseCase }