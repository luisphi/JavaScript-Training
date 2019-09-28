import { Component, OnInit, DoCheck } from '@angular/core';
// PARA CAPTURAR PARAMETROS QUE SE TRAEN DESDE LA URL
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck {
  // OnInit, es un Hook que se ejecuta al iniciar la llamada del componente
  // DoCheck, es un Hook que se ejecuta cada vez que ocurre en cambio en el componente o en la aplicación de angular
  // OnDestroy, es un Hool que se ejecuta cuando el componente es eliminado o no se carga
  private title:string;
  private nombreUrl: string;
  private apellidoUrl: string;

  constructor( //Declaración para tomar parametros desde url
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'Titulo inicial de la plantilla!';       
  }

  ngOnInit() {
    // RECOGER LOS PARAMETROS DESDE URL
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.nombreUrl = params.nombre;
      this.apellidoUrl = params.apellido;
    });

    console.log('Se ejecuta luego de la ejecución del constructor');
  }

  ngDoCheck() {
    console.log('DoCheck, EJECUTADO');
  }

  // Metodo para probar la ejecución del DoCheck
  cambiarTitulo() {
    this.title = 'Nuevo titulo desde metodo';
  }

  //Metodo para redirigir
  redirigir() {
    this._router.navigate(['/zapatillas']);
  }
}
