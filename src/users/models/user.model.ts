import { IsEmail } from 'class-validator';
import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/auth/roles/role.enum';
import { Booking } from 'src/bookings/entities/booking.entity';
import { BookingsModel } from 'src/bookings/models/booking.model';

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  username: string;

  @Column
  password: string;

  @IsEmail()
  @Column
  email: string;

  @Column({
    type: DataType.ENUM(...Object.values(Role)),
    defaultValue: Role.User,
  })
  roles: Role;

  @HasMany(() => BookingsModel)
  bookings: Booking[];
}
