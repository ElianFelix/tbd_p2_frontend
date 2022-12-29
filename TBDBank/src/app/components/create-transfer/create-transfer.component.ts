import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Account } from 'src/app/models/Account';
import { Transaction } from 'src/app/models/Transaction';
import { AccountService } from 'src/app/services/account.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss'],
})
export class CreateTransferComponent implements OnInit {
  transferForm: FormGroup;
  accounts: Account[] = [];

  validateAmount(control: FormControl) { 
    const sender = this.accounts.find(account => account.id === control.parent?.value.sender);
    const balance = sender ? sender.balance : 0;
    if (control.value > balance!){
      return {
        amountTooHigh: true
      };
    }
    return null;
  }


  constructor(
    private accountService: AccountService,
    private transactionService: TransactionsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.transferForm = this.formBuilder.group({
      sender: ['', Validators.required],
      recipient: ['', Validators.required],
      amount: ['', [Validators.required, this.validateAmount.bind(this)]],
    });

    this.accountService
      .getAccounts()
      .subscribe((accounts) => (this.accounts = accounts));
  }

  get sender(){
    return this.transferForm.get('sender');
  }

  get recipient(){
    return this.transferForm.get('recipient');
  }

  get amount(){
    return this.transferForm.get('amount');
  }

  onSubmit(){
    console.log(this.transferForm.value);
    const sender = this.accounts.find(account => account.id === this.sender?.value);
    const recipient = this.accounts.find(account => account.id === this.recipient?.value);
    const amount = this.amount?.value;
    if(sender && recipient && sender.id != recipient.id) {
      if(sender.balance! > amount) {
        //change balance a
        //this.accountService.update({...sender, balance: sender.balance!-amount})
        console.log('senders updated account');
        console.log({...sender, balance: sender.balance!-amount})
        //change balance v
        //this.accountService.update({...recipient, balance: recipient.balance! + amount})
        console.log("recipient's updated account");
      console.log({...recipient, balance: recipient.balance! + amount})
        const transactionFrom: Transaction = {
          account: {id: sender.id},
          amount: -amount,
          type: {id:5},
          status: {id:2},
          category: 'Transfer',
          description: `Transfer to ${recipient.name}`,
          merchantName: 'TBD Bank'
        }
        const transactionTo: Transaction = {
          account: {id: recipient.id},
          amount: amount,
          type: {id:5},
          status: {id:2},
          category: 'Transfer',
          description: `Transfer from ${sender.name}`,
          merchantName: 'TBD Bank'
        }
       // this.transactionService.createTransaction(transactionFrom);
      //  this.transactionService.createTransaction(transactionTo);

      }

    }

  }



}
