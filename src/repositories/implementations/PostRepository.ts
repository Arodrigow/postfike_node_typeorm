import { EntityRepository, getRepository, Repository } from "typeorm";
import { Post } from "../../entities/post";
import { IPostRepository, IRequestDTO } from "../IPostRepository";



@EntityRepository(Post)
class PostRepository implements IPostRepository {
    private postRepository: Repository<Post>;

    constructor() {
        this.postRepository = getRepository(Post);
    }

    async createPost({ title, category, description, validUntil, details, photos }: IRequestDTO): Promise<Post> {
        const post = this.postRepository.create({ title, category, description, validUntil, details, photos });

        return await this.save(post);
    }

    async listAllPosts(): Promise<Post[]> {
        return await this.postRepository.find({ relations: ["user"] });
    }

    async findPost(post_id: string): Promise<Post | undefined> {
        return this.postRepository.findOne(post_id, { relations: ["user"] })
    }

    async updatePost(post: Post, { title, category, description, validUntil, details, photos }: IRequestDTO): Promise<Post> {
        const postUpdated = this.postRepository.merge(post, { title, category, description, validUntil, details, photos });
        return await this.postRepository.save(postUpdated);

    }

    async delete(post_id: string): Promise<void> {
        await this.postRepository.delete(post_id);
    }

    async save(post: Post): Promise<Post> {
        return await this.postRepository.save(post);
    }


}

export { PostRepository }