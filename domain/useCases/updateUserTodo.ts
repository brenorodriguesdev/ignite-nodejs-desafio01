import { TodoModel } from "../models/todo";

export interface UpdateUserTodoUseCase {
    update: (username: string, todo: TodoModel) => Promise<TodoModel[]>
}