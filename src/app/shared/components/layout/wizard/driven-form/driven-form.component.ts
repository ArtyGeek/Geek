import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from "@angular/core";

import { WizardService } from './../wizard-shared/wizard.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'wizard-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})

export class DrivenFormComponent {
  contactFormData: any = {
    name: '',
    age: '',
    email: ''
  };

  @ViewChild('contactForm') public form: any;

  @Input() title: string;
  @Input() icon: string;
  @Input() hidden: boolean = false;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;
  @Input() hasForm: boolean = false;
  @Input() help: string = '';
  @Input() needInsideConfirmation: boolean = false;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  private _submitFormOnNext: boolean = true;
  public isDisabled: boolean = true;
  public disableNext: boolean = false;
  public showOverlay: boolean = false;

  constructor() {}

  @Input('isActive') set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  @Input('needInsideConfirmation') set submitFormOnNext(value: boolean) {
    this.disableNext = value;
    this._submitFormOnNext = !value;
  }

  get submitFormOnNext(): boolean {
    return this._submitFormOnNext;
  }

  isValid() {
    return this.form.valid;
  }

  submitForm(form) {
    return new Promise(resolve =>
      {
        let component = this;
        
        if (form.valid) {
          this.showOverlay = true;
          setTimeout(function() {
            if(component.disableNext) component.disableNext = !form.valid;
            component.onSubmit.emit(form);
            component.showOverlay = false;

             resolve(form);
            
          }, 2000);
        }
      }
    );
  }
}