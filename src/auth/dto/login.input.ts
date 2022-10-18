import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Max, Min } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
