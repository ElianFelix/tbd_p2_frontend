import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ModalComponent } from './components/modal/modal.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'login', component: ModalComponent },
      { path: 'register', component: RegisterFormComponent },
    ],
  },
  {
    path: 'account/:id',
    component: TransactionsComponent,
<<<<<<< HEAD
    children: [
      {
        path: 'transaction/:id',
        component: TransactionDetailsComponent,
      },
    ],
=======
    /* children: [
       {path: 'transaction/:id', component: TransactionDetailsComponent }
    ], */
>>>>>>> fb96f3420151cda007532a027194187e605b355d
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
