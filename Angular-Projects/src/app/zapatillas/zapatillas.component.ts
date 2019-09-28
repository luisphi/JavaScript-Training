import { Component, OnInit} from '@angular/core';
import { Parametros } from '../models/configuracion';
import { Zapatilla } from '../models/zapatilla';

import { ZapatillaService } from '../services/zapatillas.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    private title:string;
    private config;
    private zapatillas: Array<Zapatilla>;
    private marcas: String[] = new Array();
    private color:string;
    private mi_marca:string;

    // SE INYECTA EL SERVICIO EN EL CONSTRUCTOR
    constructor(private _zapatillaService: ZapatillaService){
        this.color = 'yellow';
        this.title = 'Zapatillas' + Parametros.titulo;
        this.config = Parametros;

        // SE MUEVE ESTA DECLARACION HACIA ZAPATILLA.SERVICE
        /*this.zapatillas = [
            new Zapatilla('Reebook',34.56,'classic','blue',true),
            new Zapatilla('Bunky',45.67,'classic1','red',false),
            new Zapatilla('Bunky',15.00,'classic2','yellow',true)
        ]; */
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            this.marcas.push(zapatilla.marca);
        });
        console.log(this.marcas);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    deleteMarca (indice) {
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur() {
        console.log('Se ha realizado el blur');
    }
}