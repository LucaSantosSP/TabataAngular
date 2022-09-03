import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 0;
  set = 0;
  cycle = 1;
  title = 'Tabata';
  mudaCor = 1;

  timer = setInterval(() => {
    this.counter++;
    this.title = 'Tabata: ' + this.counter;

    if (this.counter <= 19 && this.set == 0) {
    } else if (this.counter >= 19 && this.set == 0) {
      this.set = 1;
      this.counter = 0;
      this.mudaCor = 1;
    } else if (this.counter <= 10 && this.set == 1) {
      this.title = 'DESCANSO';
      this.mudaCor = 2;
    } else if (this.cycle <= 7) {
      this.set = 0;
      this.counter = 0;
      this.cycle++;
      this.mudaCor = 1;
    } else if (this.cycle >= 8) {
      this.title = 'ACABOU!';
      this.mudaCor = 3;
    }
  }, 100);
}
