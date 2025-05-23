import mongoose from 'mongoose';

import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateResumeDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsMongoId()
  userId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  @IsMongoId()
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  jobId: mongoose.Schema.Types.ObjectId;
}

export class CreateUserCVDto {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  @IsMongoId()
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  jobId: mongoose.Schema.Types.ObjectId;
}
