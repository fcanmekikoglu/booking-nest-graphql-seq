import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';
import { BookingsModel } from './models/booking.model';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(BookingsModel)
    private bookingModel: typeof BookingsModel,
  ) {}

  async create(createBookingInput) {
    console.log(createBookingInput);
    return await this.bookingModel.create(createBookingInput);
  }

  async findAll() {
    return await this.bookingModel.findAll();
  }

  async findOne(id: string) {
    return await this.bookingModel.findByPk(id);
  }

  update(id: string, updateBookingInput: UpdateBookingInput) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
