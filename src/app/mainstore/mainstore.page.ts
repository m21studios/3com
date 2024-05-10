import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainstore',
  templateUrl: './mainstore.page.html',
  styleUrls: ['./mainstore.page.scss'],
})
export class MainstorePage implements OnInit {

  categories: any = {};
  PopularInStore: any = {};

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
    this.loadCategories();
    this.PopularItems();
  }

  /*
    Groceries and Provisions
    Electronics and Technology
    Home and Decoration
    Beauty and Personal Care
    Health and Wellness
    Books and Educational Material
    Jewelry and Accessories
  */

  public loadCategories(){
    this.categories = [
      {
        id:1,
        name:'Groceries'
      },
      {
        id:2,
        name:'Beverages'
      },
      {
        id:3,
        name:'Electronics'
      },
      {
        id:4,
        name:'Decoration'
      },
      {
        id:5,
        name:'Personal Care'
      },
      {
        id:6,
        name:'Health'
      },
      {
        id:7,
        name:'Toys and Games'
      },
      {
        id:8,
        name:'Books'
      },
      {
        id:9,
        name:'Pets'
      },
      {
        id:10,
        name:'Jewelry'
      },
      {
        id:11,
        name:'Arts and Crafts'
      },
      {
        id:12,
        name:'Tools'
      },
      {
        id:13,
        name:'Vehicle Accessories'
      },
      {
        id:14,
        name:'Sports'
      },
      {
        id:15,
        name:'Clothing'
      },
    ]
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
        id:2,
        name:'Iphone 15',
        image:'../../assets/iphone.jpg',
        category:'Electronics and Technology',
        price:99
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

  viewProductDetail(image:any, name:any, price:any){
    this.route.navigate(['/productdetail',image,name,price])
  }


  /*
    Groceries and Provisions
    Beverages
    Electronics and Technology
    Clothing and Accessories
    Home and Decoration
    Beauty and Personal Care
    Health and Wellness
    Toys and Games
    Books and Educational Material
    Sports and Outdoors
    Pets
    Jewelry and Accessories
    Arts and Crafts
    Tools and Home Improvement
    Automotive and Vehicle Accessories
  */

}
