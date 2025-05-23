import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

import { CreateUserCVDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { ResumesService } from './resumes.service';

@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Post()
  async create(@Body() createResumeDto: CreateUserCVDto, @User() user: IUser) {
    const resume = await this.resumesService.create(createResumeDto, user);
    return {
      _id: resume._id,
      createdAt: resume.createdAt,
    };
  }

  @Get()
  findAll() {
    return this.resumesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResumeDto: UpdateResumeDto) {
    return this.resumesService.update(+id, updateResumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumesService.remove(+id);
  }
}
