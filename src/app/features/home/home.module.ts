import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



/** Module imported for breadcrumb  */
// import { BreadcrumbModule } from 'primeng/primeng';

import { CanActivateViaAuthGuard } from './../../config/guards/can-activate';
import { AuthenticationService } from '../../services/Authentication/authentication.service';


/** Modules imported for data grid */
// import { ModalModule } from 'angular2-modal';
// import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
// import { ToasterModule } from 'angular2-toaster';
// // import { DatePickerModule } from 'ng2-datepicker/ng2-datepicker';
// import { MomentModule } from 'angular2-moment';
/** Custom App based modules */
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';



/** All Modal Based Imports go here  */



/** Component's Modules to be imported */
import {
} from '../../components';
import { ApplicationsComponent } from './applications/applications.component';


const options: any = {
  animate: 'flyRight',
  positionClass: 'toast-bottom-right',
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  declarations: [
    DashboardComponent,
    ApplicationsComponent
  ],
  entryComponents: [

  ],
  providers: [
    CanActivateViaAuthGuard,
    AuthenticationService,
  ]
})
export class HomeModule { }

