import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmanPage } from './oman.page';

const routes: Routes = [
  {
    path: '',
    component: OmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmanPageRoutingModule {}
