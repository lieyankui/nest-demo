import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { UpdateCatDto } from './dto';
import { CreateCatDto } from './dto/create-cat.dto';

// @Controller('cats')
@Controller('cats')
export class CatsController {
  constructor(private cats: CatsService) {}
  @Get()
  async findAll() {
    return this.cats.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.cats.create(createCatDto);
  }

  @Post('bulk')
  async createBulk(
    @Body(new ParseArrayPipe({ items: CreateCatDto }))
    createCatsDtos: CreateCatDto[],
  ) {
    // console.log('createBulk createCatDtos: ', createCatsDtos);
    return 'This action adds new cats';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Delete()
  async deleteByIds(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ) {
    console.log('deleteByIds ids: ', ids);
    return `This action delete cats by ids：${ids}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }
}
