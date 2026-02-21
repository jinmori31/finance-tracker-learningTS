import { Body, Controller, Post , Get, Param} from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionsService } from '../services/transaction.service'; 

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) { 
    return this.transactionsService.findByID(id);
  }
}