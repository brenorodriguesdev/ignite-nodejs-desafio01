import { UserRepository } from '../contracts/repositories/userRepository';
import { GetUserTodosUseCase } from '../../domain/useCases/getUserTodos';
import { TodoModel } from '../../domain/models/todo';

export class GetUserTodosService implements GetUserTodosUseCase {
    constructor(private readonly userRepository: UserRepository) { }
    async get(username: string): Promise<TodoModel[]> {
        const user = await this.userRepository.getByUsername(username)
        return user.todos
    }
}