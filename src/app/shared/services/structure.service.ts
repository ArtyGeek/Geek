import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StructureService {

  // private dataUrl = './src/structure.json';
  // private popupDataUrl = './src/popup-structure.json';
  public structure: Array<any>;
  public popupStructure: Array<any>;

  constructor (private http: Http) {
  }

  getData(data: any) : Observable<any> {
    return this.http.get(data)
               .map((res:Response) => { 
                 this.structure = res.json();
                 return res.json()}
                 )
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
