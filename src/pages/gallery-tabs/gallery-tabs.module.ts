import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryTabsPage } from './gallery-tabs';

@NgModule({
  declarations: [
    GalleryTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryTabsPage),
  ]
})
export class GalleryTabsPageModule {}
