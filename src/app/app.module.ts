import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { InicioComponent } from './components/inicio/inicio.component';
import { ClienteRegistrarComponent } from './components/cliente-registrar/cliente-registrar.component';
import { RestauranteRegistrarComponent } from './components/restaurante-registrar/restaurante-registrar.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { WsJeeService } from './services/ws-jee.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClienteRegistrarComponent,
    RestauranteRegistrarComponent,
    CrearReservaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [WsJeeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }