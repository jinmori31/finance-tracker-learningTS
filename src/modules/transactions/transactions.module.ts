import { Module } from '@nestjs/common';
import { TransactionsController  } from './controllers.controller';
import { TransactionsService } from './services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './entities/transaction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema }]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule { }
