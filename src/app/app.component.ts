import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  person=[{
  name : 'Charmi',
  designation : 'Front-end developer',
  email : 'Charmi@gmail.com',
  contact : '8200772753',
  companyname:'funstay',
  address:'HSR',
  salary: ''
},{
  name : 'Charvi',
  designation : 'back-end developer',
  email : 'Charvi@gmail.com',
  contact : '8200772753',
  companyname:'riversand',
  address:'HSR2',
  salary:''
}];

profileadd(profile) {
  console.log(profile);
  this.person[0].salary = profile.salary;
  this.person.push(profile);
  
}




}
