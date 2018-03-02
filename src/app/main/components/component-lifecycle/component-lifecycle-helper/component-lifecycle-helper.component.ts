import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-component-lifecycle-helper',
  templateUrl: './component-lifecycle-helper.component.html',
  styleUrls: ['./component-lifecycle-helper.component.css']
})
export class ComponentLifecycleHelperComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
 {
  @Input() changeData: string;
  @ViewChild('dataReference') dataReference: ElementRef;
  @ContentChild('contentReference') contentReference: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('dataReference @ngOnInit:  ', this.dataReference.nativeElement.textContent);
    console.log('contentReference @ngOnInit:  ', this.contentReference.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('contentReference @ngAfterContentInit:  ', this.contentReference.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('dataReference @ngOnInit:  ', this.dataReference.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }


  onClick() {
    console.log('onClick called!');
  }

}
