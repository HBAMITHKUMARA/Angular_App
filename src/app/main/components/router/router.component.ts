import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['router1']);
    console.log('button clicked!');
  }

  onReload() {
    this.router.navigate(['router']);
    console.log('button clicked!');
  }

  onReload1() {
    this.router.navigate(['/router']);
    console.log('button clicked!');
  }

  onReload2() {
    this.router.navigate(['./router']);
    console.log('button clicked!');
  }

  onReload6() {
    this.router.navigate(['router'], {relativeTo: this.route});
    console.log('button clicked!  ' + this.route);
  }

  onReload7() {
    this.router.navigate(['/router'], {relativeTo: this.route});
    console.log('button clicked  ' + this.route);
  }

  onReload8() {
    this.router.navigate(['./router'], {relativeTo: this.route});
    console.log('button clicked  ' + this.route);
  }

}
