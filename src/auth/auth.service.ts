import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignupInput } from './dto/signup.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signup(signupInput: SignupInput): Promise<any> {
    const user = await this.userService.findByUsername(signupInput.username);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const password = await bcrypt.hash(signupInput.password, 10);

    return await this.userService.create({ ...signupInput, password });
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    const valid = await bcrypt.compare(password, user?.password);

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
