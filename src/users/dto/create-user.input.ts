import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  username: string;

  @IsString()
  @Field()
  password: string;

  @IsEmail()
  @Field()
  email: string;
}
