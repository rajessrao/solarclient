import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AnalysisComponent } from './analysis.component';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { Chart } from "angular-highcharts";
import { ChartModule, HIGHCHARTS_MODULES } from "angular-highcharts";
import {CommonModule} from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS,HttpRequest } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import exporting from 'highcharts/modules/exporting.src.js';

export function highchartsModules(){
  return [exporting];
}
@NgModule({
  imports: [
    FormsModule,ChartModule,ChartsModule,CommonModule,HttpClientModule,
    AnalysisRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AnalysisComponent ],
  providers:[{provide:HIGHCHARTS_MODULES, useFactory: highchartsModules }]
})
export class AnalysisModule { }
