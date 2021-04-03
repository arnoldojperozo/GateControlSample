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
  subscription1: Subscription;
  subscription2: Subscription;

  constructor(private dataService: DataService) {
    this.subscription1 = this.dataService.getStatusDoor1().subscribe(status => {
      if (status) {
        this.door1Status = status;
      } else {
        this.door1Status = false;
      }
    });
    this.subscription2 = this.dataService.getStatusDoor2().subscribe(status => {
      if (status) {
        this.door2Status = status;
      } else {
        this.door2Status = false;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
