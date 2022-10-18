import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GraphQLError } from 'graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserInputError } from 'apollo-server-express';
import { SignupInput } from 'src/auth/dto/signup.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  //move into auth
  async create(signupInput: SignupInput): Promise<any> {
    return await this.userModel.create({ signupInput });
  }
  //protect
  findAll() {
    return this.userModel.findAll();
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
