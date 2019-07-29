import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.scss']
})
export class Server2Component implements OnInit {

  @Input() employee:any;
 

  constructor() { }

  ngOnInit() {

  }

}
