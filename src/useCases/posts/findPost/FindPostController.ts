import { Request, Response } from "express";
import { Post } from "../../../entities/post";
import { FindPostUseCase } from "./FindPostUseCase";


class FindPostController {
    constructor(private findPostUseCase: FindPostUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { post_id } = request.params;
        const post = await this.findPostUseCase.execute(post_id);

        return response.status(200).json(post);
    }
}

export { FindPostController }