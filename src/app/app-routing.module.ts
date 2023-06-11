import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetListarComponent } from './pages/get-listar/get-listar.component';
import { DetallePokemonComponent } from './pages/detalle-pokemon/detalle-pokemon.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'form', component:FormComponent},
  {path:'list',component:UserListComponent},
  {path:'footer', component:FooterComponent},
  {path:'pokemon',component:GetListarComponent},
  {path:'detalle', component:DetallePokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
