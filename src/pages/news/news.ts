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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public image: ProviderImagesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.images = this.image.getImages();
    console.log(this.images)
  }

  goTo() {
  
    this.navCtrl.push('HomePage');
  }
}
