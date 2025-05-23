import mongoose from 'mongoose';

import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsDefined,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

class CompanyDto {
  @IsNotEmpty()
  @IsMongoId()
  _id: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  name: string;
}

export class CreateJobDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  skills: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CompanyDto)
  company: CompanyDto;

  @IsNotEmpty()
  @IsInt()
  salary: number;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsNotEmpty()
  level: string;

  description: string;

  @IsNotEmpty()
  location: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  isActive: boolean;
}
