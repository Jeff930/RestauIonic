import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

/**
 * Generated class for the GalleryTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery-tabs',
  templateUrl: 'gallery-tabs.html'
})
export class GalleryTabsPage {

  allFoodsRoot = 'AllFoodsPage'
  foodRoot = 'FoodPage'
  insideRoot = 'InsidePage'
  menuRoot = 'MenuPage'
  drinkRoot = 'DrinkPage'
  outsideRoot = 'OutsidePage'
  images = [];
  checkApp;
  categories = [ 
    { name: 'Our Foods', page: this.foodRoot, image: '' , key: 3},
    { name: 'Enjoy the Drinks', page: this.drinkRoot, image: '', key: 0 },
    { name: 'Inside the Restaurant', page: this.insideRoot, image: '', key: 2 },
    { name: 'Look at our Menu', page: this.menuRoot, image: '', key:  4 },
    { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];

  constructor(public navCtrl: NavController, public image: ProviderImagesProvider) {
    this.images = this.image.getEachImageForView();
    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];
      element.image = this.images[element.key].image;
      console.log(this.images[0]);
    }
    console.log(this.categories)
    console.log(this.image.checkAppPlatform());
    this.checkApp = this.image.checkAppPlatform();
  }

  catClick(item) {
    this.navCtrl.push(item.page);
  }

}
