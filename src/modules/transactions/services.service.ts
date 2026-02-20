import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { randomUUID } from 'crypto';
import { Transaction } from './types/transaction.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }
}

