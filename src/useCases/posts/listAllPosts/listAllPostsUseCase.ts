import { getCustomRepository } from "typeorm"
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/PostRepository";


class ListAllPostsUseCase {
    async execute(): Promise<Post[]> {
        const postRepository = getCustomRepository(PostRepository);
        const allPosts = await postRepository.find();

        return allPosts;
    }
}

export { ListAllPostsUseCase }