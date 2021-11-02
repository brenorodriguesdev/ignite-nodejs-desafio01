import { TodoModel } from "../../domain/models/todo";
import { CreateUserTodoUseCase } from "../../domain/useCases/createUserTodo";
import { TodoRepository } from "../contracts/repositories/todoRepository";
import { UserRepository } from "../contracts/repositories/userRepository";
import { v4 as uuidv4 } from 'uuid';

export class CreateUserTodoService implements CreateUserTodoUseCase {
    constructor (private readonly userRepository: UserRepository, private readonly todoRepository: TodoRepository) {}
    async create(username: string, todo: TodoModel): Promise<TodoModel> {
        const user = await this.userRepository.getByUsername(username)
        const id = uuidv4()
        const created_at = new Date()
        await this.todoRepository.create({
            id,
            user,
            title: todo.title,
            deadline: todo.deadline,
            done: false,
            created_at
        })

        return {
            id,
            title: todo.title,
            deadline: todo.deadline,
            done: false,
            created_at
        }
    }
}