import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote = [
    {id:1, name:'There is no charm equal to tenderness of heart.',description:'The heart desire'},
    {id:2,name:'Learning never exhausts the mind.',description:'The control of mind'},
    {id:3,name:'Let us sacrifice our today so that our children can have a better tomorrow.',description:'Our todays actions determines our future'},
    {id:4,name:'There is nothing permanent except change.',description:'Change can only be made when one accepts to change'},
    {id:5,name:'But man is not made for defeat. A man can be destroyed but not defeated.',description:'Once destroy one can sill rise up'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
