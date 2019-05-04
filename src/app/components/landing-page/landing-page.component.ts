import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @Output() next = new EventEmitter();
  @Input() currentStep;

  constructor() { }

  ngOnInit() {
  }

  nextStep() {
    this.next.emit();
  }

}
