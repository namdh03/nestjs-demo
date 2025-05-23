import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose from 'mongoose';

import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';

import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission, PermissionDocument } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(@InjectModel(Permission.name) private permissionModel: SoftDeleteModel<PermissionDocument>) {}

  async checkExistedPermission({ apiPath, method }: Pick<CreatePermissionDto, 'apiPath' | 'method'>) {
    return await this.permissionModel.findOne({ apiPath, method });
  }

  async create(createPermissionDto: CreatePermissionDto, user: IUser) {
    const permission = await this.checkExistedPermission(createPermissionDto);
    if (permission) throw new BadRequestException('Permission existed!');
    return this.permissionModel.create({
      ...createPermissionDto,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
  }

  findAll() {
    return `This action returns all permissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(_id: string, updatePermissionDto: UpdatePermissionDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new BadRequestException('Permission not found!');
    return this.permissionModel.updateOne(
      { _id },
      {
        ...updatePermissionDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
