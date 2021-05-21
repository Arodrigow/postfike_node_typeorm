import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindPostUseCase } from "./FindPostUseCase";


class FindPostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { post_id } = request.params;

        const findPostUseCase = container.resolve(FindPostUseCase)
        const post = await findPostUseCase.execute(post_id);

        return response.status(200).json(post);
    }
}

export { FindPostController }