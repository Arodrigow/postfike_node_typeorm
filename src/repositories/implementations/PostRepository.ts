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

    listAllPosts(): Promise<Post[]> {
        return this.postRepository.find({ relations: ["user"] });
    }

    async save(post: Post): Promise<Post> {
        return await this.postRepository.save(post);
    }


}

export { PostRepository }