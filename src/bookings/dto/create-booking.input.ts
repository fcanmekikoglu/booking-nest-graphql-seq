import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field()
  resDate: Date;

  @Field()
  ownerId: string;
}
