import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../repositories/implementations/UserRepository";

interface IPayLoad {
    sub: string;
}

export async function ensureAuth(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "52f647ce505ad6fdcdb1e604070550c3") as IPayLoad;
        const userRepository = new UserRepository();
        const user = userRepository.findByUserId(user_id);

        if (!user) {
            throw new Error("User does not exist");
        }

        next();
    } catch {
        throw new Error("Invalid token");
    }
}