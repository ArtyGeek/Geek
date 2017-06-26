import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-layout-popup-link',
    styleUrls: ['./popup-link.component.scss'],
    templateUrl: './popup-link.component.html',
    providers: []
})

export class PopupLinkComponent implements OnInit{
    @Input() list: any;
    @Input() id: string;
    
    constructor() {}

    ngOnInit() {
      // console.log(this.id);
    }

    preventAction(event) {
        if (event.target.classList.contains('disabled')) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
}
