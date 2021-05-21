import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewPostUseCase } from "./createNewPostUseCase";


class CreateNewPostController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const createNewPostUseCase = container.resolve(CreateNewPostUseCase);
        const post = await createNewPostUseCase.execute(user_id, request.body);

        return response.status(201).json(post);
    }
}

export { CreateNewPostController }