import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmpListComponent } from './../../components/emp-list/emp-list.component';
import { TraineeListComponent } from './../../components/trainee-list/trainee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

export const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'employees', component: EmpListComponent },
            { path: 'trainees', component: TraineeListComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }




