import { getCustomRepository } from "typeorm"
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository"
import { UserRepository } from "../../../repositories/implementations/UserRepository"

interface IRequest {
    title: string,
    category: string,
    description: string,
    validUntil?: Date,
    details?: string,
    photos?: string,
}
class CreateNewPostUseCase {

    async execute(user_id: string, {
        title, category, description, validUntil, details, photos }: IRequest): Promise<Post> {

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findByUserId(user_id);


        const postRepository = getCustomRepository(PostRepository)
        const post = postRepository.create({
            title, category, description, validUntil, details, photos
        });

        await postRepository.save(post);

        user.posts.push(post);
        await userRepository.saveUser(user);

        return post;
    }
}

export { CreateNewPostUseCase }