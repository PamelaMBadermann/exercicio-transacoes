import { v4 as uuidGenerator } from 'uuid';
import Transaction from './Transaction';

export default class User {
    public userId: string;
    public name: string;
    public cpf: string;
    public email: string;
    public age: number;
    public transactions: Array<Transaction> = [];

    constructor (name: string, cpf: string, email: string, age: number, transactions: Array<Transaction>) {
        this.userId = uuidGenerator();
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
        this.transactions = transactions
    }

    addTransaction(transaction: Transaction) {
        this.transactions.push(transaction)
    }
}