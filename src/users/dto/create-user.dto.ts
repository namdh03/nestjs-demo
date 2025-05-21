import mongoose from 'mongoose';

import { Type } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';

class CompanyDto {
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  name: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  age: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  role: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CompanyDto)
  company: CompanyDto;
}
