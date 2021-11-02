import { UserModel } from '../../domain/models/user';
import { CreateUserUseCase } from '../../domain/useCases/createUser';
import { UserRepository } from '../contracts/repositories/userRepository';
import { v4 as uuidv4 } from 'uuid';

export class CreateUserService implements CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }
    async create(user: UserModel): Promise<UserModel | Error> {
        const alreadyExist = this.userRepository.getByUsername(user.username)
        if (alreadyExist) {
            return new Error('Esse usuário já existe!')
        }
        
        const id = uuidv4();

        await this.userRepository.create({
            id,
            name: user.name,
            username: user.username,
            todos: []
        })

        return {
            id,
            name: user.name,
            username: user.username,
            todos: []
        }

    }
}