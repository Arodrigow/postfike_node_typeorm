import { Request, Response } from "express";
import { FindPostByUserUseCase } from "./findPostByUserUseCase";


class FindPostByUserController {
    constructor(private findPostByUserUseCase: FindPostByUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const posts = await this.findPostByUserUseCase.execute(user_id);

        return response.status(200).json(posts);
    }
}

export { FindPostByUserController }