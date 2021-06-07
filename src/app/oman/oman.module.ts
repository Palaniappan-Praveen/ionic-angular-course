import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmanPageRoutingModule } from './oman-routing.module';

import { OmanPage } from './oman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmanPageRoutingModule
  ],
  declarations: [OmanPage]
})
export class OmanPageModule {}
