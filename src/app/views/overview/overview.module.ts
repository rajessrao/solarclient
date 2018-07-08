import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BrowserModule  } from '@angular/platform-browser';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS,HttpRequest } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { DashboardService } from '../../services/dashboard.service';
@NgModule({
  imports: [
    FormsModule,HttpClientModule,
    OverviewRoutingModule,CommonModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
   
  ],
  declarations: [ OverviewComponent ],
  
  providers: [DashboardService]
})
export class OverviewModule { }
