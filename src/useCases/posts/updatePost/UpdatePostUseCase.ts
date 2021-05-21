import { getCustomRepository } from "typeorm"
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository"

interface IRequest {
    title?: string,
    category?: string,
    description?: string,
    validUntil?: Date,
    details?: string,
    photos?: string,
}

class UpdatePostUseCase {
    async execute(user_id: string, post_id: string, {
        title, category, description, validUntil, details, photos
    }: IRequest): Promise<Post> {
        const postRepository = getCustomRepository(PostRepository);
        const postToBeUpdated = await postRepository.findOne(post_id, { relations: ["user"] });

        if (!postToBeUpdated) {
            throw new Error("Can not find specified post!");
        }

        if (user_id !== postToBeUpdated.user.id) {
            throw new Error("Only the owner can change a post!");
        }

        const post = postRepository.merge(postToBeUpdated, {
            title: title, category: category, description: description,
            validUntil: validUntil, details: details, photos: photos
        });

        await postRepository.save(post);
        return post;
    }
}

export { UpdatePostUseCase }