import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.scss']
})
export class MoreinfoComponent implements OnInit {

 
  @Input() values:any;

  constructor() { }

  ngOnInit() {
  }

}
