import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose from 'mongoose';

import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';

import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

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

  async create(createUserDto: CreateUserDto) {
    const isExited = await this.userModel.findOne({ email: createUserDto.email });
    if (isExited) throw new BadRequestException(`Email ${createUserDto.email} existed!`);

    const hashPassword = this.getHashPassword(createUserDto.password);

    return await this.userModel.create({
      ...createUserDto,
      password: hashPassword,
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(_id: string) {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new BadRequestException('User not found!');
    return await this.userModel.findOne({ _id });
  }

  async findOneByUsername(username: string) {
    return await this.userModel.findOne({ email: username });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({ _id: id }, updateUserDto);
  }

  remove(_id: string) {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new BadRequestException('User not found!');
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
