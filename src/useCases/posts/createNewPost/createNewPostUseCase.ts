import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm"
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository"
import { UserRepository } from "../../../repositories/implementations/UserRepository"
import { IRequestDTO } from "../../../repositories/IPostRepository";

@injectable()
class CreateNewPostUseCase {
    constructor(
        @inject("PostRepository") private postRepository: PostRepository,

        @inject("UserRepository") private userRepository: UserRepository
    ) { }

    async execute(user_id: string, {
        title, category, description, validUntil, details, photos }: IRequestDTO): Promise<Post> {

        const user = await this.userRepository.findByUserId(user_id);

        const post = await this.postRepository.createPost({
            title, category, description, validUntil, details, photos
        });

        user.posts.push(post);
        await this.userRepository.saveUser(user);

        return post;
    }
}

export { CreateNewPostUseCase }