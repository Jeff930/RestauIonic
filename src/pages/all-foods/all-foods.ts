import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

/**
 * Generated class for the AllFoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-foods',
  templateUrl: 'all-foods.html',
})
export class AllFoodsPage {

  public liked1: boolean = false;
  public list: any = [];

  constructor(public navCtrl: NavController, public imageProvider: ProviderImagesProvider) {
    this.list = this.imageProvider.getImages('All');
  }

  enterWebsite() {
    this.navCtrl.push('HomePage');
  }

  like(no) {

    if (this.liked1) {
      this.liked1 = false;
    } else {
      this.liked1 = true;
    }
  }

  showPortfolio(image) {
    this.navCtrl.push('PortfolioPage');
    console.log(image);
    this.imageProvider.currentImage = image;
  }
}
