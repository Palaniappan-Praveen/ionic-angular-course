import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThailandPage } from './thailand.page';

const routes: Routes = [
  {
    path: '',
    component: ThailandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThailandPageRoutingModule {}
