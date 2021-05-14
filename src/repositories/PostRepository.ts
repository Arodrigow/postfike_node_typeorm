import { EntityRepository, Repository } from "typeorm";
import { Post } from "../entities/post";

@EntityRepository(Post)
class PostRepository extends Repository<Post>{

}

export { PostRepository }