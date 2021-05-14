import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase"


class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;
        const { name, password, email, phone } = request.body;
        const userUpdated = await this.updateUserUseCase.execute(user_id, { name, password, email, phone });

        return response.status(200).json(userUpdated);
    }
}

export { UpdateUserController }