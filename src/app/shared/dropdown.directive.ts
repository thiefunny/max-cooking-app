import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  //   @HostBinding('class') display: string;
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
    //     // this.display !== 'open' ? (this.display = 'open') : (this.display = '');
  }

  // constructor(private element: ElementRef) {}

  ngOnInit() {
    //   this.element.nativeElement.classList = 'open';
  }
}
