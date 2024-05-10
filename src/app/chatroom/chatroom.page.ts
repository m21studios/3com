import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {

  username: any;
  image: any;
  msgs: any = [];

  constructor(
    private data: ActivatedRoute
  ) {
   
   }

  ngOnInit() {
    //this.username = this.data.snapshot.paramMap.get('username');
    //this.image = this.data.snapshot.paramMap.get('image');
    this.loadMessages();
  }

  loadMessages(){
    this.msgs = [
      {
        idclass:'chatleft',
        avatar:'../../assets/profiles/02.jpg',
        msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, reprehenderit!'
      },
      {
        idclass:'chatright',
        avatar:'../../assets/profiles/04.jpg',
        msg:'Lorem ipsum dolor sit amet consectetur '
      },
      {
        idclass:'chatright',
        avatar:'../../assets/profiles/04.jpg',
        msg:'Lorem ipsum consectetur adipisicing elit. Sunt, reprehenderit!'
      },
      {
        idclass:'chatleft',
        avatar:'../../assets/profiles/02.jpg',
        msg:'Lorem ipsum dolor sit amet consectetur'
      },
      {
        idclass:'chatright',
        avatar:'../../assets/profiles/04.jpg',
        msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt.'
      },
      {
        idclass:'chatleft',
        avatar:'../../assets/profiles/02.jpg',
        msg:'adipisicing elit. Sunt'
      },
      {
        idclass:'chatright',
        avatar:'../../assets/profiles/04.jpg',
        msg:'Sunt'
      },
    ]
  }

}
