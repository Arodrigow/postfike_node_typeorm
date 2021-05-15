import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";


class DeletePostController {
    constructor(private deletePostUseCase: DeletePostUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, post_id } = request.params;
        const postDeleted = await this.deletePostUseCase.execute(user_id, post_id);

        return response.status(200).json(postDeleted);
    };
}

export { DeletePostController }