import { IsOptional, IsString, IsUUID, MaxLength, MinLength, } from 'class-validator';

export class UserDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MinLength(6)
  @MaxLength(256)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(24)
  password: string;
}
