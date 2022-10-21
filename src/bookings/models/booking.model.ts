import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import { UserModel } from 'src/users/models/user.model';

@Table({ tableName: 'bookings' })
export class BookingsModel extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  resDate: Date;

  @ForeignKey(() => UserModel)
  @Column(DataType.UUID)
  ownerId: string;

  @BelongsTo(() => UserModel)
  owner: User;
}
