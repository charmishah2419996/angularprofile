import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.scss']
})
export class Server2Component implements OnInit {

  @Input() employee:any;
  values:any;


  myFunction(employee) {
   
    this.values = {
     comname:employee.companyname,
     add:employee.address
    }
    
  }

 

  constructor() { }

  ngOnInit() {
    this.values = {
      comname:'',
      add:''
     }
  }

}
