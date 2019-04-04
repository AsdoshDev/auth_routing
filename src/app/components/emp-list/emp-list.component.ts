import { DashboardService } from './../../modules/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss'],
  providers: [DashboardService]
})
export class EmpListComponent implements OnInit {



  ngOnInit() {
  }

  empList;
  empDtls = {};
  showDtls = false;

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.getEmployees().subscribe(data => {
      this.empList = data;
    });
  }
  showEmpDtls(item) {
    this.showDtls = true;
    this.empDtls = item;
  }
}
