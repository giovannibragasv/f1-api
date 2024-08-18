import { IsDateString, IsOptional, IsString, IsUUID, MaxLength, } from 'class-validator';

export class DriverDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  driverId: string;

  @IsOptional()
  @IsString()
  @MaxLength(3)
  driverCode: string;

  @IsString()
  firstName: string;

  @IsString()
  surname: string;

  @IsDateString()
  dateOfBirth: Date;

  @IsString()
  nationality: string;

  @IsString()
  url: string;
}

export interface FindAllParameters {
  firstName: string;
  surname: string;
}
