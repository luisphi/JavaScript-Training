import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  private usuario: Usuario;

  constructor() { 
    this.usuario = new Usuario('','','','');
  }

  ngOnInit() {
  }

  onSubmit(form) {    
    console.log(this.usuario);
    form.reset();
  }

}
