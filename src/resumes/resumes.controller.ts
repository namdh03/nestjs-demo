import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

import { CreateUserCVDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { ResumesService } from './resumes.service';

@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Post()
  @ResponseMessage('Create a new resume')
  async create(@Body() createResumeDto: CreateUserCVDto, @User() user: IUser) {
    const resume = await this.resumesService.create(createResumeDto, user);
    return {
      _id: resume._id,
      createdAt: resume.createdAt,
    };
  }

  @Post('by-user')
  @ResponseMessage('Get Resumes by User')
  getResumesByUser(@User() user: IUser) {
    return this.resumesService.findByUser(user);
  }

  @Get()
  @ResponseMessage('Fetch all resumes with paginate')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() query: Record<string, string>,
  ) {
    return this.resumesService.findAll(+currentPage, +limit, query);
  }

  @Get(':id')
  @ResponseMessage('Fetch a resume by id')
  findOne(@Param('id') id: string) {
    return this.resumesService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('Update status resume')
  update(@Param('id') id: string, @Body() updateResumeDto: UpdateResumeDto, @User() user: IUser) {
    return this.resumesService.update(id, updateResumeDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete a resume by id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.resumesService.remove(id, user);
  }
}
