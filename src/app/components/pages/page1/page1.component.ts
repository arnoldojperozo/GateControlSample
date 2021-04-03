import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  public door1Status = false

  constructor(private dataService: DataService) {
    //this.door1Status = dataService.getStatusDoor1();
  }

  getDoorStatus(): boolean {
    console.log("Door 1 Get: ",this.dataService.door1Status);
    return this.dataService.door1Status;
  }

  toggleStatus() {
    console.log("Door 1 Set: ",!this.dataService.door2Status);
    this.dataService.switchStatusDoor1();
  }

  ngOnInit(): void {
  }

}
