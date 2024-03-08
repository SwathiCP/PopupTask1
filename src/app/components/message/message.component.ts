import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/srvice/userservices.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  userDetails:Users[]=[]

  constructor(private users: UserservicesService){

  }
ngOnInit():void{
  this.userDetails = this.users.getUserDetails()
}

  popup: string= "Welcome to registration page"
}
