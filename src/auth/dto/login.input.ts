import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Max, Min } from 'class-validator';

@InputType()
export class LoginUserInput {
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
}
