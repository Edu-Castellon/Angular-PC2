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
    {title: 'First Slide', short: 'First Slide Short', src: "../../assets/edu.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../assets/victor.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/yul.jpg"},
    {title: 'Fourth Slide', short: 'Third Slide Short', src: "../../assets/alex.jpg"}
    
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

}
