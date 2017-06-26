import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'zion-select',
  styleUrls: ['./zion-select.component.scss'],
  templateUrl: './zion-select.component.html'
})

export class ZionSelectComponent implements AfterViewInit, OnChanges{
  @Input() data: Array<Select2OptionData>;
  @Input() value: string | string[];
  @Input() cssImport: boolean = true;
  @Input() width: string;
  @Input() disabled: boolean = false;
  @Input() dragAndDrop: boolean = false;
  @Input() options: Select2Options;

  @ViewChild('select') public selectDom: any;

  private selectElement: any;
  private dndContainer: any = null;
  private listContainer: any = null;

  constructor() {}

  ngAfterViewInit() {
    this.selectElement = this.selectDom.selector.nativeElement.nextElementSibling;
    this.addDragAndDrop();
    // this.setSelectStyles('single');
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.handleClickOnGroup();
    this.setDragAndDropItem();
  } 

  setSelectStyles(className: string) {
     this.selectElement.classList.add(className);
  }

  
  addDragAndDrop() {
    if(this.dragAndDrop && this.options.multiple) {
      this.dndContainer = this.selectElement.querySelector('.select2-selection__rendered');
      this.dndContainer.setAttribute('dnd-sortable-container', '');
      // dndContainer.setAttribute('[sortableData]', this.data);
      // console.log(this.dndContainer);
    }
  }

  setDragAndDropItem() {
    if(this.dndContainer === null) {
      return false;
    }

    let dndChildren = this.dndContainer.querySelectorAll('.select2-selection__choice');
    for(let i = 0; i < dndChildren.length; i++) {
      if (dndChildren[i].hasAttribute('dnd-sortable')) {
        continue;
      }

      dndChildren[i].setAttribute('dnd-sortable', '');
    }
  }

  onSelectClick() {
    // console.log('click');
    let dropDown = document.querySelector('.select2-results__options');
    let groupTitles = dropDown.querySelectorAll('.select2-results__group');
    // console.log(groupTitles[0].nextSibling);
  }
}
