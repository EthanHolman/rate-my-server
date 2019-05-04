import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rate-my-server';
  currentStep = 1;

  nextStep() {
    this.currentStep += 1;
  }

  backToStart() {
    this.currentStep = 1;
  }
}
