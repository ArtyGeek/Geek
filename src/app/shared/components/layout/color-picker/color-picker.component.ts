import { Component, Output, EventEmitter } from '@angular/core';
import { ColorItem } from './color-item';

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  showColorPicker: boolean = false;

  @Output() headerColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() firstSidebarColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() secondSidebarColor: EventEmitter<string> = new EventEmitter<string>();

  colorsElements = [
    {
      name: 'Header',
      id: "header",
      active: true,
      colors: [
        {
          color: 'fff',
          active: true,
          border: true
        },
        {
          color: '227ce8',
          active: false,
        },
        {
          color: 'd0011b',
          active: false,
        },
        {
          color: '42b69c',
          active: false,
        },
        {
          color: '333',
          active: false,
        },
        {
          color: '780bd7',
          active: false,
        },
        {
          color: 'fea20c',
          active: false,
        },
        {
          color: '71c613',
          active: false,
        },
        {
          color: 'd15ae9',
          active: false,
        },
        {
          color: '8b572a',
          active: false,
        }
      ]
    },
    {
      name: 'Sidebar 1',
      id: "sidebar-1",
      active: false,
      colors: [
        {
          color: 'fff',
          active: false,
          border: true
        },
        {
          color: '227ce8',
          active: true,
        },
        {
          color: 'd0011b',
          active: false,
        },
        {
          color: '42b69c',
          active: false,
        },
        {
          color: '333',
          active: false,
        },
        {
          color: '780bd7',
          active: false,
        },
        {
          color: 'fea20c',
          active: false,
        },
        {
          color: '71c613',
          active: false,
        },
        {
          color: 'd15ae9',
          active: false,
        },
        {
          color: '8b572a',
          active: false,
        }
      ]
    },
    {
      name: 'Sidebar 2',
      id: 'sidebar-2',
      active: false,
      colors: [
        {
          color: 'fff',
          active: true,
          border: true
        },
        {
          color: '227ce8',
          active: false,
        },
        {
          color: 'd0011b',
          active: false,
        },
        {
          color: '42b69c',
          active: false,
        },
        {
          color: '333',
          active: false,
        },
        {
          color: '780bd7',
          active: false,
        },
        {
          color: 'fea20c',
          active: false,
        },
        {
          color: '71c613',
          active: false,
        },
        {
          color: 'd15ae9',
          active: false,
        },
        {
          color: '8b572a',
          active: false,
        }
      ]
    }
  ];

  activeItem = this.colorsElements[0];
  showColor: boolean = true;

  constructor() { }

  showPicker() {
    this.showColorPicker = !this.showColorPicker;
  }

  changeActiveTab(index: number) {
    this.colorsElements.forEach(function(item) {
      item.active = false;
    });

    this.activeItem = this.colorsElements[index];
    this.activeItem.active = true;
  }

  changeColor(item: any, index: number) {
    let colors = item.colors;
    switch (item.id) {
      case 'header': 
        this.headerColor.emit(colors[index].color);
        break;
      case 'sidebar-1': 
        this.firstSidebarColor.emit(colors[index].color);
        break;
      case 'sidebar-2': 
        this.secondSidebarColor.emit(colors[index].color);
        break;
    }

    item.colors.forEach(function(itemColor) {
      itemColor.active = false;
    });

    colors[index].active = true;
  }

  setActiveColor(name: string, color: string) {
    name = color;
  }

  showColors(i:number) {
    if(i < 5) {
      return true;
    } else {
      return false;
    }
  }
}
