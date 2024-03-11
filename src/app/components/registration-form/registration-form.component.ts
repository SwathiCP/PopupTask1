import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  ngOnInit(): void {
  // reading the local storage data
  const localData = localStorage.getItem('signupUsers');
  if(localData != null){
    this.singupUsers = JSON.parse(localData)
  }
  }


  singupUsers: any[] =[];
  singupObg:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  }

  register() {
    this.singupUsers.push(this.singupObg)
    localStorage.setItem('signupUsers', JSON.stringify(this.singupUsers));
    this.singupObg={
      userName:'',
      email:'',
      password:''
    };

   
    }
  login() {

    const ifUserExit = this.singupUsers.find(m=> m.userName == this.loginObj.userName && m.password == this.loginObj.password)
    debugger
    if(ifUserExit != undefined){
      alert('login successfull')
    }
    else{
      alert('Wrong Credentials')
    }
    
    }
}
