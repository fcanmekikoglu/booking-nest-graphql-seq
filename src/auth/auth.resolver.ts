import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  signup(@Args('signupInput') signupInput: SignupInput, @Context() context) {
    return this.authService.signup(context.user);
  }

  //@Mutation()
  //login() {}
}
