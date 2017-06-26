import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'grid-action',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    templateUrl: './grid-action.component.html',
    styleUrls: ['./grid-action.component.scss']
})

export class GridActionComponent implements AfterViewInit{
  @Input() dropdownItems: any;
  @Input() toggleColumns: boolean;
  @ViewChild('dropdownlist') dropdownList: ElementRef; 

  private isDropdownOpen: boolean = true;
  private dropDownElement: HTMLElement = null;
  private actionElem;

  constructor(el: ElementRef) {
     this.actionElem = el;
  }
  ngAfterViewInit() {}

  openDropdown(event) {
    this.showDropdown();
    this.calcDropdownPosition(event);
  }

  private showDropdown() {
    if(this.dropDownElement) {

      if (this.isDropdownOpen) {
        this.dropDownElement.classList.remove('open');
        this.isDropdownOpen = false;
      } else {
        this.dropDownElement.classList.add('open');
        this.isDropdownOpen = true;
      }
    } else {
      this.dropDownElement = document.createElement('div');
      this.dropDownElement.className = 'grid-dropdown open';
      this.dropDownElement.appendChild(this.dropdownList.nativeElement);
      this.dropdownList.nativeElement.classList.remove('none');
      document.body.appendChild(this.dropDownElement);
    }
  }

  private calcDropdownPosition(event: any) {
    if (!this.dropDownElement) {
      return false;
    }

    this.dropDownElement.style.top = (event.pageY + 20) + 'px';
    this.dropDownElement.style.left = (event.pageX - 100) + 'px';
  }

  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.actionElem.nativeElement || clickedComponent === this.dropDownElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
     } while (clickedComponent);
    
    if (!inside && this.dropDownElement){
      this.dropDownElement.classList.remove('open');
    }
  }

}