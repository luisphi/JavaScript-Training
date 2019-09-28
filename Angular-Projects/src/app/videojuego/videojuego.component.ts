import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent {
    private titulo:string;
    private listado:string;

    constructor(){
        this.titulo = 'Componente de Video Juegos Luis';
        this.listado = 'Listado de los juegos más populares';
    }
}