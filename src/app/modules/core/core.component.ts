import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StructureService } from '../../shared/services/structure.service';
import { SidebarItemModel } from '../../shared/components/layout/sidebar/sidebar-shared/sidebar-item.model';
import { Select2OptionData } from 'ng2-select2';

@Component({
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  private dataUrl = './src/structure.json';
  private popupDataUrl = './src/popup-structure.json';
  
  public items: SidebarItemModel[];
  public popupItems: Array<any>;
  public sidebarMin: boolean = false;
  public sidebarName: string = 'one';

  public userInfo = {
    name: 'Devin Ellis',
    imageLink: './src/assets/images/default-user.png'
  };
  public notifications = [
    {
      name: "messages",
      number: 10
    },
    {
      name: "feedbacks",
      number: 2
    },
    {
      name: "updates",
      number: 5
    }
  ];

  constructor(private _structureService: StructureService) {}

  ngOnInit() {
    this._structureService.getData(this.dataUrl)
      .subscribe(data => {
          this.items = SidebarItemModel.fromJSONArray(data);
      });

    this._structureService.getData(this.popupDataUrl)
      .subscribe(data => {
          this.popupItems = data;
      });
  }

  getSidebarName(name:string):void {
    this.sidebarName = name;
  }

  getThemeColor(event) {
    document.body.className = event + '-theme';
  }

  getSidebarWidth(event: boolean) {
    this.sidebarMin = event;
  }

}
