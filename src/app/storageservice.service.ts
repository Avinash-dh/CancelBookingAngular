import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageserviceService {
  private storageSub=new Subject<String>();

  watchStorage():Observable<any>{
    return this.storageSub.asObservable();
  }
  setItem(key: string, data: any){
    localStorage.setItem(key,data);
    this.storageSub.next('set');
  }
  removeItem(key){
    localStorage.removeItem(key);
    this.storageSub.next('changed');
  }

}
