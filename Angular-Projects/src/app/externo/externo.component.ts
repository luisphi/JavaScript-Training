import { Component, OnInit } from '@angular/core';
import { PeticioneService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticioneService]
})
export class ExternoComponent implements OnInit {

  private users: any;
  private userId: any;
  private fecha: Date;

  constructor(
    private _peticiones: PeticioneService
  ) { 
    this.userId = 1;
    this.fecha = new Date();
  }

  ngOnInit() {    
    this.cargaUsuario();
  }

  cargaUsuario() {
    this.users = false;
    return this._peticiones.getUser(this.userId).subscribe(
      result => {
        this.users = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
