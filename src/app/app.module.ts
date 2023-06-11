import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './pages/form/form.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { GetListarComponent } from './pages/get-listar/get-listar.component';
import { HomeComponent } from './pages/home/home.component';
import{ReactiveFormsModule,FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetallePokemonComponent } from './pages/detalle-pokemon/detalle-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FormComponent,
    UserListComponent,
    GetListarComponent,
    HomeComponent,
    DetallePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
