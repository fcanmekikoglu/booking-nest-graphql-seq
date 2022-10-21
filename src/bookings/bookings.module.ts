import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsResolver } from './bookings.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookingsModel } from './models/booking.model';

@Module({
  imports: [SequelizeModule.forFeature([BookingsModel])],
  providers: [BookingsResolver, BookingsService],
})
export class BookingsModule {}
