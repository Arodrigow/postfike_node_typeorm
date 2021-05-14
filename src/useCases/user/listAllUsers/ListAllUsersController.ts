import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const users = await this.listAllUsersUseCase.execute();
        return response.status(200).json(users);
    }
}

export { ListAllUsersController }