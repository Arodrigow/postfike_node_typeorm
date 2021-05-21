import { getCustomRepository } from "typeorm";
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository";


class FindPostUseCase {
    async execute(post_id: string): Promise<Post> {
        const postRepository = getCustomRepository(PostRepository);
        const post = await postRepository.findOne(post_id, { relations: ["user"] });

        if (!post) {
            throw new Error("Can not find specified post");
        }

        return post;
    }
}

export { FindPostUseCase }