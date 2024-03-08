import { Component, Input } from '@angular/core';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() userDetails:Users[]=[]


}

