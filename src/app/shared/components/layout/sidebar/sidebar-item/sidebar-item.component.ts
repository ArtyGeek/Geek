import { SidebarItemModel } from '../sidebar-shared/sidebar-item.model';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { StructureService } from '../../../../services/structure.service';
import { OneLevelSidebarComponent } from '../one-level-sidebar/one-level-sidebar.component';
import { TwoLevelSidebarComponent } from '../two-level-sidebar/two-level-sidebar.component';


@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html',
    styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() activeItem: object;
  @Input() level: string;

  constructor() { }

  showData() {
    console.log(this.level);
  }

}