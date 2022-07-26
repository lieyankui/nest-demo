import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  name: string;

  @Column('int')
  age: number;

  @Column('boolean')
  gender: boolean;

  @Column()
  phone: string;
}
