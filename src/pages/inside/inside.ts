import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

/**
 * Generated class for the InsidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inside',
  templateUrl: 'inside.html',
})
export class InsidePage {
  public liked1: boolean = false;
  public list: any = [];
  checkApp;
  public innerWidth: any;
  constructor(public navCtrl: NavController, public imageProvider: ProviderImagesProvider) {
    // this.list = this.imageProvider.getImages('food');
    this.list = this.imageProvider.getImages('inside');
    this.checkApp = this.imageProvider.checkAppPlatform();
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 480) {
      this.checkApp = true;
    }
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
