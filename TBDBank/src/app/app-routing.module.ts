import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent },
    ],
  },
  {
    path: 'accounts',
    component: AccountListComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'account/:id',
    component: TransactionsComponent,
    children: [
      {
        path: 'transaction/:id',
        component: TransactionDetailsComponent,
      },
      {
        path: 'create-transfer',
        component: CreateTransferComponent,
      },
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
