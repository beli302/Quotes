import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuotes = new Quote('', '', '', new Date());
  @Output() addQuotes = new EventEmitter<Quote>();
  submitQuotes() {
    let quoteLength = this.newQuotes.name.length;
    if (quoteLength < 6) {
      alert("Hello!kindly write your quote");
    } else {
      this.addQuotes.emit(this.newQuotes);
    }
  }
  constructor() { }
  ngOnInit() {
  }
}