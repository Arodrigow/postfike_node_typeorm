import { inject, injectable } from "tsyringe";
import { DeleteResult, getCustomRepository } from "typeorm";
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository";

@injectable()
class DeletePostUseCase {
    constructor(@inject("PostRepository") private postRepository: PostRepository) { }

    async execute(user_id: string, post_id: string): Promise<void> {

        const postToBeDeleted = await this.postRepository.findPost(post_id);

        if (!postToBeDeleted) {
            throw new Error("Can not delete post that does not exist");
        }

        if (user_id !== postToBeDeleted.user.id) {
            throw new Error("Only owner can delete a post");
        }

        await this.postRepository.delete(post_id);
    }
}

export { DeletePostUseCase }