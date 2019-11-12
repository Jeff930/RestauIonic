
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

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
    { day: 'Sunday', time: '10:00am-08:00pm' }
  ]
  categories = [
    { name: 'MENUS', icon: 'fas fa-utensils', numbers: 1022 },
    { name: 'TOP RATED',  icon: 'fas fa-heart', numbers: 65200 },
    { name: 'HAPPY CUSTOMERS',  icon: 'fas fa-users', numbers: 15642 },
    { name: 'BRANCHES', icon: 'fas fa-home', numbers: 30 },
    // { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];
  testimonials = [
      {
         name: 'Cirselda C.', testim: 'I really liked my visit.  This place beats most of the sit-down Filipino Restaurant I know with regards to execution of traditional Filipino dishes, including or maybe tied with L.A. Rose.  Give them a try! I really like their beer selection and Seafood Boil options.Had the Mussel Boil and did not skimp on the seasonings or ingredients.Very full of flavor. They have good A/ C.', 
        image: 'JunHeadshot.jpg' },
      {
        name: 'John P.', testim: 'Staff, owner are so helpful here. Been coming here for a few years. Today ordered the pork sinigang soup (tamarind) and the Fried bangus (Fried milkfish in vinegar, garlic, and pepper), and a couple scoops of garlic rice. The server suggested for next time, the pancit bihon(rice noodles sautéed with veggies and a meat) and the beef steak Tagalog(sirloin strips with onions, lemon, pepper, soy sauce and fried onion rings).',
        image: 'JunHeadshot.jpg'
      },
      {
        name: 'Israel S.', testim: 'I setup a surprise birthday lunch for my wife with 15 guests. From planning to execution this place did everything I expected plus more. The area can be deceiving because of not being new but inside is pleasant, cool and presentable. The staff was attentive and helpful and the best part is the food, it was definitely excellent authentic filipino cuisine. Don"t miss out on the cebuchon(pork belly).I myself make my own and their version did not disappoint, flavorful and crunchy pork skin.Thank you, Jun, Ms.V and the staff, you helped made the day memorable.',
        image: 'JunHeadshot.jpg'
      },
      {
        name: 'Sherill Y.', testim: 'If you"re looking for Filipino dishes, just like your grandma made them, this is the place to go.Their dishes are home- style cooking and it brings me back to when I was little.Definitely comfort food for my Filipino soul.The staff and owner are very hospitable and they make you feel at home.Definitely leave room for dessert as their halo halo is something you don"t want to miss.',
        image: 'JunHeadshot.jpg'
      },
      {
        name: 'Cristina G.', testim: 'This is probably my favorite pinoy restaurant in town. The new management is awesome, food is 10x better!, friendly staff and cool owner! Jun(the owner) will make you feel like family, super nice guy! Place is newly renovated and the food is just delicious! Our faves are chami, kare kare, sizzling sisig, crispy pata and the platters...geesh, all of it:) My family and relatives loves this place.Go here if you want some tasty filipino food.',
        image: 'JunHeadshot.jpg'
      }
  
      
  ]
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
}