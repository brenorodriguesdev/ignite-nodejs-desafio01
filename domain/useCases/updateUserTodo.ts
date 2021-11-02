import { TodoModel } from "../models/todo";

export interface UpdateUserTodoUseCase {
    create: (username: string, todo: TodoModel) => Promise<TodoModel[]>
}