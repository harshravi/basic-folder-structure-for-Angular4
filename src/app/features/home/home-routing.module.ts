import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CanActivateViaAuthGuard } from './../../config/guards/can-activate';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            breadcrumb: 'Dashboard',
            pageTitle: 'Dashboard',
            routeName: 'dasboard1'
        },
        // canActivate: [
        //     CanActivateViaAuthGuard
        // ],

    },
    {
        path: 'application',
        component: ApplicationsComponent,
        data: {
            breadcrumb: 'Application',
            pageTitle: 'application',
            routeName: 'dasboard1'
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [CanActivateViaAuthGuard]
})
export class HomeRoutingModule { }
