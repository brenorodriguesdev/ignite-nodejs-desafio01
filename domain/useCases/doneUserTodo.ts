export interface DoneUserTodoUseCase {
    done: (id: string) => Promise<void>
}