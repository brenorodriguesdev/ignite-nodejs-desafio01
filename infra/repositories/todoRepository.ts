import { getRepository } from "typeorm";
import { TodoRepository } from "../../data/contracts/repositories/todoRepository";
import TodoEntity from "../../data/entities/todo";

export class TodoRepositoryTypeORM implements TodoRepository {
    async create(todo: TodoEntity): Promise<void> {
        const todoRepository = getRepository(TodoEntity)
        await todoRepository.save(todo)
    }

    async update(todo: TodoEntity): Promise<void> {
        const todoRepository = getRepository(TodoEntity)
        const { id } = todo
        delete todo.id
        await todoRepository.update({ id }, todo)
    }

    async done(todo: TodoEntity): Promise<void> {
        const todoRepository = getRepository(TodoEntity)
        const { id } = todo
        delete todo.id
        await todoRepository.update({ id }, { done: true })
    }

    async deleteById(id: string): Promise<void> {
        const todoRepository = getRepository(TodoEntity)
        await todoRepository.delete(id)
    }
}