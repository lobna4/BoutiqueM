import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { SigninComponent } from './Account/signin/signin.component';
import { ComponentsComponent } from './components/components.component';
import { GuardGuard } from './Guard/Guard.guard';
import { AddComponent } from './Produit/add/add.component';
import { EditComponent } from './Produit/edit/edit.component';
import { ListComponent } from './Produit/list/list.component';

const routes: Routes = [
  { path:'',redirectTo:'/login', pathMatch:'full'},
  { path:'signin',component:SigninComponent},
  { path:'login',component:LoginComponent},
  { path:'', canActivate:[GuardGuard], component:ComponentsComponent, children:[
   { path:'list', component:ListComponent},
   { path:'add', component:AddComponent},
   { path:'edit/:produitId',component:EditComponent},
   //{ path:'profil',component:ProfilComponent},
   //{ path:'users', component:AdminSpaceComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
