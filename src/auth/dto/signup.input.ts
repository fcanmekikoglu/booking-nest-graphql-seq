import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Max, Min } from 'class-validator';

@InputType()
export class SignupInput {
  @IsString()
  @Min(8)
  @Max(31)
  @Field()
  username: string;

  @IsString()
  @Min(8)
  @Max(31)
  @Field()
  password: string;

  @IsEmail()
  @Field()
  email: string;
}
