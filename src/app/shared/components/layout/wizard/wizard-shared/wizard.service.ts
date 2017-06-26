import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class WizardService {
  private submitFormInside = new Subject<any>();

  submitForm$ = this.submitFormInside.asObservable();
 
  confirmSubmiting(value: any) {
    this.submitFormInside.next(value);
  }
}
