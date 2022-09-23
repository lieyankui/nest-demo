import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class CreateDogDto {
  @IsString()
  @Length(4, 32)
  id: string;

  @IsString()
  name: string;

  @IsInt()
  @Max(100)
  @Min(0)
  age: number;

  @IsString()
  breed: string;

  @IsString()
  remake: string;
}
