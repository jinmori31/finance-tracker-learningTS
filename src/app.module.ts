import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jakeregunay_db_user:4JVpzpZDivLIj3Sg@finance-tracker.4wfcvlt.mongodb.net/?appName=finance-tracker'),
    UsersModule,
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
