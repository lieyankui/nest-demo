import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  findAll() {
    return this.cats;
  }

  create(cat: Cat) {
    this.cats.push(cat);
    return cat;
  }
}
