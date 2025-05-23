import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';

import { CreateUserCVDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume, ResumeDocument } from './entities/resume.entity';

@Injectable()
export class ResumesService {
  constructor(@InjectModel(Resume.name) private resumeModel: SoftDeleteModel<ResumeDocument>) {}

  async create(createResumeDto: CreateUserCVDto, user: IUser) {
    const resume = await this.resumeModel.create({
      ...createResumeDto,
      email: user.email,
      userId: user._id,
      status: 'PENDING',
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    await this.resumeModel.updateOne(
      { _id: resume._id },
      {
        history: [
          {
            status: 'PENDING',
            updatedAt: resume.updatedAt,
            updatedBy: {
              _id: user._id,
              email: user.email,
            },
          },
        ],
      },
    );

    return resume;
  }

  findAll() {
    return `This action returns all resumes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resume`;
  }

  update(id: number, updateResumeDto: UpdateResumeDto) {
    return `This action updates a #${id} resume`;
  }

  remove(id: number) {
    return `This action removes a #${id} resume`;
  }
}
