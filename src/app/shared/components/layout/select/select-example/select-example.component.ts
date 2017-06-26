import { Component, OnInit, Input } from '@angular/core';
import { Select2OptionData, Select2TemplateFunction } from 'ng2-select2';

@Component({
  selector: 'select-example',
  styleUrls: ['./select-example.component.scss'],
  templateUrl: './select-example.component.html'
})

export class SelectExampleComponent implements OnInit{
  public selectData: Array<Select2OptionData>;
  public selectChildren: Array<Select2OptionData>;
  public selectOptions: any;
  public selectTemplateOptions: any;
  public selectDnD: any;
  public templateList: any;

  constructor() {}

  ngOnInit() {
    this.selectData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        // disabled: true,
        text: 'Value 2'
      },
      {
        id: 'basic3',
        text: 'Search 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];

    this.selectChildren = [
      {
        id: '0',
        text: 'Cars',
        children: [
            {
                id: 'car1',
                text: 'Car 1'
            },
            {
                id: 'car2',
                text: 'Car 2'
            },
            {
                id: 'car3',
                text: 'Car 3'
            }
        ]
      },
      {
        id: '1',
        text: 'Planes',
        children: [
            {
                id: 'plane1',
                text: 'Plane 1'
            },
            {
                id: 'plane2',
                text: 'Plane 2'
            },
            {
                id: 'plane3',
                text: 'Plane 3'
            }
        ]
      },
      {
        id: '2',
        text: 'Ships',
        children: [
            {
                id: 'ship1',
                text: 'Ship 1'
            },
            {
                id: 'ship2',
                text: 'Ship 2'
            },
            {
                id: 'ship3',
                text: 'Ship 3'
            }
        ]
      }
    ];

    this.selectDnD = ['Item 1', 'Basic', 'Value', 'ListItem', 'Object'];

    this.selectOptions =  {
      multiple: true
    };

    this.templateList = [
      {
        id: 'temp1',
        text: 'Template 1',
        additional: {
          image: 'assets/images/one.png',
          winner: '4'
        }
      },
      {
        id: 'temp2',
        text: 'Template 2',
        additional: {
          winner: '3'
        }
      },
      {
        id: 'temp3',
        text: 'Template 3',
        additional: {
          image: 'assets/images/two.png',
          winner: '1'
        }
      },
      {
        id: 'temp4',
        text: 'Template 4',
        additional: {
          image: 'assets/images/one.png',
          winner: '5'
        }
      },
      {
        id: 'temp5',
        text: 'Template 5',
        additional: {
          image: 'assets/images/one.png',
          winner: '2'
        }
      }
    ];

    this.selectTemplateOptions = {
      templateResult: this.templateResult,
      templateSelection: this.templateSelection
    }
  }

  // function for result template
  public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    let image = '<span class="image"></span>';

    if (state.additional.image) {
      image = '<span class="image"><img src="' + state.additional.image + '"</span>';
    }

    return jQuery('<span><b>' + state.additional.winner + '.</b> ' + image + ' ' + state.text + '</span>');
  }

  // function for selection template
  public templateSelection: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    return jQuery('<span><b>' + state.additional.winner + '.</b> ' + state.text + '</span>');
  }

}