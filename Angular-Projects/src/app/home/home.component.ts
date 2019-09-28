import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private identificado: boolean;
  private _identificado2: boolean;

  constructor() { 
    this.identificado = false;
    this._identificado2 = false;
  }

  ngOnInit() {
  }

  setIdentificado() {
    this.identificado = true;
  }

  setIdentificado2() {
    this._identificado2 = true;
  }

}
