import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cardContents: Array<any> = [
    {titleCard: 'Featured 1', contentTitle: 'Special title treatment 1', content: 'With supporting text below as a natural lead-in to additional content 1.'},
    {titleCard: 'Featured 2', contentTitle: 'Special title treatment 2', content: 'With supporting text below as a natural lead-in to additional content 2.'},
    {titleCard: 'Featured 3', contentTitle: 'Special title treatment 3', content: 'With supporting text below as a natural lead-in to additional content 3.'},
    {titleCard: 'Featured 4', contentTitle: 'Special title treatment 4', content: 'With supporting text below as a natural lead-in to additional content 4.'},
    {titleCard: 'Featured 5', contentTitle: 'Special title treatment 5', content: 'With supporting text below as a natural lead-in to additional content 5.'},
  ]
  title = 'angular-project';
}
