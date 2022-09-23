import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { Logger } from 'winston';
import { getUuid } from '../../utils';
import { CatsService } from './cats.service';
import { UpdateCatDto } from './dto';
import { CreateCatDto } from './dto/create-cat.dto';

// @Controller('cats')
@Controller('cats')
export class CatsController {
  constructor(private cats: CatsService, @Inject('winston') private readonly logger: Logger) {}
  @Get()
  async findAll() {
    return getUuid();
    return this.cats.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log("uuid id: ", id);
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
