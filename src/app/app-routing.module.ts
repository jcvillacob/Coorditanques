import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './components/login/login.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HomeClienteComponent } from './components/clientes/home-cliente/home-cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pqrs', component: PqrsComponent },
  { path: 'sobrenosotros', component: SobreNosotrosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'clientes', component: ClientesComponent, children: [{ path: '', component: HomeClienteComponent}] },
  { path: 'empleados', component: EmpleadosComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
