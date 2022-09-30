import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { USRE_REPOSITORY } from './user.constant';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      name: 'admin',
      pwd: '123456'
    },
    {
      id: 2,
      name: 'sysadmin',
      pwd: '000000'
    }
  ];
  constructor(
    // @Inject(USRE_REPOSITORY)
    // private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(u => u.id === id);
  }

  findOneByUsername(name: string) {
    return this.users.find(u => u.name === name);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
