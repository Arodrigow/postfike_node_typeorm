import { Request, Response } from "express";
import { ListAllPostsUseCase } from "./listAllPostsUseCase";


class ListAllPostsController {
    constructor(private listAllPostsUseCase: ListAllPostsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const allPosts = await this.listAllPostsUseCase.execute();

        return response.status(200).json(allPosts)
    }
}

export { ListAllPostsController }