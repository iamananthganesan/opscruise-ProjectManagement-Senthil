import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// interface City {
//   name: string,
//   code: string
// }

export class AppComponent {
  
  cities:any;

  selectedCityCode:any;

  constructor() {
     
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  this.selectedCityCode = 'RM'
    }
  }
