import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { StructureService } from '../../../services/structure.service';
import { SidebarItemModel } from '../sidebar/sidebar-shared/sidebar-item.model';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit{
  @Output() sidebarName: EventEmitter<string> = new EventEmitter<string>();
  @Output() themeColor: EventEmitter<string> = new EventEmitter<string>();

  location: any;
  path = [];

  constructor(
    private _location: Location,
    private structureService: StructureService
  ) {}

  ngOnInit() {
    this.location = this._location.prepareExternalUrl(this._location.path()); 
    this.path = this.location.split('/').splice(1);
  }

  getSidebarName(event) {
    this.sidebarName.emit(event);
  }

  getThemeColor(event) {
    this.themeColor.emit(event);
  }
}
