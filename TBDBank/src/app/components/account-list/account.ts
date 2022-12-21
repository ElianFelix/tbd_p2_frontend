export class Account {
    id: number;
    balance: number;
    type: number;
    userId: number;

    constructor(id: number, balance: number, type: number, userId: number) {
        this.id = id;
        this.balance = balance;
        this.type = type;
        this.userId = userId;
    }

}
