import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserModel } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}

  //move into auth
  async create(signupInput) {
    return await this.userModel.create(signupInput);
  }
  //protect
  async findAll() {
    return await this.userModel.findAll();
  }

  findByUsername(username: string) {
    return this.userModel.findOne({
      where: { username },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
