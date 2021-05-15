import { getCustomRepository } from "typeorm";
import { Post } from "../../../entities/post";
import { UserRepository } from "../../../repositories/UserRepository";


class FindPostByUserUseCase {
    async execute(user_id: string): Promise<Post[]> {
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findOne(user_id, { relations: ["posts"] });

        if (!user) {
            throw new Error("Can not find user");
        }

        return user.posts;
    }
}

export { FindPostByUserUseCase }