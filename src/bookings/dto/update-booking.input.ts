import { CreateBookingInput } from './create-booking.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookingInput extends PartialType(CreateBookingInput) {
  @Field()
  id: string;

  @Field()
  resDate: Date;
}
