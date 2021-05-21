import { inject, injectable } from "tsyringe";
import { Post } from "../../../entities/post";
import { PostRepository } from "../../../repositories/implementations/PostRepository";

@injectable()
class FindPostByContentUseCase {
    constructor(@inject("PostRepository") private postRepository: PostRepository) { }

    async execute(content: string): Promise<Post[]> {
        const posts = await this.postRepository.findByContent(content);
        return posts;
    }
}

export { FindPostByContentUseCase }