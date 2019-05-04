import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-done-page',
  templateUrl: './done-page.component.html',
  styleUrls: ['./done-page.component.scss']
})
export class DonePageComponent implements OnInit {

  @Output() done = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  reviewComplete() {
    this.done.emit();
  }

}
