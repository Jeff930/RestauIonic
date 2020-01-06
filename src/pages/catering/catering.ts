import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';
declare var google;
/**
 * Generated class for the CateringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catering',
  templateUrl: 'catering.html',
})
export class CateringPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public liked1: boolean = false;
  public list: any = [];
  checkApp;
  date = new Date();
  timeSched;
  constructor(public navCtrl: NavController, public imageProvider: ProviderImagesProvider) {
    this.checkApp = this.imageProvider.checkAppPlatform();
  }

  ionViewDidLoad() {
    this.loadMap();
    if (this.date.getDate() !== 0) {
      this.timeSched = '10:00am - 10:00pm';
    } else {
      this.timeSched = '10:00am - 08:00pm';
    }
  }
  callNow() {
    window.open(`tel:3232290228`, '_system');
  }
  emailNow() {
    window.location.href = "mailto:"+ 'info@kusinafilipina.com';
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
  goToMotherLand() {
    window.open('https://web.facebook.com/MotherlandComedy');
  }

  goTo() {
    this.navCtrl.setRoot('ContactPage');
  }

  goToContactUs() {
    this.navCtrl.setRoot('ContactPage');
  }
}
