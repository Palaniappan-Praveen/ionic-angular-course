import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingaporePageRoutingModule } from './singapore-routing.module';

import { SingaporePage } from './singapore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingaporePageRoutingModule
  ],
  declarations: [SingaporePage]
})
export class SingaporePageModule {}
