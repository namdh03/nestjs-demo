import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Post()
  async create(@Body() createSubscriberDto: CreateSubscriberDto, @User() user: IUser) {
    const subscriber = await this.subscribersService.create(createSubscriberDto, user);
    return {
      _id: subscriber._id,
      createdAt: subscriber.createdAt,
    };
  }

  @Get()
  findAll() {
    return this.subscribersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscribersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriberDto: UpdateSubscriberDto) {
    return this.subscribersService.update(+id, updateSubscriberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscribersService.remove(+id);
  }
}
