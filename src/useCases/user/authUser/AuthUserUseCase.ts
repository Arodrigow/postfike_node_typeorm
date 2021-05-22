import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { UserRepository } from "../../../repositories/implementations/UserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        email: string;
        name: string;
    }

    token: string;
}

@injectable()
class AuthUserUseCase {
    constructor(@inject("UserRepository") private userRepository: UserRepository) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("Incorrect email or password");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Incorrect email or password")
        }

        const token = sign({
            email: user.email,
            name: user.name,
            phone: user.phone
        }, "52f647ce505ad6fdcdb1e604070550c3", {
            subject: user.id,
            expiresIn: "1d"
        });

        const result: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return result;
    }
}

export { AuthUserUseCase }