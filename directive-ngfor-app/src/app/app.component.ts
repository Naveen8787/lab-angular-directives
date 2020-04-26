import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  MobilesList: Array<string> = [
    'Iphone',
    'Galaxy 9.0',
    'BlackBerrry 10Z',
    'ASUS ROG PHONE-II',
    'IQQ-3',
    'Lenovo',
    'Moto One Power'
  ]
}