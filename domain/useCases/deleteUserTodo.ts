export interface DeleteUserTodoUseCase {
    delete: (idTodo: string) => Promise<void>
}