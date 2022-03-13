import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {

  /*constructor() { }

  ngOnInit(): void {
  }*/

  title = 'EntregaAngular';

  images = [
    {title: 'Eduardo Castellon ', short: 'Lo que busco es aprender desarrollo de aplicaciones, tanto web como de escritorio, así como nuevos lenguajes de programación. Tener la capacidad de desarrollar un proyecto que sea realmente útil para determinadas personas.  Y aprender a organizarse bien cuando se trabaja en equipo. ', src: "../../assets/edu.jpg"},
    {title: 'Victor Cebas', short: ' Procedí de un técnico superior de Desarrollo de Aplicaciones Multiplataformas y me especialicé en el grado para continuar mis estudios y adquirir nuevos conocimientos sobre nuevas técnicas de programación para tener nuevas salidas hacia el mundo laboral.', src: "../../assets/victor.jpg"},
    {title: 'Yul Brynner ', short: 'Aprender diversos lenguajes, además de poder especializarme una tecnología y poder desarrollarme en el ámbito profesional.', src: "../../assets/yul.jpg"},
    {title: 'Alex Tensa', short: ' Aprender nuevos lenguajes de programación para profundizar los conocimientos sobre programación. También aprender el desarrollo de aplicaciones.    ', src: "../../assets/alex.jpg"}
    
  ];
  


  constructor(config: NgbCarouselConfig) {
    config.interval = 2500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}
