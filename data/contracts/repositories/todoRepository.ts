import TodoEntity from "../../entities/todo";

export interface TodoRepository {
    create: (todo: TodoEntity) => Promise<void>
    update: (todo: TodoEntity) => Promise<void>
    done: (todo: TodoEntity) => Promise<void>
    deleteById: (id: string) => Promise<void>
}