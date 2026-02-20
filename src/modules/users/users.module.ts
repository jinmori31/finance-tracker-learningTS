import { Module } from '@nestjs/common';
import { ControllersController } from './controllers.controller';
import { ServicesService } from './services.service';

@Module({
  controllers: [ControllersController],
  providers: [ServicesService]
})
export class UsersModule {}
