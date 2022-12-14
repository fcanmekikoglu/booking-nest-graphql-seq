import { ObjectType, Field } from '@nestjs/graphql';
import { Role } from 'src/auth/roles/role.enum';
import { Booking } from 'src/bookings/entities/booking.entity';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field({ nullable: true, defaultValue: Role.User })
  role: Role;

  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  email: string;

  @Field((type) => [Booking], { nullable: true })
  bookings: Booking[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
