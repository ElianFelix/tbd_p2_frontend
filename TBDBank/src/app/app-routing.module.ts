import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    /*children: [
      { path: 'login', component: LoginComponent },
      { path: 'regist', component: RegisterComponent },
    ],*/
  },
  {
    path: 'account/:id',
    component: TransactionsComponent,
    /* children: [
       {path: 'transaction/:id', component: TransactionDetailsComponent }
    ], */
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
