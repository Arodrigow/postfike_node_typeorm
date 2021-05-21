import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindPostByContentUseCase } from "./FindPostByContentUseCase";


class FindPostByContentController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { content } = request.query;
        const findPostByContentUseCase = container.resolve(FindPostByContentUseCase);

        if (!content) {
            const posts = await findPostByContentUseCase.execute("");
            return response.status(200).json(posts);
        }

        const posts = await findPostByContentUseCase.execute(content.toString());
        return response.status(200).json(posts);
    }
}

export { FindPostByContentController }