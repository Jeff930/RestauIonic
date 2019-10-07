import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public liked1:boolean=false;
	public list:any= [];
	
	constructor(public navCtrl: NavController, public imageProvider: ProviderImagesProvider) {
		this.list = this.imageProvider.getImages('drinks');
	}

	enterWebsite(){
		this.navCtrl.push('HomePage');
	}

	like(no){
		
		if(this.liked1){
			this.liked1 = false;
		}else{
			this.liked1 = true;
		}
	}

	showPortfolio(){
		this.navCtrl.push('PortfolioPage');
	}
}
