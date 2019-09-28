import { Injectable } from '@angular/core';

import { Zapatilla } from '../models/zapatilla'

//Sirve para inyectar todas las dependencias
@Injectable()
export class ZapatillaService {
    private zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebook',34.56,'classic','blue',true),
            new Zapatilla('Bunky',45.67,'classic1','red',false),
            new Zapatilla('Bunky',15.00,'classic2','yellow',true)
        ];
    }

    getTexto() {
        return 'Hola mundo desde un servicio';
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}