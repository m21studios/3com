import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatusers',
  templateUrl: './chatusers.page.html',
  styleUrls: ['./chatusers.page.scss'],
})
export class ChatusersPage implements OnInit {

  users: any;
  constructor() { }

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles(){
    this.users = [
      {
        id:'0',
        image:'../../assets/profiles/01.jpg',
        name:'Olivia Davis',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'1',
        image:'../../assets/profiles/02.jpg',
        name:'Michael Brown',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'2',
        image:'../../assets/profiles/03.jpg',
        name:'Ava Clark',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'3',
        image:'../../assets/profiles/04.jpg',
        name:'Sophia Anderson',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'4',
        image:'../../assets/profiles/05.jpg',
        name:'Daniel Lee',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'5',
        image:'../../assets/profiles/06.jpg',
        name:'Charlotte Turner',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'6',
        image:'../../assets/profiles/07.jpg',
        name:'Matthew Harris',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'7',
        image:'../../assets/profiles/08.jpg',
        name:'Daisy Smith',
        msg:'Lorem ipsum dolor sit.'
      },
      {
        id:'8',
        image:'../../assets/profiles/09.jpg',
        name:'Lily Harris',
        msg:'Lorem ipsum dolor sit.'
      },
    ]

  }

}
