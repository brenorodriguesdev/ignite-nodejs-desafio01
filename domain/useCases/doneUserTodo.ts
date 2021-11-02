export interface DoneUserTodoUseCase {
    done: (username: string, idTodo: number) => Promise<void>
}