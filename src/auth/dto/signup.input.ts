import { InputType, Field } from '@nestjs/graphql';
import { Role } from '../roles/role.enum';

@InputType()
export class SignupInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  //@Field({ defaultValue: Role.User })
  //role: Role;
}
