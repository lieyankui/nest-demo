import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  constructor(private configService: ConfigService) {
    console.log('configService: ', this.configService);
  }

  findAll() {
    return this.cats;
  }

  create(cat: Cat) {
    console.log('configService: ', this.configService);
    this.cats.push(cat);
    return cat;
  }
}
