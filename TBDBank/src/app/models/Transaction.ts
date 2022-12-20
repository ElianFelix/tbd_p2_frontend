export interface Transaction {
    id?: number;
    account?: string;
    amount: number;
    type: string;
    status: string;
    category: string;
    description: string;
    date: number;
    merchantName: string;
}