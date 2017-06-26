import { Component, EventEmitter, Output, Input, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

// import { WizardService } from './wizard-shared/wizard.service';
// import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'zion-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements AfterContentInit {
  @ContentChildren('wizardStep') wizardSteps;
  @ContentChildren('wizardStepPopup') popupSteps;
  
  @Input() title: string;
  @Input() icon: string;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;
  @Input() leftSide: boolean = false;
  @Input() onPopup: boolean = false;
  @Input() stepValue: any = null;
  @Input() showOnClick: boolean = false;

  @Output() onStepChanged: EventEmitter<any> = new EventEmitter<any>();    
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPopupComplete: EventEmitter<any> = new EventEmitter<any>();
  
  private _steps: Array<any> = [];
  private _isCompleted: boolean = false;
  private _isActive: boolean = false;
  private submitFormOnNext: boolean = false;

  public isDisabled: boolean = true;

  constructor() {}

  ngAfterContentInit() {
    if(this.onPopup) {
      this.popupSteps.forEach(step => this._steps.push(step));
    } else {
      this.wizardSteps.forEach(step => this._steps.push(step));
    }

    this.steps[0].isActive = true;
  } 

  @Input('isActive') set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  private get steps(): Array<any> {
    return this._steps.filter(step => !step.hidden);
  }

  private get isCompleted(): boolean {
    return this._isCompleted;
  }

  private get activeStep(): any {
    return this.steps.find(step => step.isActive);
  }

  private set activeStep(step: any) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  private get nextStep(): any {
    return this.steps[this.activeStepIndex + 1];
  }

  private get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  private get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  private get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  isValid() {
    return true;
  }

  goToStep(step: any) {
    if (!this.isCompleted) {
      this.activeStep = step;
    }
  }

  previous() {
    if (!this.hasPrevStep) {
      return false;
    }
    let prevStep = this.steps[this.activeStepIndex - 1];
    this.activeStep.onPrev.emit();
    this.activeStep = prevStep;
  }

  goToNextStep() {
    if (!this.hasNextStep) { 
       return false;
    }
    if(this.activeStep.form) this.activeStep.onSubmit.emit(this.activeStep.form);
    
    let nextStep = this.steps[this.activeStepIndex + 1];
    this.activeStep.onNext.emit();
    nextStep.isDisabled = false;
    this.activeStep = nextStep;
  }

  complete() {
    this._isCompleted = true;
    this.activeStep.onComplete.emit();
    if(this.onPopup) {
      this.onPopup = false;
      if (this.showOnClick) this.isActive = false;
      this.onPopupComplete.emit(true);
    }
  }

  next() {
    if (!this.activeStep.submitFormOnNext && this.activeStep.isValid()) {
      this.goToNextStep();
      return false;
    } 

    this.activeStep.submitForm(this.activeStep.form).then(value => {
      this.activeStep.onSubmit.emit(value);
      this.goToNextStep();
    });  
  }
}
