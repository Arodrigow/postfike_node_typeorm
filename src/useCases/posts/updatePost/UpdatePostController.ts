import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePostUseCase } from "./UpdatePostUseCase";


class UpdatePostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, post_id } = request.params;
        const { title, category, description, validUntil, details, photos } = request.body

        const updatePostUseCase = container.resolve(UpdatePostUseCase);
        const post = await updatePostUseCase.execute(user_id, post_id, { title, category, description, validUntil, details, photos });

        return response.status(200).json(post);
    }
}

export { UpdatePostController }