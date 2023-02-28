import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
//import { InvoiceComponent } from './pages/invoice/invoice.component';
import { UsersEditorComponent } from './pages/manage-users/users-editor/users-editor.component';
import { UsersListComponent } from './pages/manage-users/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    //InvoiceComponent,
    //UsersEditorComponent,
    //UsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
