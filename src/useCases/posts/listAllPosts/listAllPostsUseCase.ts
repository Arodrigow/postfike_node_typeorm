import { getCustomRepository } from "typeorm"
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository";


class ListAllPostsUseCase {
    async execute(): Promise<Post[]> {
        const postRepository = getCustomRepository(PostRepository);
        const allPosts = await postRepository.find({ relations: ["user"] });

        return allPosts;
    }
}

export { ListAllPostsUseCase }