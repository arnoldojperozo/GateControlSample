import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  door1Status = false;
  door2Status = false;
  subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getStatusDoor1().subscribe(status => {
      if (status) {
        this.door1Status = status;
      } else {
        this.door1Status = false;
      }
    });
    this.subscription = this.dataService.getStatusDoor2().subscribe(status => {
      if (status) {
        this.door2Status = status;
      } else {
        this.door2Status = false;
      }
    });
  }

  ngOnInit(): void {
  }

}
