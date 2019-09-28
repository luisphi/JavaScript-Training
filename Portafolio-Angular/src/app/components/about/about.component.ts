import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public mail:string;

  constructor() {
    this.title = "Luis Paz y Miño";
    this.subtitle = "Developer"; 
    this.mail = "luis@gmail.com";
   }

  ngOnInit() {
  }

}
