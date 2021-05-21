import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository";

@injectable()
class FindPostUseCase {
    constructor(@inject("PostRepository") private postRepository: PostRepository) { }

    async execute(post_id: string): Promise<Post> {

        const post = await this.postRepository.findPost(post_id);

        if (!post) {
            throw new Error("Can not find specified post");
        }

        return post;
    }
}

export { FindPostUseCase }