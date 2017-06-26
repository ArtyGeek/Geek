import { Component, Input } from '@angular/core';
import { HeaderHttpService } from './header-shared/header-http.service';
import { HeaderOperationService } from './header-shared/header-operation.service';

@Component({
    selector: 'app-layout-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
    providers: [HeaderHttpService, HeaderOperationService]
})

export class HeaderComponent {
    @Input() popupItems: any;
    @Input() userInfo: any;
    @Input() notifications: any;

    public dropdownItems: string[];
    public openedPopup: boolean = false;

    constructor(private _operationService: HeaderOperationService) {
        this.dropdownItems = this._operationService.getDropdownItem();
    }

    selectHandler(item) {
        this._operationService.getItemHandler(item)();
    }

    showPopup(event) {
        if(event.target.id !== 'popup-button') {
            return false;
        }
        this.openedPopup = !this.openedPopup;
    }

    closePopup(event) {
        if(event.id !== 'popup-button') {
            this.openedPopup = false;
        }
    }
}
