import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //Para hacer: TWO WAY DATA BINDING
import { routing, appRoutingProviders } from './app.routing'; // Para que funcione el Routing

import { HttpClientModule } from '@angular/common/http'; // PARA QUE FUNCIONE LAS PETICIONES HTTP

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component'

// Carga de Pipes
import { CalculadoraPipe } from '../pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,  // Para que funcione el Routing
    HttpClientModule // Para que funciene las peticiones HTTP
  ],
  providers: [
    appRoutingProviders  // Para que funcione el Routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
