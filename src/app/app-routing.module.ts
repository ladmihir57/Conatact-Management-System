import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  { path:'contactlist', component:ContactListComponent, canActivate:[authGuard]},
  { path:'addcontact', component:AddContactComponent, canActivate:[authGuard]},
  { path:'updatecontact/:id', component:UpdateContactComponent, canActivate:[authGuard]},
  { path:'login-signup', component:LoginSignupComponent},
  { path:'', redirectTo:'login-signup',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
