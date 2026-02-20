export interface Transaction {
    id: string;
    category: string;
    amount: number;
    paymentMethod: string;
    description: string;
    date: Date;
}