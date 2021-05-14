import { Request, Response } from "express";
import { CreateNewPostUseCase } from "./createNewPostUseCase";


class CreateNewPostController {
    constructor(private createNewPostUseCase: CreateNewPostUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;
        const post = await this.createNewPostUseCase.execute(user_id, request.body);

        return response.status(201).json(post);
    }
}

export { CreateNewPostController }