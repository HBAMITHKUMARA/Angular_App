import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbindingHighlight]'
})
export class HostbindingHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  ngOnInit() { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

}
