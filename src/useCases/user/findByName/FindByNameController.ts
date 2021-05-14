import { Request, Response } from "express";
import { FindByNameUseCase } from "./FindByNameUseCase";


class FindByNameController {

    constructor(private findByNameUseCase: FindByNameUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_name } = request.query;

        if (!user_name) {
            const userFound = await this.findByNameUseCase.execute("");
            return response.status(200).json(userFound);
        }

        const userFound = await this.findByNameUseCase.execute(user_name.toString());
        return response.status(200).json(userFound);
    }
}

export { FindByNameController }