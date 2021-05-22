import { Repository, EntityRepository, getRepository } from "typeorm";
import { User } from "../../entities/user";
import { AppError } from "../../errors/AppErrors";
import { IRequestDTO, IUserRepository } from "../IUserRepository"

@EntityRepository(User)
class UserRepository implements IUserRepository {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getRepository(User);
    }

    async createUser({ name, password, email, phone, posts }: IRequestDTO): Promise<User> {
        const user = this.userRepository.create({ name, password, email, phone, posts });
        return await this.saveUser(user);
    }

    async findByUserId(user_id: string): Promise<User> {
        const user = await this.userRepository.findOne(user_id, { relations: ["posts"] });

        if (!user) {
            throw new AppError("Can not finde user ID");
        }

        return user;
    }

    async findByUserName(param: string): Promise<User[]> {
        const userFound = await this.userRepository.query(
            'SELECT * FROM users WHERE name LIKE "%' + param + '%"'
        );
        return userFound;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ email });
    }

    async listAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ["posts"] });
    }

    async updateUser(user: User, { name, password, email, phone }: IRequestDTO): Promise<User> {
        const userUpdated = this.userRepository.merge(user, { name: name, password: password, email: email, phone: phone });
        return this.saveUser(userUpdated);
    }

    async deleteUser(user_id: string): Promise<void> {
        await this.userRepository.delete(user_id);
    }

    async saveUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

}

export { UserRepository };