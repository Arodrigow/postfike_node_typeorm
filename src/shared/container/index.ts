import { container } from "tsyringe";
import { PostRepository } from "../../repositories/implementations/PostRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<PostRepository>(
    "PostRepository",
    PostRepository
)