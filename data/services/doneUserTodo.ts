import { DoneUserTodoUseCase } from "../../domain/useCases/doneUserTodo";
import { TodoRepository } from "../contracts/repositories/todoRepository";

export class DoneUserTodoService implements DoneUserTodoUseCase {
    constructor (private readonly todoRepository: TodoRepository) {}
    async done (idTodo: string): Promise<void> {
        await this.todoRepository.done(idTodo)
    }
}