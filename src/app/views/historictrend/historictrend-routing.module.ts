import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { HistorictrendComponent } from './historictrend.component';

const routes: Routes = [
  {
    path: '',
    component: HistorictrendComponent,
    data: {
      title: 'historictrend'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorictrendRoutingModule {}
