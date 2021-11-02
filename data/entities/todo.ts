import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import UserEntity from './user'

@Entity('todos')
export default class TodoEntity {
  @PrimaryGeneratedColumn()
  id: string

  @ManyToOne(() => UserEntity, user => user.todos)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity

  @Column()
  title: string

  @Column()
  done: boolean

  @Column()
  deadline: string

  @Column()
  created_at: Date
}