
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

declare var google;
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  storeTime = [
    { day: 'Monday', time: '10:00am-10:00pm' },
    { day: 'Tuesday', time: '10:00am-10:00pm' },
    { day: 'Wednesday', time: '10:00am-10:00pm' },
    { day: 'Thursday', time: '10:00am-10:00pm' },
    { day: 'Friday', time: '10:00am-10:00pm' },
    { day: 'Saturday', time: '10:00am-10:00pm' },
    { day: 'Sunday', time: '10:00am-08:00pm' }
  ]
  categories = [
    { name: 'MENUS', icon: 'fas fa-utensils', numbers: 10222 },
    { name: 'TOP RATED',  icon: 'fas fa-heart', numbers: 65200 },
    { name: 'HAPPY CUSTOMERS',  icon: 'fas fa-users', numbers: 15642 },
    { name: 'BRANCHES', icon: 'fas fa-home', numbers: 30 },
    // { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];

  checkApp;
  date = new Date();
  timeSched;
  constructor(public navCtrl: NavController, public imageProvider: ProviderImagesProvider) {
     this.checkApp = this.imageProvider.checkAppPlatform();
  }

  ionViewDidLoad() {
    this.loadMap();  
    if (this.date.getDate() !== 0 ) {
      this.timeSched = '10:00am - 10:00pm';
    } else {
      this.timeSched = '10:00am - 08:00pm';
    }
  }
  callNow() {
    window.open(`tel:3232290228`, '_system');
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

  goToContactUs() {
    this.navCtrl.setRoot('ContactPage');
  }

}
