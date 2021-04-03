import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../animations/animations';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  animations: [SlideInOutAnimation]
})
export class Page2Component implements OnInit {

  public door2Status = false;
  public animationState = 'in';

  constructor(private dataService: DataService) {
    this.door2Status = this.dataService.door2Status;
    this.animationState = this.door2Status?'in':'out';
  }

  getDoorStatus(): boolean {
    return this.dataService.door2Status;
  }

  toggleStatus() {
    this.dataService.switchStatusDoor2();
  }

  toggleShowDiv() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

  ngOnInit(): void {
    this.toggleShowDiv();
  }

}
