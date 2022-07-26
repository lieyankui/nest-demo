import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

const mockCatsService = {
  cats: [],
  findAll: function () {
    return this.cats;
  },
  create: function (cat: Cat) {
    this.cats.push(cat);
    return cat;
  },
};

@Module({
  controllers: [CatsController],
  providers: [
    // CatsService,
    {
      provide: CatsService,
      useValue: mockCatsService,
    },
  ],
})
export class CatsModule {}
