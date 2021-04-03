import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  door1Status = false;
  door2Status = false;

  private door1StatusChange = new Subject<any>();
  private door2StatusChange = new Subject<any>();

  constructor() {
    this.door1Status = false;
    this.door1StatusChange.next(false);
    this.door2Status = false;
    this.door2StatusChange.next(false);
  }

  public getStatusDoor1(): Observable<boolean>{
    return this.door1StatusChange.asObservable();
  }

  public getStatusDoor2(): Observable<boolean>{
    return this.door2StatusChange.asObservable();
  }

  public switchStatusDoor1(){
    this.door1StatusChange.next(!this.door1Status);
    this.door1Status = !this.door1Status;
  }

  public switchStatusDoor2(){
    this.door2StatusChange.next(!this.door2Status);
    this.door2Status = !this.door1Status;
  }

}
