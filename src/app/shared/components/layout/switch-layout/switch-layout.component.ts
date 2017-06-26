import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-switch-layout',
    templateUrl: './switch-layout.component.html',
    styleUrls: ['./switch-layout.component.scss'],
})
export class SwitchLayoutComponent {
  showSwitchLayout: boolean = false;
  @Output() sidebarName: EventEmitter<string> = new EventEmitter<string>();
  sidebarItems = [
    {
      num: 'one',
      name: 'One-level sidebar',
      active: true
    },
    {
      num: 'two',
      name: 'Two-level sidebar',
      active: false
    }
  ];

  constructor() { }
  
  changeSidebar(i: number) {
    if( this.sidebarItems[i].active === true) { return;}
    
    this.sidebarItems.forEach(function(item){
      item.active = false;
    });
    this.sidebarItems[i].active = true;
    this.sidebarName.emit(this.sidebarItems[i].num);
    this.showSwitch();
  }

  showSwitch() {
    this.showSwitchLayout = !this.showSwitchLayout;
  }
}
