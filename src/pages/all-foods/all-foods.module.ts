import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllFoodsPage } from './all-foods';

@NgModule({
  declarations: [
    AllFoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllFoodsPage),
  ],
})
export class AllFoodsPageModule {}
