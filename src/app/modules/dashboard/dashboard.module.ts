import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { EmpDtlsComponent } from './../../components/emp-dtls/emp-dtls.component';
import { EmpListComponent } from './../../components/emp-list/emp-list.component';
import { TraineeListComponent } from './../../components/trainee-list/trainee-list.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';


@NgModule({
  declarations: [
    DashboardComponent,
    TraineeListComponent,
    EmpListComponent,
    EmpDtlsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers : [AuthGuard]
})
export class DashboardModule { }
