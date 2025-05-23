import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @ResponseMessage('Create a new job')
  async create(@Body() createJobDto: CreateJobDto, @User() user: IUser) {
    const job = await this.jobsService.create(createJobDto, user);
    return {
      _id: job._id,
      createdAt: job.createdAt,
    };
  }

  @Public()
  @Get()
  @ResponseMessage('Fetch jobs with pagination')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() query: Record<string, string>,
  ) {
    return this.jobsService.findAll(+currentPage, +limit, query);
  }

  @Public()
  @Get(':id')
  @ResponseMessage('Fetch a job by id')
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('Update a job')
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto, @User() user: IUser) {
    return this.jobsService.update(id, updateJobDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete a job')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.jobsService.remove(id, user);
  }
}
