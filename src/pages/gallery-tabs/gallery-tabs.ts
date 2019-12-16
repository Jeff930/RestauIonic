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
    { name: 'Appetizer', content: [], image: 'fas fa-apple-alt', key: 0 },
    { name: 'Pork', content: [], image: 'fas fa-bacon', key: 1 },
    { name: 'Vegetable', content: [], image: 'fas fa-carrot', key: 2 },
    { name: 'Beef', content: [], image: 'fas fa-cloud-meatball', key: 3 },
    { name: 'Seafood', content: [], image: 'fas fa-fish', key: 4 },
    { name: 'Soup', content: [], image: 'fas fa-glass-whiskey', key: 5 },
    { name: 'Noodles', content: [], image: 'fas fa-stroopwafel', key: 6 },
    { name: 'Platters', content: [], image: 'fas fa-cloud-meatball', key: 7 },
    { name: 'Rice', content: [], image: 'fas fa-seedling', key: 8 },
    { name: 'Chicken', content: [], image: 'fas fa-drumstick-bite', key: 9 },
    { name: 'Drinks', content: [], image: 'fas fa-beer', key: 10 },
  ];
 
  deskCategories = [
    { name: 'Appetizer', content: [], image: 'fas fa-apple-alt', key: 0 },
    { name: 'Pork', content: [], image: 'fas fa-bacon', key: 1},
    { name: 'Vegetable', content: [], image: 'fas fa-carrot', key: 2 },
    { name: 'Beef', content: [], image: 'fas fa-cloud-meatball', key: 3 },
    { name: 'Seafood', content: [], image: 'fas fa-fish', key: 4 },
    { name: 'Soup', content: [], image: 'fas fa-glass-whiskey', key: 5 },
    { name: 'Noodles', content: [], image: 'fas fa-stroopwafel', key: 6 },
    { name: 'Platters', content: [], image: 'fas fa-cloud-meatball', key: 7 },
    { name: 'Rice', content: [], image: 'fas fa-seedling', key: 8 },
    { name: 'Chicken', content: [], image: 'fas fa-drumstick-bite', key: 9 },
    { name: 'Drinks', content: [], image: 'fas fa-beer', key: 10 },

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
      this.categories[0].content = this.image.getImages('appetizers');
    } else if (currentKey === 1) {
      this.categories[1].content = this.image.getImages('porks');
    } else if (currentKey === 2) {
      this.categories[2].content = this.image.getImages('vegetables');
    } else if (currentKey === 3) {
      this.categories[3].content = this.image.getImages('beefs');
    } else if (currentKey === 4) {
      this.categories[4].content = this.image.getImages('seafoods');
    } else if (currentKey === 5) {
      this.categories[5].content = this.image.getImages('soups');
    } else if (currentKey === 6) {
      this.categories[6].content = this.image.getImages('noodles');
    } else if (currentKey === 7) {
      this.categories[7].content = this.image.getImages('platters');
    } else if (currentKey === 8) {
      this.categories[8].content = this.image.getImages('rices');
    } else if (currentKey === 9) {
      this.categories[9].content = this.image.getImages('chickens');
    } else if (currentKey === 10) {
      this.categories[10].content = this.image.getImages('drinks');
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
      this.itemContent = this.image.getImages('appetizers');
    } else if (currentKey === 1) {
      this.itemContent = this.image.getImages('porks');
    } else if (currentKey === 2) {
      this.itemContent = this.image.getImages('vegetables');
    } else if (currentKey === 3) {
      this.itemContent = this.image.getImages('beefs');
    } else if (currentKey === 4) {
      this.itemContent = this.image.getImages('seafoods');
    } else if (currentKey === 5) {
      this.itemContent = this.image.getImages('soups');
    } else if (currentKey === 6) {
      this.itemContent = this.image.getImages('noodles');
    } else if (currentKey === 7) {
      this.itemContent = this.image.getImages('platters');
    } else if (currentKey === 8) {
      this.itemContent = this.image.getImages('rices');
    } else if (currentKey === 9) {
      this.itemContent = this.image.getImages('chickens');
    } else if (currentKey === 10) {
      this.itemContent = this.image.getImages('drinks');
    } 
    // if (currentKey === 0) {
    //   this.itemContent = this.image.getAllFoodsFromMenu();
    // } else if (currentKey === 1) {
    //   this.itemContent = this.image.getImages('drinks');
    // } else if (currentKey === 2) {
    //   this.itemContent = this.image.getImages('outside');
    // } else if (currentKey === 3) {
    //   this.itemContent = this.image.getImages('menu');
    // }
    if (currentKey === null) {
      this.oldKey = null;
      this.deskCurrentKey = null;
    } else {
      this.oldKey = item.key;
    }
    // this.categories[item.key].content
    console.log(this.itemContent);
  }

  goToContactUs() {
    this.navCtrl.setRoot('ContactPage');
  }
   showPortfolio(image) {
    this.navCtrl.push('PortfolioPage');
    console.log(image);
    this.image.currentImage = image;
  }
}
