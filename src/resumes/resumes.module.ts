import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Resume, ResumeSchema } from './entities/resume.entity';
import { ResumesController } from './resumes.controller';
import { ResumesService } from './resumes.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }])],
  controllers: [ResumesController],
  providers: [ResumesService],
})
export class ResumesModule {}
