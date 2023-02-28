import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { InvoiceComponent } from './pages/invoice/invoice.component';
//import { UsersComponent } from './pages/users/users.component';

const appRoutes: Routes = [
  //{ path: '',redirectTo:'manage-users', pathMatch:'full'},
  { 
    path: 'users', //component: UsersComponent 
    loadChildren: ()=>import('app/pages/manage-users/manage-users.module').then(t=>t.ManageUsersModule),
  },
  //{ path: 'invoice', component:InvoiceComponent },
  //{ path: 'newcity', component:NewcityComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }