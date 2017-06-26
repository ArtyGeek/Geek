import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: 'wizard-example',
  templateUrl: './wizard-example.component.html',
  styleUrls: ['./wizard-example.component.scss']
})

export class WizardExampleComponent {
  contactFormData: any = {
    name: 'John',
    email: 'john@mail.com'
  };

  showNext: boolean = true;
  showPrev: boolean = true;
  showExtraStep: boolean = false;
  isCompleted: boolean = false;
  vertical: boolean = false;
  showWizard: boolean = false;
  completeWizard: boolean = false;

  currentStepValue: any;
  

  constructor() {}

  onNext1Step(event) {
    console.log('From Step 1 to Step 2');
  }

  onPrev2Step(event) {
    console.log('Back from Step 2 to Step 1');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  changeWizardOrientation() {
    this.vertical = !this.vertical;
  }

  //form!!????
  
  isValidForm: boolean = false;
  getFormValue(event) {
    this.isValidForm = event.valid;
  }

  submitEvent(event) {
    console.log(event);
    this.currentStepValue = event;
  }

  showWizardPopup() {
    this.showWizard = !this.showWizard;
  }

  completePopup(event) {
    this.completeWizard = event;
  }

}