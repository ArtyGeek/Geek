import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zion-helper',
  styleUrls: ['./helper.component.scss'],
  templateUrl: './helper.component.html'
})

export class HelperComponent implements OnInit{

  @Input() for: string;
  @Input() helperContent: string = '';
  @Input() position: string = 'right'
  @Input() trigger: string = 'hover';
  private _container: any;
  showHelper: boolean = false;
  
  constructor() {}

  ngOnInit() {
    this._container = document.querySelector(this.for);
    if(!this._container.style.position) this._container.style.position = 'relative';

    // if(this.trigger === 'onInit') this.showHelper = true;  
    this.handlers();
  }

  handlers() {
    let _this = this; 

    if(this.trigger === 'click') {
      this._container.addEventListener('click', function(e) {
        e.stopPropagation();
        _this.showHelper = !_this.showHelper;
      });
      // document.body.addEventListener('click', function(){
      //   _this.showHelper = false;
      // });
    }

    if(this.trigger === 'hover') {
      this._container.addEventListener('mouseover', function() {
        _this.showHelper = true;
      });

      this._container.addEventListener('mouseleave', function() {
        _this.showHelper = false;
      });
    }
  }
}