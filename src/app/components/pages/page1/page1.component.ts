import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../animations/animations';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations: [SlideInOutAnimation]
})
export class Page1Component implements OnInit {

  public door1Status = false;
  public animationState = 'in';

  constructor(private dataService: DataService) {
    this.door1Status = this.dataService.door1Status;
    this.animationState = this.door1Status?'in':'out';
  }

  getDoorStatus(): boolean {
    console.log("Door 1 Get: ",this.dataService.door1Status);
    return this.dataService.door1Status;
  }

  toggleStatus() {
    console.log("Door 1 Set: ",!this.dataService.door2Status);
    this.dataService.switchStatusDoor1();
  }

  toggleShowDiv() {
    console.log(this.animationState);
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
    console.log(this.animationState);
  }

  ngOnInit(): void {
    this.toggleShowDiv();
  }

}
