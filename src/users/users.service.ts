import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose from 'mongoose';

import aqp from 'api-query-params';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { USER_ROLE } from 'src/databases/sample';
import { Role, RoleDocument } from 'src/roles/entities/role.entity';

import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { IUser } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: SoftDeleteModel<UserDocument>,

    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RoleDocument>,
  ) {}

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

  async findAll(currentPage: number, limit: number, query: Record<string, string>) {
    const { filter, sort, population } = aqp(query);
    delete filter.current;
    delete filter.pageSize;

    const offset = (+currentPage - 1) * +limit;
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .sort(sort as any)
      .populate(population)
      .select({ password: 0 })
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

  async findOne(_id: string) {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new BadRequestException('User not found!');
    const user = await this.userModel
      .findOne({ _id })
      .select('-password')
      .populate({
        path: 'role',
        select: {
          _id: 1,
          name: 1,
        },
      });
    if (!user) throw new BadRequestException('User not found!');
    return user;
  }

  async findOneByUsername(username: string) {
    return await this.userModel.findOne({ email: username }).populate({
      path: 'role',
      select: {
        _id: 1,
        name: 1,
      },
    });
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

    const userRole = await this.roleModel.findOne({ name: USER_ROLE });

    const hashPassword = this.getHashPassword(registerUserDto.password);
    return await this.userModel.create({
      ...registerUserDto,
      role: userRole?._id,
      password: hashPassword,
    });
  }

  async updateUserToken(_id: string, refreshToken: string) {
    return await this.userModel.updateOne(
      {
        _id,
      },
      { refreshToken },
    );
  }

  async findUserByRefreshToken(refreshToken: string) {
    return await this.userModel.findOne({ refreshToken }).populate({
      path: 'role',
      select: { name: 1 },
    });
  }
}
