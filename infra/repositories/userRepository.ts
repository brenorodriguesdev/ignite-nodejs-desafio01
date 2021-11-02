import { getRepository } from "typeorm";
import { UserRepository } from "../../data/contracts/repositories/userRepository";
import UserEntity from "../../data/entities/user";

export class UserRepositoryTypeORM implements UserRepository {
    async create(user: UserEntity): Promise<void> {
        const userRepository = getRepository(UserEntity)
        await userRepository.save(user)
    }

    async getByUsername(username: string): Promise<UserEntity> {
        const userRepository = getRepository(UserEntity)
        return await userRepository.findOne({ where: { username } })
    }
}