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
    { name: 'Our Foods', content: [], image: 'fas fa-utensils' , key: 0},
    { name: 'Enjoy the Drinks', content: [], image: 'fas fa-coffee', key: 1 },
    { name: 'Inside & Outside', content: [], image: 'fas fa-home', key: 2 },
    { name: 'Look at our Menu', content: [], image: 'far fa-list-alt', key:  3 },
  ];
  deskCategories = [
    { name: 'Our Foods', page: this.foodRoot, image: '', key: 3 },
    { name: 'Enjoy the Drinks', page: this.drinkRoot, image: '', key: 0 },
    { name: 'Inside the Restaurant', page: this.insideRoot, image: '', key: 2 },
    { name: 'Look at our Menu', page: this.menuRoot, image: '', key: 4 },
    { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];
  oldKey= null;
  public innerWidth: any;
  constructor(public navCtrl: NavController, public image: ProviderImagesProvider) {
    this.images = this.image.getEachImageForView();
    // for (let index = 0; index < this.categories.length; index++) {
    //   const element = this.categories[index];
    //   const element2 = this.deskCategories[index];
    //   element.image = this.images[element.key].image;
    //   element2.image = this.images[element2.key].image;
    //   console.log(this.images[0]);
    // }
    console.log(this.categories)
    console.log(this.image.checkAppPlatform());
    this.checkApp = this.image.checkAppPlatform();
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <=480) {
      this.checkApp = true;
    }
  }

  catClick(item) {
    // this.oldKey = item.key;
    let currentKey = item.key;
    if (currentKey === this.oldKey) {
      this.categories[item.key].content = [];
      currentKey = null;
    }
    if (this.oldKey !== null) {
      this.categories[this.oldKey].content = [];

    }

    if (currentKey === 0) {
      this.categories[item.key].content = this.image.getAllFoodsFromMenu();
    } else if (currentKey === 1) {
      this.categories[item.key].content = this.image.getImages('drinks');
    } else if (currentKey === 2) {
      this.categories[item.key].content = this.image.getImages('outside');
    } else if (currentKey === 3) {
      this.categories[item.key].content = this.image.getImages('menu');
    }
    if (currentKey === null) {
      this.oldKey = null;
    } else {
      this.oldKey = item.key;
    }
    // this.categories[item.key].content
    console.log(this.categories[item.key].content);
  }
  
}
