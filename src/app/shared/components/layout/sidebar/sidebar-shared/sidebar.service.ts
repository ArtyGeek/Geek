import { Injectable } from '@angular/core';
import { StructureService } from '../../../../services/structure.service';
import { SidebarItemModel } from './sidebar-item.model';
import { Observable } from 'rxjs/Observable';
import { Item } from '../sidebar-shared/item';

@Injectable()
export class SidebarService {
  private _activeItem: Item;
  private prevItem: Item;
  public activeIndex: number;

  constructor () {}

  getActiveItem(array: Array<any>, index: number) {
    this._activeItem = array[index];
    this._activeItem.active = true;
    return this._activeItem;
  }

  updateSidebar(array: Array<any>, index: number) {
    this.prevItem = this._activeItem;
    this.prevItem.active = false;
    this.activeIndex = index;
    this.getActiveItem(array, index);
  }
}
