import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Booking {
  @Field()
  id: string;

  @Field()
  resDate: Date;

  @Field()
  ownerId: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
