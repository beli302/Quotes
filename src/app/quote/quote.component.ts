import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote( 'There is no charm equal to tenderness of heart.', 'Jane Austen','habiba',new Date(2020,1,2)),
    new Quote('Learning never exhausts the mind.','By Leonardo da Vinci','Linda',new Date(2020,1,4)),
    new Quote('Let us sacrifice our today so that our children can have a better tomorrow.', 'By Abdul Kalam','Perris',new Date(2020,1,6)),
    new Quote('There is nothing permanent except change.', 'By Heraclitus','Tariq',new Date(2020,1,8)),
    new Quote('But man is not made for defeat. A man can be destroyed but not defeated.','By Ernest Hemingway','Caroline',new Date(2020,1,11)),
  ];
  
  mostLikedQuote: string;
  mostLikedAuthor: string;
  mostLikedPoster : string;
  mostVotes = 0;
  deleteQuote(deleteit: any, index: any) {
    if (deleteit) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
    }
  }
}
  toogleDetails(index: any) {
    this.quotes[index].showDescription = !
      this.quotes[index].showDescription;
  }
  addNewQuotes(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }
  counter1 = 0;
  counter2 = 0;
  upvote(quote) {
    quote.counter1 = quote.counter1 + 1;
  }
  downvote(quote) {
    quote.counter2 = quote.counter2 + 1;
  }
  getMostLikedQuote(){
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].counter1 > this.mostVotes){
        this.mostVotes = this.quotes[i].counter1;
        this.mostLikedPoster = this.quotes[i].name;
        this.mostLikedQuote = this.quotes[i].information;
        this.mostLikedAuthor = this.quotes[i].author;
      }
    }
  }
  constructor() { }
  ngOnInit() {
  }
}