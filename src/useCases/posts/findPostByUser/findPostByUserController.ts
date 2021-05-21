import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindPostByUserUseCase } from "./findPostByUserUseCase";


class FindPostByUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const findPostByUserUseCase = container.resolve(FindPostByUserUseCase);
        const posts = await findPostByUserUseCase.execute(user_id);

        return response.status(200).json(posts);
    }
}

export { FindPostByUserController }