import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HistorictrendComponent } from './historictrend.component';
import { HistorictrendRoutingModule } from './historictrend-routing.module';

@NgModule({
  imports: [
    FormsModule,
    HistorictrendRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ HistorictrendComponent ]
})
export class HistorictrendModule { }
