import { Directive, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostbinding2propertyHighlight]'
})
export class Hostbinding2propertyHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highLightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
