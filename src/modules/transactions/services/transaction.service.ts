import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { Transaction } from '../types/transaction.entity';
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

  findAll(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async findByID(id :string): Promise<Transaction | null> {
    const transaction = await this.transactionModel.findById(id).exec();
    return transaction
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction | null> {
    const transaction = await this.transactionModel.findByIdAndUpdate(id, updateTransactionDto, { new: true }).exec();
    return transaction;
  }
}

