import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  //move into auth
  async create(signupInput): Promise<User> {
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
