import { Allow, IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;

  @Allow() // 当没有为属性指定其他约束时，防止剥离该属性。 如果不加，remark 属性将会在 whitelist 为true时 被自动去除
  remark: string;
}

export class AdditionCatInfo {
  @IsString()
  color: string;
}
