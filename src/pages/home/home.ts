import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import { ProviderImagesProvider } from '../../providers/provider-images/provider-images';

import { Nav, Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

declare var google;

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('map') mapElement: ElementRef;
  @ViewChild('slides') slides: Slides;
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
    { name: 'DINAKDAKAN', page: this.foodRoot, image: 'assets/imgs/bestsellers/dinakdakan.jpg', key: 3 },
    { name: 'CRISPY PATA', page: this.drinkRoot, image: 'assets/imgs/bestsellers/crispypata.jpg', key: 0 },
    // { name: 'Inside and Outside', page: this.insideRoot, image: '', key: 2 },
    { name: 'BEEF STEAK TAGALOG', page: this.menuRoot, image: 'assets/imgs/bestsellers/beefsteaktagalog.jpg', key: 4 },
    { name: 'EGG ROLLS', page: this.menuRoot, image: 'assets/imgs/bestsellers/eggrolls.jpg', key: 4 },
    { name: 'KARE-KARE', page: this.menuRoot, image: 'assets/imgs/bestsellers/karekare.jpg', key: 4 },
    { name: 'PANCIT BIHON', page: this.menuRoot, image: 'assets/imgs/bestsellers/pancitbihon.jpg', key: 4 }
    // { name: 'Let us take it Outside', page: this.outsideRoot, image: '', key: 1 }
  ];

  bestsellersList=[{
  bestsellers:[
        { name: 'DINAKDAKAN', page: this.foodRoot, image: 'assets/imgs/bestsellers/dinakdakan.jpg', key: 3 },
        { name: 'CRISPY PATA', page: this.drinkRoot, image: 'assets/imgs/bestsellers/crispypata.jpg', key: 0 },
        { name: 'BEEF STEAK TAGALOG', page: this.menuRoot, image: 'assets/imgs/bestsellers/beefsteaktagalog.jpg', key: 4 }]},{
  bestsellers:[
        { name: 'EGG ROLLS', page: this.menuRoot, image: 'assets/imgs/bestsellers/eggrolls.jpg', key: 4 },
        { name: 'KARE-KARE', page: this.menuRoot, image: 'assets/imgs/bestsellers/karekare.jpg', key: 4 },
        { name: 'PANCIT BIHON', page: this.menuRoot, image: 'assets/imgs/bestsellers/pancitbihon.jpg', key: 4 }]}];

  deskCategories = [
    { name: 'FOODS', page: this.foodRoot, image: '', key: 3 },
    { name: 'DRINKS', page: this.drinkRoot, image: '', key: 0 },
    { name: 'Inside and Outside', page: this.insideRoot, image: '', key: 2 },
    { name: 'MENU', page: this.menuRoot, image: '', key: 4 },
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
    for (let index = 0; index < this.deskCategories.length; index++) {
      // const element = this.categories[index];
      const element2 = this.deskCategories[index];
      // element.image = this.images[element.key].image;
      element2.image = this.images[element2.key].image;
      console.log(this.images[0]);
    }
  }
  
  callNow() {
    window.open(`tel:3232290228`, '_system');
  }

  ionViewDidLoad() {
    
    this.loadMap();
    console.log('ionViewDidLoad HomePage');
    console.log(this.images)
    
    console.log(this.innerWidth);
   
    console.log(this.categories);
    console.log(this.date.getDay());
    if (this.date.getDate() !== 0 ) {
      this.timeSched = '10:00am - 10:00pm';
    } else {
      this.timeSched = '10:00am - 08:00pm';
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
    this.navCtrl.setRoot('AboutPage');
  }

  goToContactUs() {
    this.navCtrl.setRoot('ContactPage');
  }

  next(slides) {
    slides.slideNext();
  }
  prev(slides) {
    slides.slidePrev();
  }
  clickNext() {
    let element: HTMLElement = document.getElementById('next') as HTMLElement;
    element.click();
  }
  clickPrev() {
    let element: HTMLElement = document.getElementById('prev') as HTMLElement;
    element.click();
  }
}
