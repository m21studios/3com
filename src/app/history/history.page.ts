import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  isEmpty: boolean = false;
  isActive: boolean = false;
  PopularInStore: any = {};

  constructor() { }

  ngOnInit() {
    this.isEmpty = false;
    this.isActive = true;

    this.PopularItems();
  }

  public PopularItems(){
    this.PopularInStore = [
      {
        id:1,
        name:'Oranges',
        image:'../../assets/oranges.jpg',
        category:'Groceries and Provisions',
        price:10
      },
      {
        id:3,
        name:'Apricots',
        image:'../../assets/apricots.jpg',
        category:'Groceries and Provisions',
        price:15
      },
      {
        id:4,
        name:'living room furniture',
        image:'../../assets/living.jpg',
        category:'Home and Decoration',
        price:125
      }
    ]
  }

}
