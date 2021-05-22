import { inject, injectable } from "tsyringe";
import { Post } from "../../../entities/post";
import { AppError } from "../../../errors/AppErrors";
import { UserRepository } from "../../../repositories/implementations/UserRepository";

@injectable()
class FindPostByUserUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async execute(user_id: string): Promise<Post[]> {

        const user = await this.userRepository.findByUserId(user_id);

        if (!user) {
            throw new AppError("Can not find user");
        }

        return user.posts;
    }
}

export { FindPostByUserUseCase }