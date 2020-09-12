import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [ {
  path:'cancelbooking',
  component:CancelbookingComponent,canActivate:[AuthguardService]
},
{
path:'login',
component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
