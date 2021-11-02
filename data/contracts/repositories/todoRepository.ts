import TodoEntity from "../../entities/todo";

export interface TodoRepository {
    create: (todo: TodoEntity) => Promise<void>
    update: (todo: TodoEntity) => Promise<void>
    done: (id: string) => Promise<void>
    deleteById: (id: string) => Promise<void>
}