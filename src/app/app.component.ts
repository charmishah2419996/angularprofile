import { Component } from '@angular/core';


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
  contact : '8200772753'
},{
  name : 'Charvi',
  designation : 'back-end developer',
  email : 'Charvi@gmail.com',
  contact : '8200772753'
}];

}
