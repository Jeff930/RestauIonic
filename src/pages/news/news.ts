import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

import { HomePage } from '../home/home';
import { Nav, Platform } from 'ionic-angular';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  allFoodsRoot = 'AllFoodsPage'
  foodRoot = 'FoodPage'
  insideRoot = 'InsidePage'
  menuRoot = 'MenuPage'
  drinkRoot = 'DrinkPage'
  outsideRoot = 'OutsidePage'
  images = [];
  checkApp: boolean;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  categories = [
    { name: 'Our Foods', page: this.foodRoot, image: '', key: 3 },
    { name: 'Enjoy the Drinks', page: this.drinkRoot, image: '', key: 0 },
    { name: 'Inside and Outside', page: this.insideRoot, image: '', key: 2 },
    { name: 'Look at our Menu', page: this.menuRoot, image: '', key: 4 },
    // { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];
  deskCategories = [
    { name: 'Our Foods', page: this.foodRoot, image: '', key: 3 },
    { name: 'Enjoy the Drinks', page: this.drinkRoot, image: '', key: 0 },
    { name: 'Inside the Restaurant', page: this.insideRoot, image: '', key: 2 },
    { name: 'Look at our Menu', page: this.menuRoot, image: '', key: 4 },
    { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];
  public innerWidth: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public image: ProviderImagesProvider, public platform: Platform) {

    this.checkApp = this.platform.is('android'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.images = this.image.getEachImageForView();
    console.log(this.images)
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <=480) {
      this.checkApp = true;
    }
    console.log(this.innerWidth);

    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];
      const element2 = this.deskCategories[index];
      element.image = this.images[element.key].image;
      element2.image = this.images[element2.key].image;
      console.log(this.images[0]);
    }
    console.log(this.categories);
  }

  goTo() {
  
    this.navCtrl.push('GalleryTabsPage');
  }
}
