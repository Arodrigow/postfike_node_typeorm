import { inject, injectable } from "tsyringe";
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository";

@injectable()
class ListAllPostsUseCase {
    constructor(
        @inject("PostRepository")
        private postRepository: PostRepository
    ) { }
    async execute(): Promise<Post[]> {
        const allPosts = await this.postRepository.listAllPosts();

        return allPosts;
    }
}

export { ListAllPostsUseCase }