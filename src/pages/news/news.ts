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
  images = [];
  checkApp: boolean;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public image: ProviderImagesProvider, public platform: Platform) {

    this.checkApp = this.platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.images = this.image.getEachImageForView();
    console.log(this.images)
  }

  goTo() {
  
    this.navCtrl.push('GalleryTabsPage');
  }
}
