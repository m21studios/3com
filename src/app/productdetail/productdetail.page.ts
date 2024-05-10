import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  product: any ={
    image:'',
    name:'',
    price:''
  }

  reviews: any = [];

  constructor(
    private activateroute: ActivatedRoute,
  ) { 
    this.product.image = this.activateroute.snapshot.paramMap.get("image");
    this.product.name = this.activateroute.snapshot.paramMap.get("name");
    this.product.price = this.activateroute.snapshot.paramMap.get("price");
    console.log(this.product);
  }

  ngOnInit() {
    this.listReviews();
  }

  listReviews(){  
    this.reviews = [
      {
        id:'1',
        avatar:'../../assets/profiles/04.jpg',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, fugiat?',
        starts:'5'
      },
      {
        id:'2',
        avatar:'../../assets/profiles/06.jpg',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, fugiat?',
        starts:'3'
      },
      {
        id:'3',
        avatar:'../../assets/profiles/08.jpg',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, fugiat? consectetur adipisicing elit',
        starts:'9'
      },
      {
        id:'4',
        avatar:'../../assets/profiles/03.jpg',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        starts:'4'
      }
    ]
  }


}
