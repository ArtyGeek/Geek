import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StructureService } from '../../../../services/structure.service';
import { SidebarItemModel } from '../sidebar-shared/sidebar-item.model';
import { SidebarService } from '../sidebar-shared/sidebar.service';
import { Item } from '../sidebar-shared/item';


@Component({
    selector: 'app-two-level-sidebar',
    templateUrl: './two-level-sidebar.component.html',
    styleUrls: ['./two-level-sidebar.component.scss']
})
export class TwoLevelSidebarComponent implements OnInit {
    @Input() items: SidebarItemModel[];
    @Output() minSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
    level = 'two';
    openSidebar = true;
    activeItem: Item;

    constructor(
        public _sidebarService: SidebarService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
      this._sidebarService.updateSidebar(this.items, 0);
      this.activeItem = this._sidebarService.getActiveItem(this.items, 0);
    }

    updateSidebar(index: number) {
      if (index === this._sidebarService.activeIndex && this.openSidebar === true) {
        this.openSidebar = false;
        this.activeItem.active = false;
      } else {
        this.openSidebar = true;
        this._sidebarService.updateSidebar(this.items, index);
        this.activeItem = this._sidebarService.getActiveItem(this.items, index);
      }
      this.minSidebar.emit(!this.openSidebar);
    }
}
