import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { WizardService } from './../wizard-shared/wizard.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'wizard-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent {
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

  form: FormGroup;
  private _isActive: boolean = false;
  private _submitFormOnNext: boolean = true;
  public isDisabled: boolean = true;
  public disableNext: boolean = false;
  public showOverlay: boolean = false;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('name', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('2', Validators.required),
      password: new FormGroup({
        pass: new FormControl('11', Validators.required),
        confirm: new FormControl('11', Validators.required)
      })
    });
  }

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