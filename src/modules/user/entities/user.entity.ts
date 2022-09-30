import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // 主键
  @PrimaryGeneratedColumn()
  @Column('int')
  id?: number;

  // 姓名
  @Column({ length: 32 })
  name: string;

  // 账号
  @Column({length: 32})
  account: string;

  // 密码
  @Column({length: 128, select: false})
  password: string;

  // 用户类型  0 普通用户 1 内部用户
  @Column('int')
  type: number;

  // 电话
  @Column({length: 32})
  phone: string;

  // 邮箱
  @Column({length: 64})
  email: string;

  // 性别 0 男 1 女
  @Column('int')
  gender: number;

  @Column({length: 32})
  orgCode: string;

  @Column({length: 128})
  orgName: string;

  @Column({length: 32})
  posiCode: string;

  @Column({length: 32})
  posiName: string;

  @Column('int')
  status: number;

  @Column('int')
  detailId: number;

  // 创建时间
  @Column({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createAt: Date;

  // 更新时间
  @Column({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  updateAt: Date;

  // 插入之前对密码进行加密
  @BeforeInsert()
  async encryptPwd() {
  }
}
