import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

declare var google;
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

  @ViewChild('map') mapElement: ElementRef;
  map: any;
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
    { name: 'Look at our Menu', content: [], image: 'far fa-list-alt', key: 1 },
    { name: 'Inside & Outside', content: [], image: 'fas fa-home', key: 2 },
    { name: 'Enjoy the Drinks', content: [], image: 'fas fa-coffee', key: 3 },
  ];
  deskCategories = [
    { name: 'Our Foods', content: [], image: 'fas fa-utensils' , key: 0},
    { name: 'Look at our Menu', content: [], image: 'far fa-list-alt', key: 1 },
    { name: 'Inside & Outside', content: [], image: 'fas fa-home', key: 2 },
    { name: 'Enjoy the Drinks', content: [], image: 'fas fa-coffee', key:  3 }
  ];
  itemContent: any;
  oldKey= null;
  public innerWidth: any;
  date = new Date();
  timeSched;
  deskCurrentKey;
  mobileCurrentKey;
  constructor(public navCtrl: NavController, public image: ProviderImagesProvider) {

    this.itemContent = [];
    this.getDeskData(this.deskCategories[0]);
  }
  ngAfterViewInit() { setTimeout(() => { this.loadMap() }, 1000) }

  ionViewDidLoad() {
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
    if (this.innerWidth <= 480) {
      this.checkApp = true;
    }
    if (this.date.getDate() !== 0 ) {
      this.timeSched = '10:00am - 10:00pm';
    } else {
      this.timeSched = '10:00am - 08:00pm';
    }
    console.log(this.itemContent);
    this.loadMap();
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
  catClick(item) {
    // this.oldKey = item.key;
    let currentKey = item.key;
    this.mobileCurrentKey = currentKey;
    if (currentKey === this.oldKey) {
      this.categories[item.key].content = [];
      currentKey = null;
    }
    if (this.oldKey !== null) {
      this.categories[this.oldKey].content = [];

    }

    if (currentKey === 0) {
      this.categories[item.key].content = this.image.getAllFoodsFromMenu();
    } else if (currentKey === 3) {
      this.categories[item.key].content = this.image.getImages('drinks');
    } else if (currentKey === 2) {
      this.categories[item.key].content = this.image.getImages('outside');
    } else if (currentKey === 1) {
      this.categories[item.key].content = this.image.getImages('menu');
    }
    if (currentKey === null) {
      this.oldKey = null;
      this.mobileCurrentKey = null;
    } else {
      this.oldKey = item.key;
    }
    // this.categories[item.key].content
    console.log(this.categories[item.key].content);
  }

  

  callNow() {
    window.open(`tel:3232290228`, '_system');
  }
  
  getDeskData(item) {
    this.deskCurrentKey = item.key;
    let currentKey = item.key;
    if (currentKey === this.oldKey) {
     this.itemContent = [];
      currentKey = null;
    }
    if (this.oldKey !== null) {
      this.itemContent = [];

    }

    if (currentKey === 0) {
      this.itemContent = this.image.getAllFoodsFromMenu();
    } else if (currentKey === 1) {
      this.itemContent = this.image.getImages('drinks');
    } else if (currentKey === 2) {
      this.itemContent = this.image.getImages('outside');
    } else if (currentKey === 3) {
      this.itemContent = this.image.getImages('menu');
    }
    if (currentKey === null) {
      this.oldKey = null;
      this.deskCurrentKey = null;
    } else {
      this.oldKey = item.key;
    }
    // this.categories[item.key].content
    console.log(this.itemContent);
  }

}
