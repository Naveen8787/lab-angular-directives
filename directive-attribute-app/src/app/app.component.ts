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
  
  //here showColor is boolean 
  //if it is true it shows cyan color and brown color as defined by user
  //if it is false it shows black color 
  showColor: any = true;

  constructor() { }

  public changeColor(): void {
    this.showColor = this.showColor;
  }

}