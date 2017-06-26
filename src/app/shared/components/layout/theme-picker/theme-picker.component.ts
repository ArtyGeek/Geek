import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'zion-theme-picker',
    templateUrl: './theme-picker.component.html',
    styleUrls: ['./theme-picker.component.scss'],
})

export class ThemePickerComponent {
  @ViewChild('themepicker') themeContainer: ElementRef;

  @Output() sidebarName: EventEmitter<string> = new EventEmitter<string>();
  @Output() themeColor: EventEmitter<string> = new EventEmitter<string>();

  private container: HTMLElement = null;
  private isPickerOpen: boolean = false;

  private sidebarLayouts = [
    {
      name: 'one',
      active: true,
      src: './assets/images/one-s.png'
    },
    {
      name: 'two',
      active: false,
      src: './assets/images/two-s.png'
    }
  ];

  private colorThemes = [
    {
      name: 'pink',
      active: true,
      src: './assets/images/pink.png'
    },
    {
      name: 'orange',
      active: false,
      src: './assets/images/orange.png'
    },
    {
      name: 'dark',
      active: false,
      src: './assets/images/dark.png'
    }
  ];

  showColorPicker: boolean = false;

  constructor() {}

  ngAfterViewInit() {
    document.body.appendChild(this.themeContainer.nativeElement);
  }

  private showPicker() {
    this.isPickerOpen = !this.isPickerOpen;
  }

  private chooseLayout(item: any, index: number) {
     this.changeActiveTab(this.sidebarLayouts, index);
    this.sidebarName.emit(item.name);
  }

  private chooseColorTheme(item: any, index: number) {
    this.changeActiveTab(this.colorThemes, index);
    this.themeColor.emit(item.name);
  }

  private changeActiveTab(array: any, index: number) {
    array.forEach(function(item) {
      item.active = false;
    });

    array[index].active = true;
  }
}