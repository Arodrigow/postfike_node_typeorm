import { Request, Response } from "express"
import { CreateUserUseCase } from "./createUserUseCase"

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const user = await this.createUserUseCase.execute(request.body);

        return response.status(201).json(user);
    }
}

export { CreateUserController }