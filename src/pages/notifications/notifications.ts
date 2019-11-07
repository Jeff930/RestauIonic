
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  storeTime = [
    { day: 'Monday', time: '10:00am-10:00pm' },
    { day: 'Tuesday', time: '10:00am-10:00pm' },
    { day: 'Wednesday', time: '10:00am-10:00pm' },
    { day: 'Thursday', time: '10:00am-10:00pm' },
    { day: 'Friday', time: '10:00am-10:00pm' },
    { day: 'Saturday', time: '10:00am-10:00pm' },
    { day: 'Sunday', time: '10:00am-04:00pm' }
  ]
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
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
}