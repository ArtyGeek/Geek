import { SidebarItemModel } from '../sidebar-shared/sidebar-item.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../sidebar-shared/sidebar.service';
import { Item } from '../sidebar-shared/item';


@Component({
    selector: 'app-one-level-sidebar',
    templateUrl: './one-level-sidebar.component.html',
    styleUrls: ['./one-level-sidebar.component.scss']
})
export class OneLevelSidebarComponent implements OnInit {
    @Input() items: SidebarItemModel[];

    showAllItems: boolean = false;
    level = 'one';
    activeItem: Item;
    activeIndex = 0;

    constructor(
        private _sidebarService: SidebarService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
      this.updateActiveItem();
    }

    updateActiveItem() {
      this.activeItem = this._sidebarService.getActiveItem(this.items, this.activeIndex);
    }

    updateSidebar(index: number) {  
      this.activeIndex = index;
      this._sidebarService.updateSidebar(this.items, index);
      this.updateActiveItem();
    }

    openIcons() {
      this.showAllItems = !this.showAllItems;
    }

}
