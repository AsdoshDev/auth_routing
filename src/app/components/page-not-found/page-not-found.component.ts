import { DashboardService } from './../../modules/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      Sorry ! The page you are looking for is not found !
    </p>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }
  ngOnInit() {
  }

}
