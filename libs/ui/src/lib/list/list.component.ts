import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'front-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items ;

  constructor() { }

  ngOnInit(): void {
  }

}
