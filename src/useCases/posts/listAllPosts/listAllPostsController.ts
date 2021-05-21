import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllPostsUseCase } from "./listAllPostsUseCase";


class ListAllPostsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllPostsUseCase = container.resolve(ListAllPostsUseCase)
        const allPosts = await listAllPostsUseCase.execute();

        return response.status(200).json(allPosts)
    }
}

export { ListAllPostsController }