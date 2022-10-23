import { InputType, Field } from '@nestjs/graphql';
import { Role } from 'src/auth/roles/role.enum';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  role: Role;
}
