import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuGalleryPage } from './menu-gallery';

@NgModule({
  declarations: [
    MenuGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuGalleryPage),
  ],
})
export class MenuGalleryPageModule {}
