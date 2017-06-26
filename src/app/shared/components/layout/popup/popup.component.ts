import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-layout-popup',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    styleUrls: ['./popup.component.scss'],
    templateUrl: './popup.component.html',
    providers: []
})

export class PopupComponent implements OnInit{
  @Input() openedPopup: boolean = false;
  @Input() popupColor: string;
  @Input() items: any;

  @Output() outsileClick: EventEmitter<any> = new EventEmitter<any>();

  public elementRef;
 
  constructor(myElement: ElementRef) {
     this.elementRef = myElement;
  }

  ngOnInit() {
    // console.log(this.items);
  }

  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
     } while (clickedComponent);
    
    if (!inside){
      this.outsileClick.emit(event.target);
    } 
  }
}
