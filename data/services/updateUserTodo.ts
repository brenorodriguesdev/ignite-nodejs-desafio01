import { TodoModel } from "../../domain/models/todo";
import { TodoRepository } from "../contracts/repositories/todoRepository";
import { UserRepository } from "../contracts/repositories/userRepository";
import { UpdateUserTodoUseCase } from "../../domain/useCases/updateUserTodo";

export class UpdateUserTodoService implements UpdateUserTodoUseCase {
    constructor(private readonly userRepository: UserRepository, private readonly todoRepository: TodoRepository) { }
    async update(username: string, todo: TodoModel): Promise<TodoModel> {
        const user = await this.userRepository.getByUsername(username)

        await this.todoRepository.update({
            id: todo.id,
            user,
            title: todo.title,
            deadline: todo.deadline,
            done: todo.done,
            created_at: todo.created_at
        })

        return todo
    }
}