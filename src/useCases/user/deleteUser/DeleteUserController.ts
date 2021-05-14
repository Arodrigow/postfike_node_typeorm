import { Request, Response } from "express"
import { DeleteUserUseCase } from "./DeleteUserUseCase";



class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params
        const userDeleted = await this.deleteUserUseCase.execute(user_id)

        return response.status(200).json(userDeleted);
    }
}

export { DeleteUserController }