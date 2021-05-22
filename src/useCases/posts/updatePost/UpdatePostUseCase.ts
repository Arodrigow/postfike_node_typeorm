import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm"
import { Post } from "../../../entities/post";
import { AppError } from "../../../errors/AppErrors";
import { PostRepository } from "../../../repositories/implementations/PostRepository"

interface IRequest {
    title?: string,
    category?: string,
    description?: string,
    validUntil?: Date,
    details?: string,
    photos?: string,
}

@injectable()
class UpdatePostUseCase {
    constructor(@inject("PostRepository") private postRepository: PostRepository) { }

    async execute(user_id: string, post_id: string, {
        title, category, description, validUntil, details, photos
    }: IRequest): Promise<Post> {

        const postToBeUpdated = await this.postRepository.findPost(post_id);

        if (!postToBeUpdated) {
            throw new AppError("Can not find specified post!");
        }

        if (user_id !== postToBeUpdated.user.id) {
            throw new AppError("Only the owner can change a post!");
        }

        const post = this.postRepository.updatePost(postToBeUpdated, {
            title: title, category: category, description: description,
            validUntil: validUntil, details: details, photos: photos
        });

        return post;
    }
}

export { UpdatePostUseCase }