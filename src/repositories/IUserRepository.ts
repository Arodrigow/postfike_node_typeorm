import { DeleteResult } from "typeorm";
import { Post } from "../entities/post";
import { User } from "../entities/user";

interface IRequestDTO {
    name?: string;
    password?: string;
    email?: string;
    phone?: string;
    posts?: Post[];
}

interface IUserRepository {
    createUser({ name, password, email, phone, posts }: IRequestDTO): Promise<User>;
    findByUserId(user_id: string): Promise<User>;
    findByUserName(param: string): Promise<User[]>;
    findByEmail(email: string): Promise<User | undefined>;
    listAll(): Promise<User[]>;
    updateUser(user: User, { name, password, email, phone }: IRequestDTO): Promise<User>;
    deleteUser(user_id: string): Promise<void>;
    saveUser(user: User): Promise<User>;
}

export { IUserRepository, IRequestDTO }