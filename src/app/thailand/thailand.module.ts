import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThailandPageRoutingModule } from './thailand-routing.module';

import { ThailandPage } from './thailand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThailandPageRoutingModule
  ],
  declarations: [ThailandPage]
})
export class ThailandPageModule {}
