import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote:Quote [] = [
    new Quote(1, 'There is no charm equal to tenderness of heart.', 'Jane Austen',new Date(2020,1,2)),
    new Quote(2,'Learning never exhausts the mind.','The control of mind',new Date(2020,1,4)),
    new Quote(3,'Let us sacrifice our today so that our children can have a better tomorrow.', 'Our todays actions determines our future',new Date(2020,1,6)),
    new Quote(4,'There is nothing permanent except change.', 'Change can only be made when one accepts to change',new Date(2020,1,8)),
    new Quote(5,'But man is not made for defeat. A man can be destroyed but not defeated.', 'Once destroy one can sill rise up',new Date(2020,1,11)),
  ];
}
