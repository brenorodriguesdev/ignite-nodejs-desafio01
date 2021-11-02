import { TodoModel } from "../models/todo";

export interface CreateUserTodoUseCase {
    create: (username: string, todo: TodoModel) => Promise<TodoModel>
}