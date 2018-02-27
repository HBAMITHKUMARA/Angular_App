import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  value = 100;
  constructor() { }

  ngOnInit() {
  }

  people: any[] = [
      {
        "name": "Douglas  Pace",
        "country": 'UK'
      },
      {
        "name": "Mcleod  Mueller",
        "country": 'USA'
      },
      {
        "name": "Day  Meyers",
        "country": 'HK'
      },
      {
        "name": "Aguirre  Ellis",
        "country": 'UK'
      },
      {
        "name": "Cook  Tyson",
        "country": 'USA'
      }
    ];

}
