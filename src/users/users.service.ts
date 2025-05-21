import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose from 'mongoose';

import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';

import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { IUser } from './users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>) {}

  getHashPassword(password: string) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async create(createUserDto: CreateUserDto, user: IUser) {
    const isExited = await this.userModel.findOne({ email: createUserDto.email });
    if (isExited) throw new BadRequestException(`Email ${createUserDto.email} existed!`);

    const hashPassword = this.getHashPassword(createUserDto.password);
    return await this.userModel.create({
      ...createUserDto,
      password: hashPassword,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(_id: string) {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new BadRequestException('User not found!');
    const user = await this.userModel.findOne({ _id }, { password: 0 });
    if (!user) throw new BadRequestException('User not found!');
    return user;
  }

  async findOneByUsername(username: string) {
    return await this.userModel.findOne({ email: username });
  }

  async update(id: string, updateUserDto: UpdateUserDto, user: IUser) {
    return await this.userModel.updateOne(
      { _id: id },
      {
        ...updateUserDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  }

  async remove(_id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new BadRequestException('User not found!');
    await this.userModel.updateOne(
      { _id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.userModel.softDelete({ _id });
  }

  async register(registerUserDto: RegisterUserDto) {
    const isExited = await this.userModel.findOne({ email: registerUserDto.email });
    if (isExited) throw new BadRequestException(`Email ${registerUserDto.email} existed!`);

    const hashPassword = this.getHashPassword(registerUserDto.password);
    return await this.userModel.create({
      ...registerUserDto,
      role: 'USER',
      password: hashPassword,
    });
  }
}
