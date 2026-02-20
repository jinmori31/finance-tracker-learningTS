export class CreateTransactionDto {
    category: string;
    amount: number;
    paymentMethod: string;
    description: string;
    date: Date;
}