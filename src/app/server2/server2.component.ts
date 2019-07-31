import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.scss']
})
export class Server2Component implements OnInit {

@Input() employee:any;
values:any;


  constructor(
     private router: Router
    ) {}

  myFunction(employee) {
    this.values = {
     comname:employee.companyname,
     add:employee.address
    }
    this.router.navigate(['/moreinfo']);
    
  }
ngOnInit() {
    this.values = {
      comname:'',
      add:''
     }
  }

}
