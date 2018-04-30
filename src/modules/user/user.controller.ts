import { UserValidationPipe } from '@/pipes/user-validation.pipe';

import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';

import { User } from './user.entity';
import { UserService } from './user.service';

/**
 *  user controller
 * @export
 * @class UserController
 */

@Controller('user')
export class UserController {
  constructor(private readonly catsService: UserService) {}
  @Post()
  async create(@Res() res, @Body(new UserValidationPipe()) user: User) {
    // TODO: Add some logic here
    // tslint:disable-next-line:no-console
    console.log('create user:', user);
    await this.catsService.create(user);
    res.status(HttpStatus.CREATED).send({ code: 0, msg: '创建成功' });
  }

  /**
   *  return user/users
   * @param request
   */
  @Get()
  async findAll(@Res() res, @Req() request) {
    // TODO: Add some logic here
    const arr = await this.catsService.findAll();
    res.status(HttpStatus.OK).json(arr || []);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id) {
    // TODO: Add some logic here
    const user = await this.catsService.findOne(id);
    // tslint:disable-next-line:no-console
    console.dir(user);
    res.status(HttpStatus.OK).json(user);
  }
}
