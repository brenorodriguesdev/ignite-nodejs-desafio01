export interface CheckExistsUserAccountUseCase {
    check: (username: string) => Promise<boolean>
}