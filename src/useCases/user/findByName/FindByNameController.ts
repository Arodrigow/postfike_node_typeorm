import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByNameUseCase } from "./FindByNameUseCase";


class FindByNameController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_name } = request.query;
        const findByNameUseCase = container.resolve(FindByNameUseCase);

        if (!user_name) {
            const userFound = await findByNameUseCase.execute("");
            return response.status(200).json(userFound);
        }

        const userFound = await findByNameUseCase.execute(user_name.toString());
        return response.status(200).json(userFound);
    }
}

export { FindByNameController }