export interface DeleteUserTodoUseCase {
    delete: (username: string, idTodo: number) => Promise<void>
}