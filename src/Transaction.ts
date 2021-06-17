import { v4 as uuidGenerator } from 'uuid';

export default class Transaction {
    public id: string;
    public title: string;
    public value: number;
    public type: string;

    constructor (title: string, value: number, type: string) {
        this.id = uuidGenerator();
        this.title = title;
        this.value = value;
        this.type = type;
    }
}