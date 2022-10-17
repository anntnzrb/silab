import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './comp/acerca/acerca.component';
import { FiltroComponent } from './comp/filtro/filtro.component';
import { InicioComponent } from './comp/inicio/inicio.component';

const routes: Routes = [
  {
    path: "acerca",
    component: AcercaComponent
  },
  {
    path: "filtro",
    component: FiltroComponent
  },
  {
    path: "**",
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
