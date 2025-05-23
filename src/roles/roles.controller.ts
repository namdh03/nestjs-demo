import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ResponseMessage('Create a new role')
  async create(@Body() createRoleDto: CreateRoleDto, @User() user: IUser) {
    const role = await this.rolesService.create(createRoleDto, user);
    return {
      _id: role._id,
      createdAt: role.createdAt,
    };
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
