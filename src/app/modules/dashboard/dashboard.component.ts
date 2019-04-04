import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }
  name: string;
  id:string;
  error
  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.dashboardService.getCurrentUserDtls(this.name).subscribe(data =>{
      if(data){
        localStorage.setItem('id',data[0].id);
      }
    });

    this.dashboardService.errorObj.subscribe(data => {
      this.error = data;
     });
  }

  getErrorResponse(){

    /* using a fake service to receive  error from backend */

    this.dashboardService.errorService().subscribe(data => {
    });
  }
}
