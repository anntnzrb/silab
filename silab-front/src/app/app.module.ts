import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { AcercaComponent } from './comp/acerca/acerca.component';
import { NavbarComponent } from './comp/common/navbar/navbar.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FiltroComponent } from './comp/filtro/filtro.component';
import { InicioComponent } from './comp/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    NavbarComponent,
    FiltroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
