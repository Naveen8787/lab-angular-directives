import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Info: boolean = false;
  caption: string = 'Show Text';

  constructor() { }

  public changeData(): void {
    this.Info = !this.Info;
    if (this.Info) {
      this.caption = 'Hide Text';
    } else {
      this.caption = 'Show Text';
    }
  }
}