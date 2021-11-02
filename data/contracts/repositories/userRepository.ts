import UserEntity from "../../entities/user";

export interface UserRepository {
    create: (user: UserEntity) => Promise<void>
    getByUsername: (username: string) => Promise<UserEntity>
}