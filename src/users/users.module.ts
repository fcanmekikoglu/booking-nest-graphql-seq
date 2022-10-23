import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './models/user.model';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [
    UsersResolver,
    UsersService,
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  exports: [UsersService],
})
export class UsersModule {}
