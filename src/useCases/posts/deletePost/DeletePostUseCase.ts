import { DeleteResult, getCustomRepository } from "typeorm";
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/PostRepository";


class DeletePostUseCase {

    async execute(user_id: string, post_id: string): Promise<DeleteResult> {
        const postRepository = getCustomRepository(PostRepository);
        const postToBeDeleted = await postRepository.findOne(post_id, { relations: ["user"] });

        if (!postToBeDeleted) {
            throw new Error("Can not delete post that does not exist");
        }

        if (user_id !== postToBeDeleted.user.id) {
            throw new Error("Only owner can delete a post");
        }

        const postDeleted = await postRepository.delete(post_id);

        return postDeleted;
    }
}

export { DeletePostUseCase }