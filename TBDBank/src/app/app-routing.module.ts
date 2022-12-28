import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ModalComponent } from './components/modal/modal.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'login', component: ModalComponent },
      { path: 'register', component: RegisterFormComponent },
    ],
  },
  // {
  //   path: '/accounts',
  //   component: AccountsComponent
  // },
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
