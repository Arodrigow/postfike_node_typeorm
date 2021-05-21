import { Post } from "../entities/post";

interface IRequestDTO {
    title: string,
    category: string,
    description: string,
    validUntil?: Date,
    details?: string,
    photos?: string,
}

interface IPostRepository {

    createPost({
        title, category, description, validUntil, details, photos
    }: IRequestDTO): Promise<Post>;
    listAllPosts(): Promise<Post[]>;
    save(post: Post): Promise<Post>;
}

export { IPostRepository, IRequestDTO }