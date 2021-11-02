import { DeleteUserTodoUseCase } from "../../domain/useCases/deleteUserTodo";
import { TodoRepository } from "../contracts/repositories/todoRepository";

export class DeleteUserTodoService implements DeleteUserTodoUseCase {
    constructor (private readonly todoRepository: TodoRepository) {}
    async delete (idTodo: string): Promise<void> {
        await this.todoRepository.deleteById(idTodo)
    }
}