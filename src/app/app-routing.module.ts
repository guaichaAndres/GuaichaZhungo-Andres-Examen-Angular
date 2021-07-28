import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClienteRegistrarComponent } from './components/cliente-registrar/cliente-registrar.component';
import { RestauranteRegistrarComponent } from './components/restaurante-registrar/restaurante-registrar.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservasClientesComponent } from './components/listar-reservas-clientes/listar-reservas-clientes.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'registrarClientes', component: ClienteRegistrarComponent }, 
  { path: 'registrarRestaurante', component: RestauranteRegistrarComponent },
  { path: 'crearReserva', component: CrearReservaComponent },
  { path: 'listarReservasClientes', component: ListarReservasClientesComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
