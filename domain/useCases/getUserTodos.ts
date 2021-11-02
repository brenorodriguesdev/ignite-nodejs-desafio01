import { TodoModel } from "../models/todo";

export interface GetUserTodosUseCase {
    get: (username: string) => Promise<TodoModel[]>
}