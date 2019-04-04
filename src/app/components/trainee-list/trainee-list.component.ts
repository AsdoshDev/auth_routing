import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../modules/dashboard/dashboard.service';


@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.scss']
})
export class TraineeListComponent implements OnInit {

  traineeList;
  traineeDtls = {};
  showDtls = false;

  ngOnInit() {
    let userId = localStorage.getItem('id');
    this.dashboardService.getTrainees(userId).subscribe(data => {
      this.traineeList = data;
    });
  }

  constructor(private dashboardService: DashboardService) {
   
  }
  showTraineeDtls(item) {
    this.showDtls = true;
    this.traineeDtls = item;
  }
}
