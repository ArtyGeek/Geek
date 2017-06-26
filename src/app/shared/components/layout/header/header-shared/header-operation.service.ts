import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class HeaderOperationService {
    private _dropdownItems = {
        'profile': () => {
            return 2 + 2;
        },
        'signout': () => {
            this._router.navigateByUrl('/login');
        }
    };
    constructor(private _router: Router) { }

    getDropdownItem(): string[] {
        return [
            'profile',
            'signout'
        ];
    }
    getItemHandler(str) {
        return this._dropdownItems[str];
    }



}
