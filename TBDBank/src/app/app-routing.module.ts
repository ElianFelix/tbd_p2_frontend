import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ModalComponent } from './components/modal/modal.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { RequestsComponent } from './components/requests/requests.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterFormComponent },
    ],
  },
  {
    path: 'accounts',
    component: AccountListComponent,
    children: [
      {
        path: 'create-transfer',
        component: CreateTransferComponent
      },
      {
        path:'create-request',
        component:CreateRequestComponent
      }
    ]
  },
  {
    path: 'account/:id',
    component: TransactionsComponent,
    children: [
      {
        path: 'transaction/:id',
        component: TransactionDetailsComponent,
      },

    ],
  },
  {
    path: 'requests/:id',
    component: RequestsComponent
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
