//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Materials
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { ButtonComponent } from './components/button/button.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';
import { AccountComponent } from './components/account/account.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { RequestsComponent } from './components/requests/requests.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingComponent,
    ButtonComponent,
    AccountListComponent,
    ModalComponent,
    RegisterFormComponent,
    HeaderComponent,
    TransactionsComponent,
    TransactionComponent,
    TransactionDetailsComponent,
    NotFoundComponent,
    CreateTransferComponent,
    AccountComponent,
    CreateRequestComponent,
    NotificationsComponent,
    RequestsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Materials
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
