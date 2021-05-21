import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";



class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params

        const deleteUserUseCase = container.resolve(DeleteUserUseCase)
        deleteUserUseCase.execute(user_id)

        return response.status(200).send();
    }
}

export { DeleteUserController }