import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClienteRegistrarComponent } from './components/cliente-registrar/cliente-registrar.component';
import { RestauranteRegistrarComponent } from './components/restaurante-registrar/restaurante-registrar.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'registrarClientes', component: ClienteRegistrarComponent }, 
  { path: 'registrarRestaurante', component: RestauranteRegistrarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
