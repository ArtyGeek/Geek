import { Component, TemplateRef, ViewChild, Input, Pipe, PipeTransform, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'zion-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  @Input() selectAllCheckbox: boolean = false;
  @Input() tableName: string;
  @Input() limit: number;
  @Input() headerHeight: number = 0;
  @Input() footerHeight: number = 0;
  @Input() rowHeight: number;

  @ViewChild('maintable') table: any;
  @ViewChild('gridsearch') search: any;

  editing = {};
  rows = [];
  temp = [];
  selected = [];
  expanded: any = {};
  timeout: any;
  openSearch: boolean = false;
  initialHeight: number;
  startScroll: boolean = false;
  openCollapse: boolean = false;

  editIndex: number;
  editCell: string;


  columns: any[] = [
    { 
      name: 'Name',
      hidden: false 
    },
    { 
      name: 'Gender',
      hidden: false 
    },
    { 
      name: 'Company',
      hidden: false
    },
    { 
      name: 'Age',
      hidden: false
    }
  ];

  dropdownItems = [
    {
      title: 'dd-title',
      icon: 'fa-cog',
      action: function() {
        console.log('action 1!');
      }
    },
    {
      title: 'dd-title2',
      icon: 'fa-usd',
      action: function() {
        console.log('action 2!');
      }
    }
  ];

  dropdownItemsToggling = [
    {
      name: 'Name',
      action: this.isChecked.bind(this),
      toggle: this.toggle.bind(this)
    },
    {
      name: 'Company',
      action: this.isChecked.bind(this),
      toggle: this.toggle.bind(this)
    },
    {
      name: 'Gender',
      action: this.isChecked.bind(this),
      toggle: this.toggle.bind(this)
    },
    {
      name: 'Age',
      action: this.isChecked.bind(this),
      toggle: this.toggle.bind(this)
    }
  ];

  
  constructor(private sanitizer: DomSanitizer) {
    this.fetch((data) => {
      this.temp = [...data];

      this.rows = data;
    });
  }

  ngOnInit() {
    this.initialHeight = this.limit * this.rowHeight + this.footerHeight + this.headerHeight;
    this.table.element.style.height = this.initialHeight + 'px';
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `./src/grid-company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  // select rows
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  // edit values in cells
  updateOnEnter(event, cell, cellValue, row) {
    if(event.keyCode === 13) {
      this.updateValue(event, cell, cellValue, row);
    }
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }

  headerClick(callback: Function, event: any) {
    // this.editing = {};
    console.log(callback());
    console.log(this.rows[0]);
  }

  startEditing(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = true;
    this.editIndex = row.$$index;
    this.editCell = cell;
  }

  //sorting 
  onSort(event) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);
    // this.loading = true;
    // emulate a server request with a timeout
    // setTimeout(() => {
      const rows = [...this.rows];
      // this is only for demo purposes, normally
      // your server would return the result for
      // you and you would just set the rows prop
      const sort = event.sorts[0];
      rows.sort((a, b) => {
        return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
      });

      this.rows = rows;
      // this.loading = false;
    // }, 1000);
  }

  // filtering data
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || d.gender.toLowerCase().indexOf(val) !== -1 
              || d.company.toLowerCase().indexOf(val) !== -1 || Number(d.age).toString().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }

  // expandable row
  toggleExpandRow(event, row) {
    event.preventDefault();
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
      this.startScroll = true;
    }, 100);

    this.startScroll = false;
  }

  showSearchField() {
    if (this.search.nativeElement.value) {
      return false;
    }
    this.openSearch = !this.openSearch;
    if (this.openSearch) this.search.nativeElement.focus();
  }

  showCollapse() {
    this.openCollapse = !this.openCollapse;
  }

  //toggling columns 
  toggle(col) {
    const isChecked = this.isChecked(col);

    this.columns.filter(c => { 
      if(c.name === col.name) {
        if (isChecked) {
          c.hidden = true;
        } else {
          c.hidden = false;
        }
      } 
    });
  }

  isChecked(col) {
    return this.columns.find(c => {
      return (c.name === col.name) && (!c.hidden);
    });
  }

  // row's actions
  removeRow(row) {
    this.rows.splice(row.$$index, 1);
  }

  addNewRow() {
    let newRow = {
      name: 'NAME',
      gender: 'male',
      company: 'COMPANY',
      age: 10
    };

    this.rows.push(newRow);
    this.temp = this.rows;
  }
}