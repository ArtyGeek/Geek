import { Component, EventEmitter, Output, Input, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { WizardService } from './../wizard-shared/wizard.service';
// import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'zion-wizard-step',
    templateUrl: './wizard-step.component.html',
    styleUrls: ['./wizard-step.component.scss'],
})
export class WizardStepComponent implements AfterContentInit {
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
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  // @ContentChildren('stepForm') stepForm;
  
  private _currentForm: any;
  private _isActive: boolean = false;
  private _isValid: boolean = false;
  private _submitFormOnNext: boolean = false;
  public isDisabled: boolean = true;
  public disableNext: boolean = false;
  public showOverlay: boolean = false;
  
  constructor() {}

  ngAfterContentInit() {
    // if(this.hasForm) {
    //   this._currentForm = this.stepForm.first;      
    //   this.isValid = this._currentForm.isFormValid;
    // }
  }

  @Input('needInsideConfirmation') set submitFormOnNext(value: boolean) {
    this.disableNext = value;
    this._submitFormOnNext = !value;
  }

  get submitFormOnNext(): boolean {
    return this._submitFormOnNext;
  }

  @Input('isActive') set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  isValid() {
    return true;
  }

  // @Input('isValid') set isValid(value: boolean) {
  //  if(this.hasForm ) {
  //     this._isValid = value;
  //   }
  // }

  // get isValid(): boolean {
  //   return this._isValid;
  // }

}