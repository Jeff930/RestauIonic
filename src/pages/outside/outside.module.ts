import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutsidePage } from './outside';

@NgModule({
  declarations: [
    OutsidePage,
  ],
  imports: [
    IonicPageModule.forChild(OutsidePage),
  ],
})
export class OutsidePageModule {}
