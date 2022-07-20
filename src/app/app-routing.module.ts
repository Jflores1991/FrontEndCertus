import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarpersonaComponent } from './listarpersona/listarpersona.component';
import { RegistrarpersonaComponent } from './registrarpersona/registrarpersona.component';

const routes: Routes = [
  {path: 'personas' ,component:ListarpersonaComponent},
  {path: '', redirectTo: 'personas', pathMatch: 'full'},
  {path: 'registropersona' , component:RegistrarpersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
