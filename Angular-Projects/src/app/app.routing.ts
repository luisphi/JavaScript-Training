//IMPORTAR LOS MODULOS DE ROUTER DE ANGULAR
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes realizados
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component'

// Array de rutas
const appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'zapatillas', component: ZapatillasComponent },
    { path: 'videojuego', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    // PARA RECIBIR PARAMETROS EN LA URL
    { path: 'cursos/:nombre', component: CursosComponent },
    { path: 'cursos/:nombre/:apellido', component: CursosComponent },
    //
    // Módulo para recibir datos desde WS externo
    { path: 'externo', component: ExternoComponent},
    //
    { path: 'contacto', component: ContactoComponent},
    { path: '**', component: HomeComponent }
    
];

// Exportar el módulo 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);