import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

import { HomePage } from '../home/home';
import { Nav, Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';


declare var google;

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
  @ViewChild('map') mapElement: ElementRef;
  map: any;
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
    { name: 'FOODS', page: this.foodRoot, image: '', key: 3 },
    { name: 'DRINKS', page: this.drinkRoot, image: '', key: 0 },
    // { name: 'Inside and Outside', page: this.insideRoot, image: '', key: 2 },
    { name: 'MENU', page: this.menuRoot, image: '', key: 4 },
    // { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];
  deskCategories = [
    { name: 'FOODS', page: this.foodRoot, image: '', key: 3 },
    { name: 'DRINKS', page: this.drinkRoot, image: '', key: 0 },
    { name: 'Inside and Outside', page: this.insideRoot, image: '', key: 2 },
    { name: 'MENU', page: this.menuRoot, image: '', key: 4 },
    // { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];
  // deskCategories = [
  //   { name: 'Our Foods', page: this.foodRoot, image: '', key: 3 },
  //   { name: 'Enjoy the Drinks', page: this.drinkRoot, image: '', key: 0 },
  //   { name: 'Inside the Restaurant', page: this.insideRoot, image: '', key: 2 },
  //   { name: 'Look at our Menu', page: this.menuRoot, image: '', key: 4 },
  //   { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  // ];
  public innerWidth: any;
  date = new Date();
  timeSched;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public image: ProviderImagesProvider, public platform: Platform, private callNumber: CallNumber) {

    this.images = this.image.getEachImageForView();
    this.checkApp = this.platform.is('android'); 
    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];
      const element2 = this.deskCategories[index];
      element.image = this.images[element.key].image;
      element2.image = this.images[element2.key].image;
      console.log(this.images[0]);
    }
  }
  
  callNow() {
    window.open(`tel:3232290228`, '_system');
  }

  ionViewDidLoad() {
    
    this.loadMap();
    console.log('ionViewDidLoad NewsPage');
    console.log(this.images)
    
    console.log(this.innerWidth);
   
    console.log(this.categories);
    console.log(this.date.getDay());
    if (this.date.getDate() !== 0 ) {
      this.timeSched = '10:00am - 10:00pm';
    } else {
      this.timeSched = '10:00am - 04:00pm';
    }
  }

  loadMap() {

    let latLng = new google.maps.LatLng(34.122198, -118.225819);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let marker = new google.maps.Marker({
      position: latLng,
      map: mapOptions,
      title: 'Hello World!'
    });
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(this.map);
  }
  addMarker(map: any) {

    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    // this.addInfoWindow(marker, content);



  }
  goTo() {
  
    this.navCtrl.setRoot('GalleryTabsPage');
  }

  goToAboutUs() {
    this.navCtrl.setRoot('NotificationsPage');
  }
}
