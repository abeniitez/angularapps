import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditorComponent } from './users-editor/users-editor.component';
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'all',component: UsersListComponent},
  {path:'create',component: UsersEditorComponent},
  {path:'edit/:id',component: UsersEditorComponent},

]

@NgModule({
  declarations: [
    UsersListComponent,
    UsersEditorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageUsersModule { }
