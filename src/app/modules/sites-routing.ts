import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './sites/categoria/categoria.component';
import { ContactComponent } from './sites/contact/contact.component';
import { HomeComponent } from './sites/home/home.component';
import { UserComponent } from './sites/user/user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'contact', pathMatch:'full'
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path:'category',
    component: CategoriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sitesRouting { }
