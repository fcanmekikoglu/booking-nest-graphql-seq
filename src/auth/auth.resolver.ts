import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/signup.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  signup(@Args('signupInput') signupInput: SignupInput, @Context() context) {
    return this.authService.signup(signupInput);
  }

  //@Mutation()
  //login() {}
}
