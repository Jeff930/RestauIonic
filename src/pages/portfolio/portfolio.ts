import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

/**
 * Generated class for the PortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {
  currentImage; 
  checkApp;
  public innerWidth: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imageProvider: ProviderImagesProvider) {
	  this.currentImage = this.imageProvider.currentImage;
    console.log(this.currentImage) 
    this.checkApp = this.imageProvider.checkAppPlatform();
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <=480) {
      this.checkApp = true;
    }
}

  goTo() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
	  
    console.log('ionViewDidLoad PortfolioPage');
  }

}
