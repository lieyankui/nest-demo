import {
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/mapped-types';
import { AdditionCatInfo, CreateCatDto } from './create-cat.dto';

// all fields can be update
export class UpdateCatDto extends PartialType(CreateCatDto) {}

// pick some fields
// export class UpdateCatDto extends PickType(CreateCatDto, [
//   'age',
//   'breed',
// ] as const) {}

// name field can't be update
// export class UpdateCatDto extends OmitType(CreateCatDto, ['name'] as const) {}

// add additional fields
// export class UpdateCatDto extends IntersectionType(
//   CreateCatDto,
//   AdditionCatInfo,
// ) {}
