import { Post } from "../entities/post";

interface IRequestDTO {
    title?: string,
    category?: string,
    description?: string,
    validUntil?: Date,
    details?: string,
    photos?: string,
}

interface IPostRepository {

    createPost({
        title, category, description, validUntil, details, photos
    }: IRequestDTO): Promise<Post>;
    listAllPosts(): Promise<Post[]>;
    findPost(post_id: string): Promise<Post | undefined>;
    findByContent(content: string): Promise<Post[]>;
    updatePost(post: Post, {
        title, category, description, validUntil, details, photos
    }: IRequestDTO): Promise<Post>;
    delete(post_id: string): Promise<void>;
    save(post: Post): Promise<Post>;
}

export { IPostRepository, IRequestDTO }