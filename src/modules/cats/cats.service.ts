import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

Injectable();
export class CatsService {
  private cats: Cat[] = [];

  findAll() {
    return this.cats;
  }
  create(cat: Cat) {
    if(this.cats.map(c => c.name).includes(cat.name)) {
        throw new ConflictException({statusCode: 40901, message: "[cat has already]: aaaaaaaaa"});
    } else {
        this.cats.push(cat);
        return cat;
    }
  }
  createOne(cat: Cat) {
    throw new ForbiddenException();
  }
}
