import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';

import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Permission, PermissionDocument } from 'src/permissions/entities/permission.entity';
import { Role, RoleDocument } from 'src/roles/entities/role.entity';
import { User, UserDocument } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

import { ADMIN_ROLE, INIT_PERMISSIONS, USER_ROLE } from './sample';

@Injectable()
export class DatabasesService implements OnModuleInit {
  private readonly logger = new Logger(DatabasesService.name);

  constructor(
    @InjectModel(User.name)
    private userModel: SoftDeleteModel<UserDocument>,

    @InjectModel(Permission.name)
    private permissionModel: SoftDeleteModel<PermissionDocument>,

    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RoleDocument>,

    private configService: ConfigService,
    private userService: UsersService,
  ) {}

  async onModuleInit() {
    const isInit = this.configService.get<string>('SHOULD_INIT');
    if (isInit) {
      const countUser = await this.userModel.countDocuments();
      const countPermission = await this.permissionModel.countDocuments();
      const countRole = await this.roleModel.countDocuments();

      //create permissions
      if (countPermission === 0) {
        await this.permissionModel.insertMany(INIT_PERMISSIONS);
        //bulk create
      }

      // create role
      if (countRole === 0) {
        const permissions = await this.permissionModel.find({}).select('_id');
        await this.roleModel.insertMany([
          {
            name: ADMIN_ROLE,
            description: 'Admin thì full quyền :v',
            isActive: true,
            permissions: permissions,
          },
          {
            name: USER_ROLE,
            description: 'Người dùng/Ứng viên sử dụng hệ thống',
            isActive: true,
            permissions: [],
          },
        ]);
      }

      if (countUser === 0) {
        const adminRole = await this.roleModel.findOne({ name: ADMIN_ROLE });
        const userRole = await this.roleModel.findOne({ name: USER_ROLE });
        await this.userModel.insertMany([
          {
            name: "I'm admin",
            email: 'admin@gmail.com',
            password: this.userService.getHashPassword(this.configService.get<string>('PASSWORD_INIT') as string),
            age: 69,
            gender: 'MALE',
            address: 'VietNam',
            role: adminRole?._id,
          },
          {
            name: "I'm Hỏi Dân IT",
            email: 'hoidanit@gmail.com',
            password: this.userService.getHashPassword(this.configService.get<string>('PASSWORD_INIT') as string),
            age: 96,
            gender: 'MALE',
            address: 'VietNam',
            role: adminRole?._id,
          },
          {
            name: "I'm normal user",
            email: 'user@gmail.com',
            password: this.userService.getHashPassword(this.configService.get<string>('PASSWORD_INIT') as string),
            age: 69,
            gender: 'MALE',
            address: 'VietNam',
            role: userRole?._id,
          },
        ]);
      }

      if (countUser > 0 && countRole > 0 && countPermission > 0) {
        this.logger.log('>>> ALREADY INIT SAMPLE DATA...');
      }
    }
  }
}
