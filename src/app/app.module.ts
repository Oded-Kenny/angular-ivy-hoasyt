import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthenticatorGuardGuard } from './authenticator-guard.guard';

const firebaseConfig = {
  apiKey: 'Put your fireBase Details',
  authDomain: 'Put your fireBase Details',
  databaseURL: 'Put your fireBase Details',
  projectId: 'Put your fireBase Details',
  storageBucket: 'Put your fireBase Details',
  messagingSenderId: 'Put your fireBase Details',
  appId: 'Put your fireBase Details',
  measurementId: 'Put your fireBase Details'
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AuthenticatorGuardGuard]
      },

      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AuthenticatorGuardGuard]
      },

      {
        path: 'login',
        component: LoginPageComponent
      },

      {
        path: '**',
        redirectTo: 'login'
      }
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthenticatorGuardGuard]
})
export class AppModule {}
