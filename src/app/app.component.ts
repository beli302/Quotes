import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote = [
    {id:1, name:'There is no charm equal to tenderness of heart.'},
    {id:2,name:'Learning never exhausts the mind.'},
    {id:3,name:'Let us sacrifice our today so that our children can have a better tomorrow.'},
    {id:4,name:'There is nothing permanent except change.'},
    {id:5,name:'But man is not made for defeat. A man can be destroyed but not defeated.'},
  ];
}
