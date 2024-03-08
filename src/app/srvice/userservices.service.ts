import { Injectable } from '@angular/core';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor() { }

  Users:Users []=[
    {
      id:1,
      Name:'Swathi',
      Age:22,
      EmailId:'Swathi@gmail.com',
      Mobile_No:9902540115
    },
    {
      id:2,
      Name:'Jyothi',
      Age:21,
      EmailId:'Jyothi@gmail.com',
      Mobile_No:9686059645
    },
    {
      id:3,
      Name:'Jerusha',
      Age:21,
      EmailId:'Jerusha@gmail.com',
      Mobile_No:8884934933
    },
  ]

  getUserDetails(){
    return this.Users
  }

}
