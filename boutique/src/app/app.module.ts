import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SigninComponent } from './Account/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceService } from './Service/service.service';
import { InterceptorInterceptor } from './Interceptor/Interceptor.interceptor';
import { LoginComponent } from './Account/login/login.component';
import { ListComponent } from './Produit/list/list.component';
import { ComponentsComponent } from './components/components.component';
import { AddComponent } from './Produit/add/add.component';
import { EditComponent } from './Produit/edit/edit.component';
import { FilterPipe } from './Pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SigninComponent,
    LoginComponent,
    ListComponent,
    ComponentsComponent,
    AddComponent,
    EditComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ ServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
