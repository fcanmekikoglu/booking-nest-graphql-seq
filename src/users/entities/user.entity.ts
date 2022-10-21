import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  email: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
