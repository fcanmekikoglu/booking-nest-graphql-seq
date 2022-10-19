import { ObjectType, Field } from '@nestjs/graphql';
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@ObjectType()
@Table
export class User extends Model {
  @Field()
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Field({ nullable: false })
  @Column({ unique: true })
  username: string;

  @Field({ nullable: false })
  @Column
  password: string;

  @Field({ nullable: false })
  @Column({ unique: true })
  email: string;
}
