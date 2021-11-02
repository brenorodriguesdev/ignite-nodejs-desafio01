import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm'
import TodoEntity from './todo'

@Entity('users')
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id: string

  @OneToMany(() => TodoEntity, todo => todo.user, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'user_id' })
  todos: TodoEntity[]

  @Column()
  name: string

  @Column()
  username: string
}