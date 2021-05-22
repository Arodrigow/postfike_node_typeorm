import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppErrors";
import { UserRepository } from "../repositories/implementations/UserRepository";

interface IPayLoad {
    sub: string;
}

export async function ensureAuth(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "52f647ce505ad6fdcdb1e604070550c3") as IPayLoad;
        const userRepository = new UserRepository();
        const user = userRepository.findByUserId(user_id);

        if (!user) {
            throw new AppError("User does not exist", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
}