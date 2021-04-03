import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  public door2Status = false

  constructor(private dataService: DataService) {

  }

  getDoorStatus(): boolean {
    return this.dataService.door2Status;
  }

  toggleStatus() {
    this.dataService.switchStatusDoor2();
  }

  ngOnInit(): void {
  }

}

