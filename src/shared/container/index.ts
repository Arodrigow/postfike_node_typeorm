import { container } from "tsyringe";
import { PostRepository } from "../../repositories/implementations/PostRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { IPostRepository } from "../../repositories/IPostRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<IPostRepository>(
    "PostRepository",
    PostRepository
)