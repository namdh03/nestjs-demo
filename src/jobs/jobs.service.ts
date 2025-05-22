import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import aqp from 'api-query-params';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';

import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job, JobDocument } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: SoftDeleteModel<JobDocument>) {}

  create(createJobDto: CreateJobDto, user: IUser) {
    return this.jobModel.create({
      ...createJobDto,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
  }

  async findAll(currentPage: number, limit: number, query: Record<string, string>) {
    const { filter, sort, population } = aqp(query);
    delete filter.current;
    delete filter.pageSize;

    const offset = (+currentPage - 1) * +limit;
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.jobModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.jobModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .sort(sort as any)
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }

  findOne(_id: string) {
    return this.jobModel.findOne({ _id });
  }

  update(_id: string, updateJobDto: UpdateJobDto, user: IUser) {
    return this.jobModel.updateOne(
      {
        _id,
      },
      {
        ...updateJobDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  }

  async remove(_id: string, user: IUser) {
    await this.jobModel.updateOne(
      { _id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.jobModel.softDelete({ _id });
  }
}
