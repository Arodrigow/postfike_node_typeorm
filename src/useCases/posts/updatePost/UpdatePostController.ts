import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";


class UpdatePostController {
    constructor(private updatePostUseCase: UpdatePostUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, post_id } = request.params;
        const { title, category, description, validUntil, details, photos } = request.body

        const post = await this.updatePostUseCase.execute(user_id, post_id, { title, category, description, validUntil, details, photos });

        return response.status(200).json(post);
    }
}

export { UpdatePostController }