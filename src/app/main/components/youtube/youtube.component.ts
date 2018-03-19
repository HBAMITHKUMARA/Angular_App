import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  url = 'https://www.youtube.com/embed/R4xai30FPIk';

  constructor() { }

  ngOnInit() {
  }

}
