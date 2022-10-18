import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GraphQLError } from 'graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserInputError } from 'apollo-server-express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  //move into auth
  create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const { username, password, email } = createUserInput;
      return this.userModel.create({
        username,
        password,
        email,
      });
    } catch (e) {
      throw new UserInputError(e);
    }
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
