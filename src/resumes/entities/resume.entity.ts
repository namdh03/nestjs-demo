import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { HydratedDocument } from 'mongoose';

import { Company } from 'src/companies/entities/company.entity';
import { Job } from 'src/jobs/entities/job.entity';

export type ResumeDocument = HydratedDocument<Resume>;

@Schema({ timestamps: true })
export class Resume {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  companyId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Job.name })
  jobId: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.Array })
  history: {
    status: string;
    updatedAt: Date;
    updatedBy: {
      _id: mongoose.Schema.Types.ObjectId;
      email: string;
    };
  }[];

  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
