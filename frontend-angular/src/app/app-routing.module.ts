import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { JewelleryComponent } from './pages/jewellery/jewellery.component';
import { JewelleryDetailsComponent } from './pages/jewellery-details/jewellery-details.component';

const routes: Routes = [
    {
        path: '',
        component: JewelleryComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'usersList',
        component: UsersListComponent,
      },
      {
        path: 'jewellery',
        component: JewelleryComponent,
      },
      {
        path: 'jewellerydetails/:id' , 
        component: JewelleryDetailsComponent
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}